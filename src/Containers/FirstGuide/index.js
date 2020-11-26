import React from 'react';
import {StyleSheet, ScrollView, Text, ImageBackground} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import GuideItem from './GuideItem';

const guideList = [
  {
    img: require('../../assets/images/firstguide/icon01.png'),
    content: '畑っぴはどんなゲーム？',
    link: 'firstGuidePage1',
  },
  {
    img: require('../../assets/images/firstguide/icon05.png'),
    content: '遊び方ガイド',
    link: 'firstGuidePage5',
  },
  {
    img: require('../../assets/images/firstguide/icon02.png'),
    content: 'どうぶつガイド',
    link: 'firstGuidePage2',
  },
  {
    img: require('../../assets/images/firstguide/icon03.png'),
    content: '配送ガイド',
    link: 'firstGuidePage3',
  },
  {
    img: require('../../assets/images/firstguide/icon04.png'),
    content: '畑っぴFAQ',
    link: 'firstGuidePage4',
  },
  {
    img: require('../../assets/images/firstguide/icon01.png'),
    content: 'お問い合わせ',
    link: 'contact',
  },
];

const FirstGuide = () => {
  return (
    <ImageBackground
      style={FirstGuideStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴガイド" />
        <AutoHeightImage
          width={responsiveWidth(100)}
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/firstguide/topbana.png',
          }}
        />

        {guideList.map((item, i) => (
          <GuideItem key={i} item={item} />
        ))}
        <Text>{'\n\n\n\n\n\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuide;

const FirstGuideStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
});
