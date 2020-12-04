import React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

const kisyuTitle = 'Android端末2.1以上、iPhoneに対応';

const kisyuContent =
  '・Android端末のバージョンによっては、一部画像が正しく表示されない場合があります。\n・端末のメモリによっては、ページの読み込みに時間が掛かる場合があります。\n・端末のブラウザによっても、一部画像が正しく表示されない場合があります。\n・会員登録前の規約関連事項や栽培できる作物・ゲームガイドの各ページが表示されれば問題ありません。\nご自身でお確かめ下さい。';
const Kisyu = () => {
  return (
    <ImageBackground
      style={KisyuStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/wall_2.png')}>
      <HeaderBrownBar />
      <Header title="対応機種" />

      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={KisyuStyles.content}>
        <Text style={KisyuStyles.titleText}>{kisyuTitle}</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={KisyuStyles.content}>
        <Text style={KisyuStyles.contentText}>{kisyuContent}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Kisyu;

const KisyuStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
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
