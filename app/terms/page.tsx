"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
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
            <FileText className="text-[#8A5A33]" size={32} />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3018]">
              利用規約
            </h1>
          </div>

          <div className="space-y-8 leading-relaxed text-sm md:text-base text-gray-700">
            <p>
              この利用規約（以下，「本規約」といいます。）は，Arabi Lab（以下，「当運営」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </p>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第1条（適用）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>本規約は，ユーザーと当運営との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当運営は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                <li>本規約の規定が前項の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第2条（利用登録）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>本サービスにおいては，登録希望者が本規約に同意の上，当運営の定める方法によって利用登録を申請し，当運営がこれを承認することによって，利用登録が完了するものとします。</li>
                <li>当運営は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                  <ul className="list-disc list-inside ml-6 mt-1 text-xs text-gray-500 space-y-1">
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他，当運営が利用登録を相当でないと判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第3条（ユーザーIDおよびアカウントの管理）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>ユーザーは，自己の責任において，本サービスのアカウント情報を適切に管理するものとします。</li>
                <li>ユーザーは，いかなる場合にも，アカウントを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。</li>
                <li>当運営は，登録情報と一致してログインされた場合には，そのアカウントを登録しているユーザー自身による利用とみなします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第4条（利用料金および支払方法）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>ユーザーは，本サービスの有料部分（プレミアムプラン等）を利用する場合，当運営が別途定め，本ウェブサイトに表示する利用料金（月額500円税込）を，当運営が指定する方法（Stripeによるクレジットカード決済等）により支払うものとします。</li>
                <li>サブスクリプション（定期購入）契約の場合，ユーザーが所定の期間内に解約手続きを行わない限り，契約は自動的に毎月更新されるものとします。</li>
                <li>当運営は、ユーザーから支払われた利用料金について、法令に定めがある場合を除き、いかなる理由があっても返金を行わないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第5条（禁止事項）</h2>
              <p className="mb-2">ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスに含まれるテキスト、音声、画像等の著作権ほか知的財産権を侵害する行為（無断転載・複製・再配布）</li>
                <li>当運営，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為（スクレイピング等の自動収集行為を含みます）</li>
                <li>本サービスによって得られた情報を商業的に利用する行為</li>
                <li>当運営のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし，またはこれを試みる行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>その他，当運営が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第6条（本サービスの提供の停止等）</h2>
              <p>当運営は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
              <ul className="list-disc list-inside ml-2 mt-2 text-sm">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他，当運営が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第7条（利用制限および登録抹消）</h2>
              <p>
                当運営は，ユーザーが本規約のいずれかの条項に違反した場合や支払債務の不履行があった場合、事前の通知なく利用を制限し、または登録を抹消することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第8条（解約・サブスクリプションの停止）</h2>
              <p>
                ユーザーは，マイページの「サブスクリプション管理」よりいつでも解約手続きを行うことができます。次回更新日の前日までに手続きを完了した場合、次回以降の請求は発生しません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第9条（免責事項）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>当運営は，本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当運営は，本サービスに起因してユーザーに生じた損害について、当運営の故意又は重過失による場合を除き、一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第10条（規約の変更）</h2>
              <p>
                当運営は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は，本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第11条（準拠法・裁判管轄）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には，当運営の所在地を管轄する裁判所（東京地方裁判所）を専属的合意管轄とします。</li>
              </ol>
            </section>

            <div className="text-right text-xs text-gray-400 mt-8">
              制定日：2026年8月30日
            </div>
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