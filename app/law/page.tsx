import React from 'react';
import Link from 'next/link';

export default function SpecifiedCommercialTransactions() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800">
      {/* ヘッダーナビゲーション */}
      <nav className="bg-emerald-950 shadow-md p-4 sticky top-0 z-20 border-b border-amber-500/30">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center text-white text-lg font-bold">🇸🇦</div>
            </div>
            <h1 className="font-serif font-bold text-amber-50 text-xl tracking-wider">Arabi Lab</h1>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6 md:p-12">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-700 font-bold transition">
            <span>←</span> ホームに戻る
          </Link>
        </div>

        {/* コンテンツ本体 */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200">
          <h1 className="text-3xl font-serif font-bold text-emerald-950 mb-8 border-b-4 border-amber-400 pb-2 inline-block">
            特定商取引法に基づく表記
          </h1>

          <div className="overflow-hidden rounded-lg border border-stone-200">
            <table className="w-full text-sm text-left text-gray-700">
              <tbody className="divide-y divide-stone-200">
                
                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50 w-1/3 whitespace-nowrap">販売業者</th>
                  <td className="py-4 px-6">
                    [あなたの氏名 または 法人名]<br />
                    <span className="text-xs text-gray-400">※個人事業主の場合は、戸籍上の氏名を記載します。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">運営統括責任者</th>
                  <td className="py-4 px-6">
                    [運営責任者の氏名]
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">所在地</th>
                  <td className="py-4 px-6">
                    〒[000-0000]<br />
                    [都道府県市区町村 〇〇丁目〇番〇号]<br />
                    <span className="text-xs text-gray-400 mt-1 block">※原則として省略はできません。バーチャルオフィス等を利用している場合はその住所を記載します。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">電話番号</th>
                  <td className="py-4 px-6">
                    [090-0000-0000]<br />
                    <span className="text-xs text-gray-500">（受付時間：平日 10:00〜18:00）</span><br />
                    <span className="text-xs text-gray-400 mt-1 block">※電話でのお問い合わせは受け付けておりません。お問い合わせは下記メールアドレス、またはお問い合わせフォームよりお願いいたします。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">メールアドレス</th>
                  <td className="py-4 px-6">
                    [support@arabilab.com]
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">ウェブサイトURL</th>
                  <td className="py-4 px-6">
                    [https://www.arabilab.com]
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">販売価格</th>
                  <td className="py-4 px-6">
                    各プランの申し込みページに表示された金額（表示価格/消費税込）とします。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">商品代金以外の<br className="hidden md:block"/>必要料金</th>
                  <td className="py-4 px-6">
                    インターネット接続料金、通信料金等はお客様の負担となります。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">お支払方法</th>
                  <td className="py-4 px-6">
                    クレジットカード決済（Stripe）<br />
                    <span className="text-xs text-gray-500">※VISA, MasterCard, American Express, JCB 等がご利用いただけます。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">代金の支払時期</th>
                  <td className="py-4 px-6">
                    初回申し込み時に決済され、以降は毎月（または毎年）の更新日に自動的に決済されます。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">引渡し時期</th>
                  <td className="py-4 px-6">
                    決済完了後、直ちにご利用いただけます。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">返品・交換・<br className="hidden md:block"/>キャンセルについて</th>
                  <td className="py-4 px-6">
                    <p className="mb-2">
                      <span className="font-bold">返品・返金について：</span><br />
                      デジタルコンテンツの性質上、決済完了後の返品・返金についてはお受けできません。あらかじめ対象コンテンツ、推奨環境等をよくお確かめの上、お申込みください。
                    </p>
                    <p>
                      <span className="font-bold">解約について：</span><br />
                      マイページよりいつでも解約手続きが可能です。次回更新日の前日までに手続きを完了してください。日割り計算による返金は行われませんが、契約期間満了日までサービスをご利用いただけます。
                    </p>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-emerald-900 bg-stone-50">推奨環境</th>
                  <td className="py-4 px-6">
                    【OS】<br />
                    iOS 15.0以降、Android 10.0以降、Windows 10以降、macOS 11.0以降<br />
                    【ブラウザ】<br />
                    Google Chrome, Safari, Edge, Firefox の各最新版
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-stone-100 py-6 text-center text-xs text-gray-500">
        <p>&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
}