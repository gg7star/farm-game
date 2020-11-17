import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const GameBgImg = ({item}) => {
  return (
    <View style={{height: 400}}>
      <Image
        source={{uri: item.sky}}
        style={GameBgImgStyles.skyImg}
      />
      <Image
        source={{uri: item.ground}}
        style={GameBgImgStyles.screenImg}
      />
      <AutoHeightImage
        width={responsiveWidth(41)}
        source={{uri: item.house}}
        style={GameBgImgStyles.houseImg}
      />
      <Image
        source={{uri: item.river}}
        style={GameBgImgStyles.screenImg}
      />
      <Image
        source={{uri: item.tree}}
        style={GameBgImgStyles.screenImg}
      />
      <Image
        source={{uri: item.hatake}}
        style={GameBgImgStyles.screenImg}
      />
    </View>
  )
}

export default GameBgImg;

const GameBgImgStyles = StyleSheet.create({
  skyImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: responsiveWidth(100),
    height: 150,
  },
  screenImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: responsiveWidth(100),
    height: 400,
  },
  houseImg: {
    position: 'absolute',
    top: 70,
    left: '48%',
  }
})