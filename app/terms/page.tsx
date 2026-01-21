import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
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
            利用規約
          </h1>

          <div className="space-y-8 leading-relaxed text-sm md:text-base text-gray-700">
            <p>
              この利用規約（以下，「本規約」といいます。）は，Arabi Lab（以下，「当運営」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
            </p>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第1条（適用）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>本規約は，ユーザーと当運営との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当運営は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</li>
                <li>本規約の規定が前項の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第2条（利用登録）</h2>
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
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第3条（ユーザーIDおよびパスワードの管理）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。</li>
                <li>ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。</li>
                <li>当運営は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第4条（利用料金および支払方法）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>ユーザーは，本サービスの有料部分（プレミアムプラン等）を利用する場合，当運営が別途定め，本ウェブサイトに表示する利用料金を，当運営が指定する方法（クレジットカード決済等）により支払うものとします。</li>
                <li>サブスクリプション（定期購入）契約の場合，ユーザーが所定の期間内に解約手続きを行わない限り，契約は自動的に更新されるものとします。</li>
                <li>当運営は、ユーザーから支払われた利用料金について、法令に定めがある場合を除き、いかなる理由があっても返金を行わないものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第5条（禁止事項）</h2>
              <p className="mb-2">ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為</li>
                <li>当運営，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為（スクレイピング等の自動収集行為を含みます）</li>
                <li>本サービスによって得られた情報を商業的に利用する行為</li>
                <li>当運営のサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし，またはこれを試みる行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正な目的を持って本サービスを利用する行為</li>
                <li>本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当運営が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為</li>
                <li>その他，当運営が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第6条（本サービスの提供の停止等）</h2>
              <p>当運営は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
              <ul className="list-disc list-inside ml-2 mt-2 text-sm">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他，当運営が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第7条（利用制限および登録抹消）</h2>
              <p>
                当運営は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
              </p>
              <ul className="list-disc list-inside ml-2 mt-2 text-sm">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>料金等の支払債務の不履行があった場合</li>
                <li>その他，当運営が本サービスの利用を適当でないと判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第8条（退会・解約）</h2>
              <p>
                ユーザーは，当運営の定める退会手続（マイページからの解約操作等）を経ることにより，本サービスから退会できるものとします。有料プランの解約については、次回更新日の前日までに手続きを完了する必要があります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第9条（保証の否認および免責事項）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>当運営は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>当運営は，本サービスに起因してユーザーに生じたあらゆる損害について、当運営の故意又は重過失による場合を除き、一切の責任を負いません。</li>
                <li>当運営は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第10条（サービス内容の変更等）</h2>
              <p>
                当運営は，ユーザーへの事前の通知なくして本サービスの内容を変更し，または本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第11条（利用規約の変更）</h2>
              <p>
                当運営は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第12条（個人情報の取扱い）</h2>
              <p>
                当運営は，本サービスの利用によって取得する個人情報については，当運営「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-emerald-900 mb-3 border-l-4 border-emerald-500 pl-3">第13条（準拠法・裁判管轄）</h2>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には，当運営の所在地を管轄する裁判所（東京地方裁判所等）を専属的合意管轄とします。</li>
              </ol>
            </section>

            <div className="text-right text-xs text-gray-400 mt-8">
              202X年X月X日 制定
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