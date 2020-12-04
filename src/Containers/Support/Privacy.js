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

import PrivacyItem from './PrivacyItem';

const privacyTitle =
  '個人情報の保護に関する法律（以下「個人情報保護法」といいます）及び関連法令並びに各ガイドラインを遵守し、当社が業務上使用するお客様の個人情報について、以下のとおり個人情報の保護方針を定めます。';
const privacyContent = [
  {
    title: '個人情報保護の適用範囲',
    content:
      '当社の提供するサービスにおいて当社が取得し、管理する個人情報は、以下のとおりとします。\n・お名前、郵便番号、住所、電話番号、生年月日など\n・ID、パスワード、メールアドレス、IP電話番号、通信履歴、クレジットカード情報、その他の課金情報、信用情報 なお、当社のサービスから広告や検索サービスをリンクして到達したウェブサイトを利用した結果、当該ウェブサイトに残された個人情報については、当社で直接管理することができない為、当社における個人情報保護の適用範囲外といたします。',
  },
  {
    title: '個人情報の利用目的',
    content:
      '当社が提供するWeb上のｻｰﾋﾞｽを通じて取得した個人情報は、次の目的の為に利用させていただきます。\n・当社ｻｲﾄの利便性を向上させるｻｰﾋﾞｽおよびｼｽﾃﾑの運営\n・当社の新商品・ｻｰﾋﾞｽ・ｷｬﾝﾍﾟｰﾝ・お客様ﾌﾟﾚｾﾞﾝﾄなどのご紹介\n・ﾒﾝﾃﾅﾝｽ、重要なお知らせなどのご案内\n・お客様にとって有用と思われる当社提携先の商品・ｻｰﾋﾞｽをご紹介するためのﾒｰﾙﾏｶﾞｼﾞﾝ\n・当社のｻｰﾋﾞｽおよび提携会社をご利用・ご契約いただいた際の商品・ｻｰﾋﾞｽの提供および発送に関わる業務\n・当社の商品・ｻｰﾋﾞｽのためのﾏｰｹﾃｨﾝｸﾞ活動',
  },
  {
    title: '個人情報の取得方法',
    content:
      '＜直接的に入手する場合＞\n当社は、その利用目的を明確にした上、当社の提供するサイト上に必要事項を告知し、ご本人の同意を得た上で、適法かつ公正な手段により、個人情報を取得いたします。個人情報の収集に際しては、お客様の意思に反する不正な方法により入手致しません。',
  },
  {
    title: '個人情報の開示・提供',
    content:
      '当社では、以下の場合を除き、お客様の事前のご承認なく、個人情報を開示または提供致しません。\n・集計および分析等により得られたものを、個人を識別または特定できない態様にて提携先等第三者に開示または提供する場合\n・任意に「利用者」等の同意を得た上で個人情報を開示または利用する場合\n・検察・警察・監督官庁からの適法・適式な手順により情報の照会があった場合\n・プロバイダー責任法（正称：特定電気通信役務提供者の損害賠償責任の制限及び発信者情報の開示に関する法律）第4条に該当する請求があった場合\n・「個人情報の利用目的」の範囲内において、外部の提携旅行会社等の第三者に個人情報を預託する場合 なお、外部の提携旅行会社等の第三者に個人情報を預託する場合、預託に必要な最小限の範囲(住所、氏名、電話番号)に限り、個人情報を開示いたしますが、その開示に当たっては、情報の安全管理が図られるよう、当該事業者に対する必要かつ適切な管理を行います。また、個人情報を第三者に提供する際には、個人情報保護法に基づくお客様のご承認の獲得、またはこれに準ずる措置を採ることと致します。',
  },
  {
    title: '個人情報の訂正、利用停止、削除の手続き',
    content:
      '当社は、お客様ご本人より個人情報の開示、訂正、利用停止、削除のご依頼があった場合、ご本人様であることを確認させていただいた上で、お手続きをさせていただきます。ご依頼は、以下のお問い合わせ窓口までお申し出下さい。',
  },
  {
    title: '個人情報保護法に関する利用原則\n及び禁止事項',
    content:
      '＜個人情報の利用制限＞\n当社における個人情報の利用は、業務の目的の範囲内で、権限を与えられた者のみが、行うものとします。\n＜個人情報に関する禁止事項＞\n・個人情報の利用目的外での利用は行いません。個人情報の所定の利用場所からの持ち出し、外部への送信など、個人情報の漏洩行為について万全の措置をとります。\n・当社従業員に対し、就業中及びならびに、退職後において、個人情報に関する守秘義務を履行させます。\n・以下の各事項に関する個人情報の取得、利用、提供については行いません。\n思想、宗教、人種・民族、身体障害・精神障害、犯罪歴など社会的差別に関する事項、保健医療・性生活関連事項、勤労者の団体権・団体行為の関連事項、示威行為・請願権など政治的権利行使に関連事項',
  },
  {
    title: '免責',
    content:
      '当社では、お客様のID及びパスワードの管理については関与いたしません。お客様の不注意によりID及びパスワードが第三者に利用された場合は、ご登録いただいている個人情報を閲覧される可能性がございますので、ご利用にあたっては、使用および管理について責任を負うと共に、使用上の過誤または第三者による不正使用等について十分注意をして下さい。',
  },
];
const Privacy = () => {
  return (
    <ImageBackground
      style={PrivacyStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/wall_2.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="個人情報保護方針" />

        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={PrivacyStyles.content}>
          <Text style={PrivacyStyles.titleText}>{privacyTitle}</Text>
        </LinearGradient>

        {privacyContent.map((item, i) => (
          <PrivacyItem key={i} item={item} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Privacy;

const PrivacyStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontWeight: 'bold',
  },
  nextBg: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
  },
  nextText: {
    color: '#2f3e46',
    fontWeight: 'bold',
    width: '95%',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
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
