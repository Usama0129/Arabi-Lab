import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// ターミナルに表示されている whsec_ キーを直接指定
const endpointSecret = "whsec_879c32ce8083eef548aad929966a92370c68d695c1811aeba79eab537f1d57c7";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    console.error(`❌ Webhook署名検証エラー: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      // 1. 決済完了時（有料化）
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.userId;
        const customerId = session.customer as string;

        if (userId) {
          await supabase
            .from('profiles')
            .update({
              is_premium: true,
              stripe_customer_id: customerId,
            })
            .eq('id', userId);
          console.log(`✅ 有料化完了: User ${userId}`);
        }
        break;
      }

      // 2. 解約満了による終了（無料化）
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        await supabase
          .from('profiles')
          .update({ is_premium: false })
          .eq('stripe_customer_id', customerId);
        console.log(`🛑 解約による無料化完了: Customer ${customerId}`);
        break;
      }

      // 3. 支払い失敗時（無料化）
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        await supabase
          .from('profiles')
          .update({ is_premium: false })
          .eq('stripe_customer_id', customerId);
        console.log(`⚠️ 支払い失敗による無料化: Customer ${customerId}`);
        break;
      }

      default:
        console.log(`未処理イベント: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error(`❌ DB更新エラー: ${err.message}`);
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 });
  }
}