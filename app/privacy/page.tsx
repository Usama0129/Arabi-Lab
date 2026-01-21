import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] font-sans text-gray-800">
      {/* ヘッダーナビゲーション */}
      <nav className="bg-emerald-950 shadow-md p-4 sticky top-0 z-20 border-b border-amber-500/30">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white p-1 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              {/* ロゴ画像がない場合のフォールバック表示 */}
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
            プライバシーポリシー
          </h1>

          <div className="space-y-8 leading-relaxed text-sm md:text-base text-gray-700">
            <p>
              <strong>Arabi Lab</strong>（以下、「当運営」といいます。）は、当運営が提供するアラビア語学習サービス「Arabi Lab」（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第1条（個人情報）</h2>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、および容貌、指紋、声紋にかかるデータ、および健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第2条（個人情報の収集方法）</h2>
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
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第3条（個人情報を収集・利用する目的）</h2>
              <p className="mb-2">当運営が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>本サービスの提供・運営のため（学習データの保存・同期など）</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当運営が提供する他のサービスの案内のメールを送付するため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>有料サービスにおいて、利用料金を請求するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第4条（利用目的の変更）</h2>
              <p>
                当運営は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当運営所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第5条（個人情報の第三者提供）</h2>
              <p className="mb-2">当運営は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>予め次の事項を告知あるいは公表し、かつ当運営が個人情報保護委員会に届出をしたとき</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第6条（外部委託）</h2>
              <p>
                当運営は、利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を外部（クラウドサーバー提供者、決済代行会社など）に委託する場合があります。この場合、当運営は、委託先としての適格性を審査するとともに、取扱いを委託された個人情報の安全管理が図られるよう、委託先に対する必要かつ適切な監督を行います。<br />
                <span className="text-xs text-gray-500 mt-1 block">主な委託先・利用ツール：Supabase (データベース/認証), Stripe (決済), Google Analytics (解析)</span>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第7条（Cookieおよびアクセス解析ツールについて）</h2>
              <p>
                本サービスでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第8条（個人情報の開示・訂正・利用停止等）</h2>
              <p>
                ユーザーは、当運営の保有する自己の個人情報が誤った情報である場合には、当運営が定める手続きにより、当運営に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。当運営は、ユーザーからの請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第9条（プライバシーポリシーの変更）</h2>
              <p>
                本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当運営が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第10条（お問い合わせ窓口）</h2>
              <p className="mb-4">本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-sm">
                <p>サービス名：Arabi Lab</p>
                <p>運営責任者：[あなたの氏名 または 屋号]</p>
                <p>Eメールアドレス：[連絡先メールアドレス]</p>
              </div>
            </section>
            
            <div className="text-right text-xs text-gray-400 mt-8">
              制定日：202X年X月X日
            </div>
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