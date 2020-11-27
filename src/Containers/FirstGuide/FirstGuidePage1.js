import React from 'react';
import {StyleSheet, ScrollView, Text, ImageBackground} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import ContentText from './ContentText';

const contentList = [
  '畑っぴとは農家監修のもと、農作業をリアルに再現した「本格農業体験シミュレーションゲーム」でもただのゲームじゃなくて、育てた作物の出来が良いとなんと…',
  '普段何気なく食べている畑の恵み。その一つ一つに込められた、農家さんの苦労や愛情を少しでも知って頂けたら嬉しいな♪\n※写真はほんの一部なんだよ♪',
  '畑っぴはとっても簡単♪\nまず好きな作物を選んで畑に行くと、かかしの菜々が、何をしたら良いかアドバイスするから、それを参考に作業を進めてね♪\n菜々のセリフは変わる時もあるから何度か話しかけてみてね♪',
  'あとは、畑の状態に注意しながら水やり・除草などの日常作業をするだけ♪',
];

const textBgList = [
  {
    title: 'その他タップ可能箇所',
    list: [
      {
        img1: require('../../assets/images/firstguide/ic_weather.png'),
        img2: null,
        text: '[天気]\n一週間の天気が確認できるよ♪',
      },
      {
        img1: require('../../assets/images/firstguide/ic_para.png'),
        img2: null,
        text: '	[パラメーター]\n畑・牛さんの状態を確認できるよ♪',
      },
    ],
  },
];

const FirstGuidePage1 = () => {
  return (
    <ImageBackground
      style={FirstGuidePage1Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴとは？" />
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view1.png')}
          style={FirstGuidePage1Styles.img}
        />
        <ContentText item={contentList[0]} />
        <Text>{'\n'}</Text>
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/photo1.png')}
          style={FirstGuidePage1Styles.img}
        />
        <Text>{'\n'}</Text>
        <ContentText item={contentList[1]} />
        <Text>{'\n'}</Text>
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view2.png')}
          style={FirstGuidePage1Styles.img}
        />
        <Text>{'\n'}</Text>
        <ContentText item={contentList[2]} />
        <Text>{'\n'}</Text>
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view3.png')}
          style={FirstGuidePage1Styles.img}
        />
        <Text>{'\n'}</Text>
        <ContentText item={contentList[3]} />
        <Text>{'\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuidePage1;

const FirstGuidePage1Styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 10,
  },
});
