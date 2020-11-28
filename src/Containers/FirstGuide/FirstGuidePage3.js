import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';
import ContentText from './ContentText.js';

import SubItem from './SubItem';

const subTitleList = [
  '収穫作物を届けてもらうには?',
  'どこから送付先を登録するの？',
  'いつ届くの？',
  '菜々からのお願いだよ',
  '注意してね',
];

const subContentList = [
  '送付手続きから収穫作物を選び、送付先入力に\nお届先住所\nお名前\n電話番号\n携帯メールアドレス\n属性：本人か本人以外\n※本人以外に送る際は、本人のお名前が「○○さんよりお届け」と送付伝票に記載されるよ♪',
  'MY MENU＞送付先情報から新規及び追加の住所登録ができるよ♪\n住所は5件まで登録可能だよ！離れて住んでいる家族や友達にプレゼントとして送ることも出来るよ♪その時は登録時に「本人以外」を選択してね。\n事前に送り先に作物が届くことをお知らせしてね♪',
  '基本的に毎週水曜日10時までの送付手続きを取りまとめ、農家さんから金曜日に出荷して週末にお届けになるよう手配してるよ♪\n※天候や作物の生育状況及び流通の関係でお届けが遅れる場合もあるの。\n※イベント作物等は、予め出荷される日を決めているものがあるから待っててもらうよ♪\n※同じ住所の人で、同一の農家さんからの作物を収穫された人には一緒に送らせてもらっているよ♪\n※鮮度の高いものを送っても不在が続くと作物が傷んじゃうの。 ヤマトのメールサービスは作物の配達指定ができて、無料だから登録してね♪',
  '採れたての新鮮な作物を早く食べて欲しいから、お届け時に不在の場合配送業者から連絡が行くよ。\n着信拒否になっていると連絡ができないの。その時はサポートからメールを送るんだけど着信がすぐにわかる携帯メールアドレスを登録してね。ドメイン解除（パソコンからのメールを受取れる設定）してくれるとうれしいの♪',
  '収穫した作物は旬があるから、すぐに送付手続きをしてね♪\n収穫して1ヶ月以内か作物出荷の終了日までに送付手続きをしてくれないと自動的に収穫時のポイントに交換になるよ♪\n送付手続きを忘れて泣いても知らないぞ！',
];

const FirstGuidePage3 = () => {
  const [selectItem, setSelectItem] = useState(undefined);
  const goFirstGuideList = () => {
    Actions.firstGuide();
  };
  const handleClickItem = (e) => {
    if (selectItem === e) {
      setSelectItem(undefined);
    } else {
      setSelectItem(e);
    }
  };
  return (
    <ImageBackground
      style={FirstGuidePage3Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴガイド" />
        {subTitleList.map((item, i) => (
          <View key={i}>
            <SubItem
              item={item}
              id={i}
              status={selectItem === i}
              handleClick={handleClickItem}
              top={i === 0}
              bottom={i === subTitleList.length - 1}
            />
            {selectItem === i && <ContentText item={subContentList[i]} />}
          </View>
        ))}
        <TouchableOpacity
          style={FirstGuidePage3Styles.btn}
          onPress={goFirstGuideList}>
          <LinearGradient
            colors={['#ffefaa', '#ffe155']}
            style={FirstGuidePage3Styles.btnBg}>
            <Text style={FirstGuidePage3Styles.btnText}>ガイドTOP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>{'\n\n\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuidePage3;

const FirstGuidePage3Styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 10,
  },
  btn: {
    backgroundColor: '#fadb4e',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#f4c63f',
    borderRadius: 12,
    marginTop: 10,
  },
  btnBg: {
    alignItems: 'center',
    borderRadius: 12,
  },
  btnText: {
    marginVertical: 12,
    fontWeight: 'bold',
    color: '#222',
  },
  content: {
    marginHorizontal: 16,
    backgroundColor: '#f60',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  contentText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
