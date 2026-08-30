import React from 'react';
import Link from 'next/link';

export default function FAQ() {
  const faqs = [
    {
      q: "無料プランとプレミアムプランの違いは何ですか？",
      a: "無料プランでは各コンテンツの一部のみ利用可能です。プレミアムプラン（月額500円）にご登録いただくと、全機能が無制限でご利用いただけます。"
    },
    {
      q: "支払い方法は何がありますか？",
      a: "クレジットカード決済（VISA, MasterCard, Amex, JCB等）に対応しています。決済システムには世界的に信頼性の高いStripeを使用しており、当サービスがカード情報を保存することはありません。"
    },
    {
      q: "解約はいつでもできますか？",
      a: "はい、マイページからいつでも解約手続きが可能です。解約後も、次回の更新日までは有料機能をご利用いただけます。日割りでの返金は行っておりませんのでご了承ください。"
    },
    {
      q: "まったくの初心者でも大丈夫ですか？",
      a: "はい。”文法”セクションでは文字の書き方や発音から学べます。また細かい文法よりも会話に興味ある方は会話表現を中心にした”会話”や”１フレーズ”セクションからすぐに使えるアラビア語を学んでいただけます。まずは無料プランで、基本的な読み書きを試してみてください。"
    },
    {
      q: "スマートフォンで使えますか？",
      a: "はい。Arabi LabはWebアプリ（PWA対応予定）ですので、iPhone、Android、PC、タブレットなど、ブラウザが動くすべての端末でご利用いただけます。"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800">
      <nav className="bg-emerald-950 shadow-md p-4 sticky top-0 z-20 border-b border-amber-500/30">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
             <div className="bg-white p-1 rounded-lg shadow-sm border border-amber-400/30">
               <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-lg font-bold">🇸🇦</div>
             </div>
             <h1 className="font-serif font-bold text-amber-50 text-xl tracking-wider">Arabi Lab</h1>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <div className="mb-8"><Link href="/" className="text-sm text-gray-400 hover:text-emerald-700 font-bold">← ホームに戻る</Link></div>
        
        <h1 className="text-3xl font-serif font-bold text-emerald-950 mb-8 text-center">よくある質問</h1>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-emerald-900 mb-3 flex gap-3">
                <span className="text-amber-500 text-xl">Q.</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-8 border-l-2 border-stone-100">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-stone-50 p-8 rounded-2xl border border-stone-200">
          <p className="font-bold text-gray-700 mb-2">解決しませんでしたか？</p>
          <p className="text-sm text-gray-500 mb-6">その他ご不明な点は、サポート窓口までお気軽にお問い合わせください。</p>
          <a href="mailto:support@arabilab.com" className="bg-emerald-800 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-900 transition inline-flex items-center gap-2">
            ✉️ メールで問い合わせる
          </a>
        </div>
      </main>

      <footer className="bg-stone-100 py-6 text-center text-xs text-gray-500"><p>&copy; 2024 Arabi Lab.</p></footer>
    </div>
  );
}