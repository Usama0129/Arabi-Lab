import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function LawPage() {
  const items = [
    { label: "販売業者", value: "アルオムラーニ ソマヤオムラニエー" },
    { label: "運営統括責任者", value: "アルオムラーニ ソマヤオムラニエー" },
    {
      label: "所在地",
      value: "〒143-0015\n東京都大田区大森西1-19-14 ジニア大森西506",
    },
    {
      label: "電話番号",
      value: "090-8129-9196\n（受付時間：平日 10:00〜18:00）\n※お電話による個別サポート対応は行っておりません。お問い合わせは下記メールアドレスよりお願いいたします。",
    },
    { label: "メールアドレス", value: "arabilab1220@gmail.com" },
    { label: "ウェブサイト", value: "https://arabilab.com" },
    { label: "販売価格", value: "各プラン購入ページに表示された金額（税込）" },
    {
      label: "商品代金以外の必要料金",
      value: "インターネット接続料金および通信料金はお客様のご負担となります。",
    },
    {
      label: "お支払い方法",
      value: "クレジットカード決済（Stripe）",
    },
    {
      label: "代金の支払時期",
      value: "初回お申し込み時に即時決済され、サブスクリプションプランは各更新日に自動更新・決済されます。",
    },
    {
      label: "役務の提供時期",
      value: "決済手続き完了後、即時ご利用いただけます。",
    },
    {
      label: "返品・返金・解約について",
      value: "デジタルコンテンツの性質上、決済完了後のお客様都合による返品・返金はお受けできません。\n解約はマイページよりいつでも手続き可能です。解約後も現在の請求期間終了日までサービスをご利用いただけます。",
    },
    {
      label: "動作環境",
      value: "インターネットに接続可能な最新バージョンのブラウザ（Google Chrome, Safari, Microsoft Edge 等）",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2016] py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto pb-16">
        {/* トップへ戻るボタン */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1C3B2B] hover:text-[#2E5C43] bg-white border border-[#EADBCE] px-4 py-2 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページへ戻る
          </Link>
        </div>

        {/* ヘッダーカード */}
        <div className="bg-[#1C3B2B] text-white rounded-2xl p-6 mb-6 shadow-md border border-[#142C20]">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="w-7 h-7 text-amber-400" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
              特定商取引法に基づく表記
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            「特定商取引に関する法律」第11条に基づき、以下の通り表示いたします。
          </p>
        </div>

        {/* リスト（スマホは縦並び、PCは表形式） */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#EADBCE] divide-y divide-[#F0E6DD] overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row p-4 sm:p-5 hover:bg-[#FAF7F2] transition-colors gap-1 sm:gap-6"
            >
              <div className="sm:w-1/3 text-xs sm:text-sm font-bold text-[#6E4F32] shrink-0">
                {item.label}
              </div>
              <div className="sm:w-2/3 text-xs sm:text-sm text-[#3D2D1E] whitespace-pre-line leading-relaxed break-words">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* コピーライト */}
        <div className="mt-8 text-center text-xs text-[#8A7563]">
          &copy; {new Date().getFullYear()} Arabi Lab. All rights reserved.
        </div>
      </div>
    </div>
  );
}