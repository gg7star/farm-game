import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import Article from './Article';

const kiyakuContents = [
  {
    title: '第１条 （はじめに）',
    content:
      '１．「当サイト」　当社が運営する「畑っぴ」と称するウェブサイト（http://hatakeppi.com/）をいいます。\n２．「本サービス」　当サイト上で提供するサービスのことをいいます。\n３．「本コンテンツ」　当サイトで配信している各種のデータ、文章、ソフトウェア、映像、音声、写真、画像等のことをいいます。\n４．「利用者」　当サイトへアクセスし、閲覧、視聴、その他サービスの利用を受ける者をいいます。\n５．「会員」　本利用規約に同意し、会員登録審査が承諾された者をいいます。\n６．「利用規約等」　当社が本サービスの利用に関して規定する、本利用規約、本利用規約の他に別途定める利用規約および諸規定をいいます。\n７．「個人情報」　利用者に関する情報であって、当該情報に含まれる氏名、メールアドレス、その他の記述等により特定の利用者を識別することができるものをいいます。',
  },
  {
    title: '第２条　（定義）',
    content:
      '当社が提供するWeb上のサービスを通じて取得した個人情報は、次の目的の為に利用させていただきます。\n・当社ｻｲﾄの利便性を向上させるサービスおよびｼｽﾃﾑの運営\n・当社の新商品・サービス・キャンペーン・お客様プレゼントなどのご紹介\n・メンテナンス、重要なお知らせなどのご案内\n・お客様にとって有用と思われる当社提携先の商品・サービスをご紹介するためのﾒｰﾙﾏｶﾞｼﾞﾝ\n・当社のサービスおよび提携会社をご利用・ご契約いただいた際の商品・サービスの提供および発送に関わる業務\n・当社の商品・サービスのためのマーケティング活動',
  },
  {
    title: '第３条　（本利用規約の変更）',
    content:
      '１．当社は、本利用規約をいつでも任意の理由で変更することができるものとします。\n２．変更後の利用規約は、当サイト上に表示した時点より効力が生じるものとします。ただし、当社は、効力が生じる時期を明記することにより、当サイト上に表示した時点より遅い時期から効力を生じることとすることができます。\n３．利用者が、本利用規約の変更の効力が生じた後、本サービスをご利用になる場合は、変更後の利用規約に同意したものとみなし、料金およびその他当サイトに関する一切の事項は変更後の本利用規約を適用するものとします。',
  },
  {
    title: '第４条　（当サイトの利用）',
    content:
      '１．利用者は、本コンテンツについて、自己の責任において、視聴および閲覧するものとします。\n２．利用者は、本利用規約に同意し、本サービスを利用するものとします。\n３．本コンテンツは、お一人様１つのＩＤでの利用に限りＩＤの他者との共有や複数のＩＤでの利用を禁止します。\n４．当サイトから外部へのリンク先の利用に関しては、当社は、リンク先の内容、セキュリティー、その他リンク先に関する一切の事項を保障するものではありません。利用者自らの責任において行うものとします。',
  },
  {
    title: '第５条　（ポイントサービス）',
    content:
      '１．本サービスは、無料サービスです。また、任意で有料の本コンテンツを利用するためのポイントを利用できます。\n２．初回登録時に２００ポイントが付与されます。ポイントは、ゲーム内の各種アイテムの購入に利用でき、サイト内にて任意でポイントを購入することが可能です。\n３．利用者は、ポイントを第三者に利用、貸与、譲渡、売買、質入等をすることはできないものとします。\n４．本サービスのご利用には、別途利用者がご利用の通信事業者所定の通信料がかかります。\n５．ポイントの有効期限は、購入月より数えて5ヶ月目の月の末日（例：1月中に購入の場合、6月末日）までとします。有効期間を経過した場合、未使用分のポイントは消滅するものとします。\n６．前項に関わらず、利用者が会員登録解除等によりポイントサービスの利用資格を喪失した場合は、未使用分のポイントも消滅するものとします。\n７．利用者が購入する本サービスのポイントについては、WebMoney及びクレジットカード・端末の通信キャリア決済を利用していただきます。\n８．本サービス終了日の告知があった場合、サービス終了告知日時以降に購入したポイントの有効期限はサービス終了日までとする。',
  },
  {
    title: '第６条　（消費税）',
    content: 'インターネットでの表示価格とは別に消費税が必要になります。',
  },
  {
    title: '第７条　（サービス内容の変更）',
    content:
      '１．当社は、利用者への事前通知なく、本サービスの内容、名称または仕様を変更することがあります。\n２．当社は、前項の変更に起因して利用者が被った損害について、一切の責任を負わないものとします。',
  },
  {
    title: '第８条　（サービス利用上の制約）',
    content:
      '１．利用者は、本サービスの申込み経路・決済手段によっては、特定のサービスを利用できない等の制約を受ける場合があることに同意します。\n２．利用者は、利用する端末の種類や年代・仕様に起因して全てのサービスが受けられない場合があることに同意します。',
  },
  {
    title: '第９条　（サービスの提供、拒否）',
    content:
      '（イ）当該利用者が登録した情報に虚偽の記載または記入漏れがある場合\nロ）利用状況、当社に寄せられた苦情その他の事情から、当該利用者の個人認証情報が、第三者に無断で利用されたと当社が判断した場合\n（ハ）電子メール等による連絡がとれない場合\nホ）第三者の知的財産権を侵害する場合\n（ヘ）第三者の財産、信用、名誉、プライバシーを侵害する場合\n（ト）犯罪的行為を助長または犯罪的行為を暗示する場合\n（チ）公序良俗に反する場合\n（ヌ）本サービスの運営を妨げまたは当社の信用を毀損する場合\n（リ）法令に反する場合\n（ル）本サービスに関連してコンピュータウィルス等有害なプログラムを使用もしくは提供する場合、またはそれらの恐れがある場合\n（ヲ）ゲーム内で収穫した作物は、ユーザ様による送付手続きが必要であり収穫後１ヶ月以内或いは、弊社が定める作物出荷終了日を過ぎた場合はゲーム内で利用できるポイントに交換となり商品及び代替作物等はお送りしません。\n（ア）その他当社が不適当と判断した場合\n１．当社は、前項に定めた対応結果について、法令に基づいて公的機関が開示請求する場合を除き、何人にも詳細な開示を行う義務を負わないものとします。\n２．当社は、第１項に従って本サービスの提供を拒否した場合、当該利用者の利用資格を取り消すことができるものとします。\n３．当社は、第１項に従って本サービスの提供を拒否し、または前項に従って利用資格を取り消したことに起因して発生した損害について、一切の責任を負わないものとします。',
  },
  {
    title: '第１０条　（メール配信の同意）',
    content:
      '１．当社は、利用者に対し、新サービスの告知、広告配信、サービス運営上の事務連絡、その他情報の提供を送信できるものとし、利用者はこれを予め承諾するものとします。ただし、利用者が情報の提供を希望しない旨を、事前又は事後に弊社所定の方法で通知した場合は、本サービスの提供に必要な場合を除いて、情報の提供を行わないものとします。\n２．当サイトに関連する情報などを登録アドレス宛にお知らせします。尚、当社以外のダイレクトメールは配信されません。\n３．メール配信のご利用にあたり、利用者に対して、通信料、プロバイダ使用料等を除き、利用料などはかかりません。\n４．メール配信の停止を手続きされた利用者であっても、当サイトで当社所定の手続きをすることにより、再び配信されるように変更することができます。　',
  },
  {
    title: '第１１条　（会員登録・解除）',
    content:
      '１．利用者は、本サービスへ申込みにあたり、当社に申し出た登録事項に変更が生じた場合は、すみやかに当社に申し出るものとします。\n２．利用者が登録事項の変更の申し出を怠りまたは誤った申し出をしたことで不利益を被ったとしても、当社は一切の責任を負わないものとします。\n３．利用者が登録事項の変更の申し出を怠りまたは誤った申し出をしたことにより、当社から通知が不到達となっても、通常到達すべきと当社が判断する時点に、当社からの通知は到達したものとみなします。',
  },
  {
    title: '第１２条　（登録事項の変更）',
    content:
      '１．利用者は、本コンテンツについて、自己の責任において、視聴および閲覧するものとします。\n２．利用者は、本利用規約に同意し、本サービスを利用するものとします。\n３．本コンテンツは、お一人様１つのＩＤでの利用に限りＩＤの他者との共有や複数のＩＤでの利用を禁止します。\n４．当サイトから外部へのリンク先の利用に関しては、当社は、リンク先の内容、セキュリティー、その他リンク先に関する一切の事項を保障するものではありません。利用者自らの責任において行うものとします。',
  },
  {
    title: '第１３条　（個人認証情報の管理）',
    content:
      '１．利用者は、自己のＩＤもしくはパスワード、または登録に使用した通信機器の固体情報を忘れた場合は、ただちに当社に申し出るものとし、当社の指示に従うものとします。\n２．利用者は、自己の個人認証情報および個人認証を条件とした本サービスを利用する権利を、他社と共有せず、また、前記権利を他者に利用させないものとします。\n３．利用者は、自己のＩＤおよびパスワードの管理・使用について一切の責任を負うものとします。ＩＤまたはパスワードを他者が使用したことにより当該利用者が損害を被った場合にも、その帰責事由の有無にかかわらず、当社は責任を負いません。',
  },
  {
    title: '第１４条　（禁止行為）',
    content:
      '１．当サイトの情報を改ざんもしくは消去する行為、または事実に反する情報を送信および提示する行為\n２．当サイトの情報を当社に無断で転載・複製・修正・蓄積または転送する行為\n３．第三者または当社の著作権、商標権等の知的財産権を侵害する行為または侵害する恐れのある行為\n４．第三者または当社を差別し、誹謗中傷し、または名誉、信用を傷つける行為\n５．第三者または当社の財産、プライバシー、肖像権およびパブリシティ権を侵害する行為、または侵害する恐れのある行為\n６．第三者または当社に対して、無断で広告・宣伝・勧誘などの電子メールを送信し、受信者が嫌悪感を抱く電子メールを送信し、他社のメール受信を侵害し、または連鎖的なメール転送を依頼する行為\n７．詐欺、マルチ商法、ネットワークビジネス等犯罪に結びつく行為\n８．選挙運動、または公職選挙法に抵触する行為\n９．コンピュータウィルス等有害なプログラムを使用し、または提供する行為\n１０．他の利用者またはその他の第三者になりすまして、当サイトを利用する行為\n１１．当サイトに接続している他のコンピュータ・システム又はネットワークへの不正アクセスを試みる行為\n１２．公序良俗に反する行為\n１３．法令に反する行為\n１４．当サイトの運営を妨げ、または当社の信用を毀損する行為　',
  },
  {
    title: '第１５条　（メンテナンス）',
    content:
      '１．当サイト用設備の保守または工事のため、やむを得ない場合\n２．当サイト用設備に障害が発生し、やむを得ない場合\n３．第一種電気通信事業者又はその他の電気通信事業者の提供する電気通信役務に起因して電気通信サービスの利用が不能になった場合\n４．その他、運用上または技術上当社が一時中断を必要と判断した場合',
  },
  {
    title: '第１６条　（解約）',
    content:
      '１．利用者が以下各号の事由に該当するに至ったときは、当社は何らの予告なく当社が保有する当該利用者の登録情報を取り消すことができるものとします。\n（１）本サービス利用料を支払わないとき\n（２）本利用規約の条項に違反したとき\n２．前項よる解約が当社からなされた場合、本利用規約に基づいて発生した当該利用者の権利は全て消滅するものとします。\n３．当社は、第１項の登録情報取消または契約解除に起因して、当該利用者または第三者に生じた損害等について、一切の責任を負わないものとします。\n４．利用者が本サービスを解約される場合には、携帯電話端末を通じて手続きを行ってください。\n５．利用者が本サービスに対応していない端末及び携帯電話機に機種変更された後に本サービスを解除される場合は、機種変更後の当該端末及び携帯電話機を通じて解除の手続きを行っていただきます。',
  },
  {
    title: '第１７条　（権利義務の譲渡）',
    content:
      '１．利用者は、本利用規約に基づいて発生した権利または義務を、第三者に譲渡しまたは担保に供してはならないものとします。\n２．当社は、本サービスの営業を第三者に譲渡する場合は、事前に利用者に告知することなく、本利用規約の契約上の地位または本利用規約に基づいて発生する権利もしくは義務について、第三者に対する譲渡、担保設定その他の処分を行うことができます。',
  },
  {
    title: '第１８条　（個人情報保護）',
    content:
      '１．当社は、当社が別途定めるプライバシーポリシー（以下、「当社プライバシーポリシー」といいます。）に従い、本利用規約で規定するサービスの提供およびそれに付随する行為に利用する範囲内で、利用者の個人情報（以下、「利用者情報」といいます。）を取り扱います。\n２．当社は、以下に定める場合には、第三者が当社プライバシーポリシーに従うことを条件として、利用者情報を当該第三者に開示または提供することができるものとします。\n（イ）当社から本サービスの提供および適正な運用、その他当社のサービスの提供に係ること\n（ロ）電子メール媒体による、当社のサービスに関する販売推奨・アンケート調査、または景品等の送付を行うこと\n（ハ）当社のサービスの改善または新たなサービスの開発を行うこと\n（ニ）利用者からのお問い合わせ、ご相談にお答えすること',
  },
  {
    title: '第１９条　（損害）',
    content:
      '１．利用者は、当サイトを利用するにあたり、利用者の行為に起因して第三者に損害を与えた場合には、自らの責任と費用をもってかかる損害を賠償するものとします。\n２．本サービスのご利用にあたり当社の責に帰する事由により利用者が損害を被った場合は、当社は、本サービス利用料に相当する金額を上限として、当該損害の賠償をするものとします。ただし、当社の故意または重大な過失に基づく損害については、この限りではありません。　',
  },
  {
    title: '第２０条　（知的財産権）',
    content:
      '当サイトの利用者が、当サイトを閲覧、利用することで取得されたあらゆる情報（文章、画像、写真、音声、映像、プログラム等を含む）は、著作権、商標権、または特許権等の知的財産権、および法令、法律により当社または著作権を有する第三者に帰属します。従って、当サイトの利用者はこれらの情報の転載・複製・修正・蓄積、または転送等、知的財産権を侵害する行為、または侵害する恐れのある行為を行わないものとします。\n４．当サイトから外部へのリンク先の利用に関しては、当社は、リンク先の内容、セキュリティー、その他リンク先に関する一切の事項を保障するものではありません。利用者自らの責任において行うものとします。',
  },
  {
    title: '第２１条（免責事項）',
    content:
      '当社は、当サイトの利用に関して、当サイトにアクセスする者が被った損害または損失などについては、一切責任を負わず、損害賠償義務を負わないものとします。当サイトの利用者はこの事に同意するものとします。',
  },
  {
    title: '第２２条　（準拠法・裁判管轄）',
    content:
      '本利用規約は日本法に従って解釈されるものとし、本サービスまたは本利用規約に関して利用者との間で疑義または争いが生じた場合には、誠意をもって協議することとしますが、それでもなお解決しない場合には「東京地方裁判所」または「東京簡易裁判所」を専属の管轄裁判所とします。\n６．第三者または当社に対して、無断で広告・宣伝・勧誘などの電子メールを送信し、受信者が嫌悪感を抱く電子メールを送信し、他社のメール受信を侵害し、または連鎖的なメール転送を依頼する行為\n７．詐欺、マルチ商法、ネットワークビジネス等犯罪に結びつく行為\n８．選挙運動、または公職選挙法に抵触する行為\n９．コンピュータウィルス等有害なプログラムを使用し、または提供する行為\n１０．他の利用者またはその他の第三者になりすまして、当サイトを利用する行為\n１１．当サイトに接続している他のコンピュータ・システム又はネットワークへの不正アクセスを試みる行為\n１２．公序良俗に反する行為\n１３．法令に反する行為\n１４．当サイトの運営を妨げ、または当社の信用を毀損する行為',
  },
  {
    title: '第２３条　（お問合せ）',
    content:
      '本サービスの内容および情報料に関する苦情・お問合せについては、別途お知らせする当社のお問合せ窓口までご連絡ください。\nメール：info@ld-inc.jp\n営業時間：平日10時～19時\n※お問合せはメールにてお願いいたします。\n尚、お問い合わせに対する返信はld-inc.jpより行いますので、迷惑メールの設定やパソコンからの受信を拒否されている 場合は受け取れないことがあります。 必ずドメイン解除をしてld-inc.jpからのメールを受信できるように設定してください。 ドメイン解除して頂かないと、送信してもエラーになってしまい連絡が出来ませんのでご了承ください。',
  },
  {
    title: '第２４条　（附則）',
    content: '平成26年4月1日 制定・施行\n平成28年4月20日 改定',
  },
];

const Kiyaku = () => {
  const [pageNum, setPageNum] = useState(0);
  const goNext = () => {
    let nextPageNum = pageNum + 1;
    setPageNum(nextPageNum);
  };
  const goPrev = () => {
    let nextPageNum = pageNum - 1;
    setPageNum(nextPageNum);
  };
  return (
    <ImageBackground
      style={KiyakuStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/wall_2.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="利用規約" />

        {pageNum === 0 && (
          <LinearGradient
            colors={['#390', '#390']}
            style={KiyakuStyles.topTitle}>
            <Text style={KiyakuStyles.subTitleText}>サービス全般</Text>
          </LinearGradient>
        )}

        {pageNum === 0 &&
          kiyakuContents.map(
            (item, i) => i < 3 && <Article key={i} item={item} />,
          )}

        {pageNum === 0 && (
          <LinearGradient
            colors={['#390', '#390']}
            style={KiyakuStyles.topTitle}>
            <Text style={KiyakuStyles.subTitleText}>サービスの利用</Text>
          </LinearGradient>
        )}

        {pageNum === 0 &&
          kiyakuContents.map(
            (item, i) => i >= 3 && i < 8 && <Article key={i} item={item} />,
          )}

        {pageNum === 0 && (
          <TouchableOpacity onPress={goNext}>
            <LinearGradient
              colors={['#ffffff', '#f1f1f1']}
              style={KiyakuStyles.nextBg}>
              <Text style={KiyakuStyles.nextText}>次へ</Text>
              <View style={KiyakuStyles.iconBg}>
                <Image
                  style={KiyakuStyles.iconNextImg}
                  source={require('../../assets/images/icons-36-white.png')}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}

        {pageNum === 1 &&
          kiyakuContents.map(
            (item, i) => i >= 8 && i < 16 && <Article key={i} item={item} />,
          )}

        {pageNum === 1 && (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={goPrev} style={{width: '50%'}}>
              <LinearGradient
                colors={['#ffffff', '#f1f1f1']}
                style={KiyakuStyles.prev2Bg}>
                <View style={KiyakuStyles.iconBg}>
                  <Image
                    style={KiyakuStyles.iconPrevImg}
                    source={require('../../assets/images/icons-36-white.png')}
                  />
                </View>
                <Text style={KiyakuStyles.nextText}>前へ</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={goNext} style={{width: '50%'}}>
              <LinearGradient
                colors={['#ffffff', '#f1f1f1']}
                style={KiyakuStyles.next2Bg}>
                <Text style={KiyakuStyles.nextText}>次へ</Text>
                <View style={[KiyakuStyles.iconBg, KiyakuStyles.iconNextBg]}>
                  <Image
                    style={KiyakuStyles.iconNextImg}
                    source={require('../../assets/images/icons-36-white.png')}
                  />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}

        {pageNum === 2 && (
          <LinearGradient
            colors={['#390', '#390']}
            style={KiyakuStyles.topTitle}>
            <Text style={KiyakuStyles.subTitleText}>その他</Text>
          </LinearGradient>
        )}

        {pageNum === 2 &&
          kiyakuContents.map(
            (item, i) => i >= 16 && <Article key={i} item={item} />,
          )}

        {pageNum === 2 && (
          <TouchableOpacity onPress={goPrev}>
            <LinearGradient
              colors={['#ffffff', '#f1f1f1']}
              style={KiyakuStyles.nextBg}>
              <View style={KiyakuStyles.iconBg}>
                <Image
                  style={KiyakuStyles.iconPrevImg}
                  source={require('../../assets/images/icons-36-white.png')}
                />
              </View>
              <Text style={KiyakuStyles.nextText}>前へ</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Kiyaku;

const KiyakuStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  nextBg: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
  },
  prev2Bg: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 5,
    marginVertical: 5,
  },
  next2Bg: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5,
    marginVertical: 5,
  },
  nextText: {
    color: '#2f3e46',
    fontWeight: 'bold',
    width: '95%',
    textAlign: 'center',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextBg: {
    right: 10,
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
  },
  iconPrevImg: {
    width: 776,
    height: 18,
    marginLeft: -144,
  },
  topTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#c6c6c6',
    borderWidth: 1,
    alignItems: 'center',
  },
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#456f9a',
    borderWidth: 1,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333333',
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bottomContent: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 15,
  },
});
