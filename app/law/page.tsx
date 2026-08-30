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
    { label: "ウェブサイト", value: "https://arabi-lab.vercel.appブスクリプションプラ
�    },
    {
      labe      labe      labe      la決済手続き完了後、即時ご利�   label: "返品・返金・解約について",
      value: "デジタルコンテンツの性質上、決済完了後のお客様都合による返品・返金は "動作環境",
      value: "イ�な最新バー�gle Chrome, Safari, Microsoft Edge 等）",
    },
  ];

  return (
    <div class="min-h-screen bg-[#FDFBF7] text-[#2C2016] py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto pb-16">
        {/* トップへ
�        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1C3B2B] hover:text-[#2E5C43] bg-white border border-[#EADBCE] px-4 py-2 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            トップページへ戻る
          </Link>
        </div>

        {/* ヘッダーカード */}
        <div className="bg-[#1C3B2B] text-white rounded-rder-[#142C20]">
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
             </div>
              <div className="sm:w-2/3 text-xs sm:text-sm text-[#3D2D1E] whitespace-pre-line leading-relaxed break-words">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* コピーライト */}
        <d="mt-8 text-center text-xs text-[#8A7563]">
          &copy; {new Date().getFullYear()} Arabi Lab. All rights reserved.
        </div>
      </div>
    </div>
  );
}
