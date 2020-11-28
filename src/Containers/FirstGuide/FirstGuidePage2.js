import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import ContentText from './ContentText';
import TextBgList from './TextBgList';
import SubItem from './SubItem';

const subTitleList = [
  '時間の経過',
  'お世話タイミング',
  'ウンチがいっぱい…',
  '病気かな',
];

const FirstGuidePage2 = ({page}) => {
  const [selectItem, setSelectItem] = useState(undefined);
  const goFirstGuideList = () => {
    Actions.firstGuide();
  };
  return (
    <ImageBackground
      style={FirstGuidePage2Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴガイド" />
        <SubItem item={subTitleList[0]} />
        <TouchableOpacity
          style={FirstGuidePage2Styles.btn}
          onPress={goFirstGuideList}>
          <LinearGradient
            colors={['#ffefaa', '#ffe155']}
            style={FirstGuidePage2Styles.btnBg}>
            <Text style={FirstGuidePage2Styles.btnText}>ガイドTOP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>{'\n\n\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuidePage2;

const FirstGuidePage2Styles = StyleSheet.create({
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
});
