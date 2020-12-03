import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

// const bgData = {
//   sky: require('../assets/images/bg_game/sky/A04.gif'),
//   house: require('../assets/images/bg_game/house/A11.gif'),
//   ground: require('../assets/images/bg_game/ground/1101.gif'),
//   river: require('../assets/images/bg_game/river/1110.gif'),
//   tree: require('../assets/images/bg_game/tree/1110.gif'),
//   hatake: require('../assets/images/bg_game/hatake/1110.gif'),
// };
const GameBgImg = ({bgData}) => {
  return (
    <View style={{height: 400}}>
      <Image source={bgData.sky} style={GameBgImgStyles.skyImg} />
      <Image source={bgData.hatake} style={GameBgImgStyles.screenImg} />
      <Image source={bgData.ground} style={GameBgImgStyles.screenImg} />
      <TouchableWithoutFeedback>
        <AutoHeightImage
          width={responsiveWidth(41)}
          source={bgData.house}
          style={GameBgImgStyles.houseImg}
        />
      </TouchableWithoutFeedback>
      <Image source={bgData.river} style={GameBgImgStyles.screenImg} />
      <Image source={bgData.tree} style={GameBgImgStyles.screenImg} />
    </View>
  );
};

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
  },
});
