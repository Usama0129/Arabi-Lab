import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Stripe初期化
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

// Supabase初期化（管理者権限）
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 環境変数からWebhookシークレットを取得
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event: Stripe.Event;

    // 1. Stripeからの正しい通知か検証する
    try {
      if (!endpointSecret) throw new Error('Missing STRIPE_WEBHOOK_SECRET');
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: any) {
      console.error(`Webhook Signature Verification Failed: ${err.message}`);
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    // 2. 支払いが完了したイベントかどうかチェック
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;

      if (userId) {
        console.log(`Payment successful for user: ${userId}`);
        
        // 3. Supabaseのユーザー情報を更新（プレミアム会員にする）
        const { error } = await supabase
          .from('profiles')
          .update({ is_premium: true })
          .eq('id', userId);

        if (error) {
          console.error('Supabase Update Error:', error);
          return new NextResponse('Database Error', { status: 500 });
        }
      }
    }

    return new NextResponse(null, { status: 200 });

  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}