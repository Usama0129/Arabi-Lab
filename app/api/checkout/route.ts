import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// Stripeの初期化
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { 
  apiVersion: '2023-10-16' as any 
});

// Supabaseの初期化
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    // 1. ユーザー情報を取得 (priceIdはここで受け取らず、下で直接書きます)
    const { userId, email } = await req.json();
    const returnUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // 2. 既存のStripe顧客IDがあるか確認
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single();
    
    let customerId = profile?.stripe_customer_id;

    // 3. なければ新規作成してSupabaseに保存
    if (!customerId) {
      const customer = await stripe.customers.create({ 
        email, 
        metadata: { supabaseUUID: userId } 
      });
      customerId = customer.id;
      
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', userId);
    }

    // 4. 決済セッションを作成
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      // ★ここにあなたの Price ID を直接書きます！★
      line_items: [{ price: "price_1SmCYCAFaihlgeNmDHVvuoKl", quantity: 1 }],
      success_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${returnUrl}`,
      metadata: { userId },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}