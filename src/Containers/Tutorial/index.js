import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

import Header from '../../Components/Header'
import TutorialPoint from './TutorialPoint.js'
const tutorialList = [
  ' 1. どうやって作物を選んだらいいの？ ▶',
  ' 2. 農園でのボタン説明 ▶',
  ' 3. 上手に収穫するには ▶',
  ' 4. 【収穫ボタン】が押せないのは？ ▶',
  ' 5. 動物ゲームは野菜や果物と少し違うよ！ ▶',
  ' 6. 収獲したあとはどうしたらいい？ ▶',
];

import Menu from '../../Components/Menu';

const Tutorial = () => {
  return (
    <ImageBackground
      style={TutorialStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView>
        <Header title="ゲームガイド" />
        <View style={TutorialStyles.corner}>
          <View style={[TutorialStyles.prizeText, TutorialStyles.topCorner]}>
            <Text style={TutorialStyles.contentTitle}>
              ◆下のリンクから各説明ページに行けるよ♪
            </Text>
          </View>

          <View style={{margin: 8}}>
            {tutorialList.map((item, i) => (
              <TutorialPoint key={i} item={item} index={i} />
            ))}
          </View>
        </View>
      </ScrollView>
      <Menu />
    </ImageBackground>
  );
};

export default Tutorial;

const TutorialStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
  },
  prizeText: {
    backgroundColor: '#67b500',
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid',
  },
  topCorner: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
})
