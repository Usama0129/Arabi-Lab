"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <ShieldCheck className="text-[#8A5A33]" size={32} />
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3018]">
              プライバシーポリシー
            </h1>
          </div>

          <div className="space-y-8 leading-relaxed text-sm md:text-base text-gray-700">
            <p>
              <strong>Arabi Lab</strong>（以下、「当運営」といいます。）は、当運営が提供するアラビア語学習サービス「Arabi Lab」（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第1条（個人情報）</h2>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、および健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第2条（個人情報の収集方法）</h2>
              <p className="mb-2">当運営は、ユーザーが本サービスを利用する際に、以下の情報を収集することがあります。</p>
              <ol className="list-decimal list-inside space-y-2 ml-2">
                <li>
                  <span className="font-bold">ユーザーから提供される情報</span><br />
                  <span className="text-gray-500 text-xs pl-5 block">氏名、ニックネーム、メールアドレス、プロフィール画像（Googleアカウント連携時など）、その他ユーザーが本サービスを通じて任意に入力した情報</span>
                </li>
                <li>
                  <span className="font-bold">本サービスの利用に関連して取得される情報</span><br />
                  <span className="text-gray-500 text-xs pl-5 block">学習の進捗状況、テストの正答率、学習履歴、Cookie（クッキー）および匿名ID、アクセスログ（IPアドレス、ブラウザの種類、利用日時など）、端末情報</span>
                </li>
                <li>
                  <span className="font-bold">決済に関する情報</span><br />
                  <span className="text-gray-500 text-xs pl-5 block">有料プラン（プレミアムプラン）をご利用の場合、クレジットカード情報等の決済情報は、決済代行会社（Stripe等）が直接取得・管理します。当運営は、ユーザーのクレジットカード番号を保持しません。</span>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第3条（個人情報を収集・利用する目的）</h2>
              <p className="mb-2">当運営が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>本サービスの提供・運営のため（学習データの保存・同期など）</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、メンテナンス等に関する重要なお知らせのため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの利用を制限するため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、ご利用状況の確認を行っていただくため</li>
                <li>有料サービスにおいて、利用料金の決済およびサブスクリプション状況を管理するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第4条（利用目的の変更）</h2>
              <p>
                当運営は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当運営所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第5条（個人情報の第三者提供）</h2>
              <p className="mb-2">当運営は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第6条（外部委託および利用外部ツール）</h2>
              <p>
                当運営は、サービスの安定した提供および機能実現のため、以下の信頼できる外部サービスを利用・委託しています。<br />
                <span className="text-xs text-gray-500 mt-2 block bg-[#FCFAF5] p-3 rounded-xl border border-[#E5C9A8]">
                  ・Supabase（認証基盤およびデータベース管理）<br />
                  ・Stripe（クレジットカード決済処理）<br />
                  ・OpenAI（音声読み上げデータの生成）<br />
                  ・Vercel（ウェブサイト配信ホスティング）
                </span>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第7条（Cookieについて）</h2>
              <p>
                本サービスでは、ログイン状態の維持およびサービス利便性の向上のためにCookie（クッキー）を使用しています。ユーザーはブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、本サービスの一部機能が正常に利用できない場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第8条（個人情報の開示・訂正・利用停止等）</h2>
              <p>
                ユーザーは、当運営の保有する自己の個人情報について、開示・訂正・追加・削除・利用停止を請求することができます。当運営は、ユーザーご本人からの請求であることを確認の上、遅滞なく対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第9条（プライバシーポリシーの変更）</h2>
              <p>
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#5E3C1E] mb-3 border-l-4 border-amber-500 pl-3">第10条（お問い合わせ窓口）</h2>
              <p className="mb-4">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <div className="bg-[#FCFAF5] p-4 rounded-xl border border-[#E5C9A8] text-sm space-y-1">
                <p><span className="font-bold text-[#764C28]">サービス名：</span> Arabi Lab</p>
                <p><span className="font-bold text-[#764C28]">運営責任者：</span> アルオムラーニ ソマヤオムラニエー</p>
                <p><span className="font-bold text-[#764C28]">Eメールアドレス：</span> arabilab1220@gmail.com</p>
              </div>
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