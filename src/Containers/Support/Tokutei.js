import React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

const tokuteiContent =
  '販売業者：株式会社エルディ\n\n運営責任者：宮崎 尚登\n\n所在地：〒275-0026 千葉県習志野市谷津2-7-21\n\n電話番号：047-779-9374\n\n連絡先：INFO@ld-inc.jp\n\n販売価格：商品ごとに設定。ゲーム内通貨で表示。\n\n商品の支払い方法 ：ｹﾞｰﾑ内通貨\n\n商品の引渡し時期：宅配便にて1週間前後でお届けします。ただし、販売開始直後や年末年始においては、商品の発送が遅れる場合があります。 商品のお届けは登録いただいた「契約者住所」への配送に限らせていただきます。\n\n返品について：原則、お客様都合の返品（ｵﾌﾟｼｮﾝ品含む）は承っておりません。\n\n交換について：配送途中の事故などで汚れ・傷等が生じた場合や商品に不備があった場合は、新しい商品とお取替えさせていただきますので、商品到着から3日以内にご連絡ください。交換にかかる送料については、当社負担とさせていただきます。';
const Tokutei = () => {
  return (
    <ImageBackground
      style={TokuteiStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/wall_2.png')}>
      <HeaderBrownBar />
      <Header title="特定商取引法表示" />

      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={TokuteiStyles.content}>
        <Text style={TokuteiStyles.contentText}>{tokuteiContent}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Tokutei;

const TokuteiStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
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
