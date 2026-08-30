import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

// ★ 本番テスト用: 決済を許可するメールアドレス（page.tsx と同じメールアドレス）
const ALLOWED_EMAILS = ["reousamajp@gmail.com","reo.ishikawa@hotmail.com"]; // ← ここをご自身のGoogleメールアドレスに変更

// Stripeの初期化
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Supabaseの初期化 (管理者権限)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    console.log("🚨 現在Next.jsが使っている鍵の末尾:", process.env.STRIPE_SECRET_KEY?.slice(-4));
    
    // 1. フロントエンドからユーザー情報を受け取る
    const body = await req.json();
    const { userId, email } = body;

    // 戻り先のURLを自動判定
    const origin = req.headers.get('origin') || 'http://localhost:3000';

    if (!userId || !email) {
      return NextResponse.json({ error: 'User ID or Email is missing' }, { status: 400 });
    }

    // ★ 許可されたメールアドレス以外は決済セッション作成を拒否
    if (!ALLOWED_EMAILS.includes(email)) {
      return NextResponse.json(
        { error: '現在クローズドテスト中のため、事前登録されたアカウントのみ決済可能です。' },
        { status: 403 }
      );
    }

    // 2. 既存のStripe顧客IDがあるか確認
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single();
    
    let customerId = profile?.stripe_customer_id;

    // 3. なければ新規作成してSupabaseに保存
    if (!customerId) {
      console.log("Stripeに新しい顧客を作成中...");
      const customer = await stripe.customers.create({ 
        email, 
        metadata: { supabaseUUID: userId } // Stripe側でも検索できるように紐付け
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
      line_items: [{ price: "price_1U7Vs9AFaihlgeNml0P4fPva", quantity: 1 }], 
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`, 
      cancel_url: `${origin}/pricing`,
      allow_promotion_codes: true,
      
      metadata: { 
        userId: userId 
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}