"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Landmark } from 'lucide-react';

export default function SpecifiedCommercialTransactions() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-[#4A3018]">
      {/* ヘッダーナビゲーション */}
      <nav className="bg-[#3E2713] shadow-md p-4 sticky top-0 z-20 border-b border-[#A67144]/40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#F5F0E6] p-1 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              <img 
                src="/logo.jpg" 
                alt="Logo" 
                className="h-8 w-auto object-contain rounded" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
            <h1 className="font-serif font-bold text-amber-50 text-xl tracking-wider">Arabi Lab</h1>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6 md:p-12">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#8A5A33] hover:text-[#5E3C1E] font-bold transition">
            <ArrowLeft size={16} /> ホームに戻る
          </Link>
        </div>

        {/* コンテンツ本体 */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#E5C9A8]">
          <div className="flex items-center gap-3 mb-8 border-b-2 border-amber-400 pb-3 inline-block">
            <Landmark className="text-[#8A5A33]" size={32} />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3018]">
              特定商取引法に基づく表記
            </h1>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E5C9A8]">
            <table className="w-full text-sm text-left text-gray-700">
              <tbody className="divide-y divide-[#F5F0E6]">
                
                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5] w-1/3 whitespace-nowrap">販売業者</th>
                  <td className="py-4 px-6">
                    アルオムラーニ ソマヤオムラニエー
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">運営統括責任者</th>
                  <td className="py-4 px-6">
                    アルオムラーニ ソマヤオムラニエー
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">所在地</th>
                  <td className="py-4 px-6">
                    〒143-0015<br />
                    東京都大田区大森西1-19-14 ジニア大森西506
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">電話番号</th>
                  <td className="py-4 px-6">
                    090-8129-9196<br />
                    <span className="text-xs text-gray-500">（受付時間：平日 10:00〜18:00）</span><br />
                    <span className="text-xs text-gray-400 mt-1 block">※お電話による個別サポート対応は行っておりません。お問い合わせは下記メールアドレスよりお願いいたします。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">メールアドレス</th>
                  <td className="py-4 px-6">
                    arabilab1220@gmail.com
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">ウェブサイトURL</th>
                  <td className="py-4 px-6">
                    https://arabi-lab.vercel.app/
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">販売価格</th>
                  <td className="py-4 px-6">
                    プレミアムプラン：月額 500円（税込）<br />
                    <span className="text-xs text-gray-500">※各プランの申し込みページに表示された金額（消費税込）となります。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">商品代金以外の<br className="hidden md:block"/>必要料金</th>
                  <td className="py-4 px-6">
                    インターネット接続料金、通信料金等はお客様のご負担となります。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">お支払方法</th>
                  <td className="py-4 px-6">
                    クレジットカード決済（Stripe）<br />
                    <span className="text-xs text-gray-500">※VISA, MasterCard, American Express, JCB 等がご利用いただけます。</span>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">代金の支払時期</th>
                  <td className="py-4 px-6">
                    初回申し込み時に即時決済され、以降は毎月の更新日に自動的に決済されます。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">サービスの提供時期</th>
                  <td className="py-4 px-6">
                    決済完了後、直ちにご利用いただけます。
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">返品・交換・<br className="hidden md:block"/>キャンセルについて</th>
                  <td className="py-4 px-6 space-y-2">
                    <p>
                      <span className="font-bold text-[#5E3C1E]">返品・返金について：</span><br />
                      デジタルコンテンツの性質上、決済完了後の返品・返金についてはお受けできません。
                    </p>
                    <p>
                      <span className="font-bold text-[#5E3C1E]">解約について：</span><br />
                      マイページの「サブスクリプション管理」よりいつでも解約手続きが可能です。次回更新日の前日までに手続きを完了してください。日割り計算による返金は行われませんが、契約期間満了日までサービスをご利用いただけます。
                    </p>
                  </td>
                </tr>

                <tr className="bg-white">
                  <th className="py-4 px-6 font-bold text-[#764C28] bg-[#FCFAF5]">推奨環境</th>
                  <td className="py-4 px-6">
                    【OS】<br />
                    iOS 15.0以降、Android 10.0以降、Windows 10以降、macOS 11.0以降<br />
                    【ブラウザ】<br />
                    Google Chrome, Safari, Edge, Firefox 各最新版
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-[#2C1A0D] text-[#D4A373] py-8 text-center text-xs">
        <p className="opacity-50">&copy; 2024 Arabi Lab. All Rights Reserved.</p>
      </footer>
    </div>
  );
}