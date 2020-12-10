import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import TopNana from './TopNana';

const GameEngine = ({clickTopNana, clickTopHatakeMenu}) => {
  return (
    <View style={GameEngineStyles.bg}>
      <TouchableOpacity style={GameEngineStyles.kakashi} onPress={clickTopNana}>
        {/* <AutoHeightImage
          width={responsiveWidth(20)}
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/kakashi/10.gif',
          }}
        /> */}
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={clickTopHatakeMenu}>
        <View  style={GameEngineStyles.hatake}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default GameEngine;

const GameEngineStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    position: 'absolute',
    top: 40,
    zIndex: 1,
  },
  kakashi: {
    position: 'absolute',
    top: 160,
    left: 10,
    width: responsiveWidth(15),
    height: 110,
  },
  hatake: {
    width: responsiveWidth(75),
    height: 128,
    top: 200,
    left: responsiveWidth(16),
    position: 'absolute',
  },
  house: {
    width: responsiveWidth(41),
    height: 128,
    backgroundColor: 'rgba(0, 10, 0, 0.5)',
    top: 200,
    left: responsiveWidth(16),
    position: 'absolute'
  }
})