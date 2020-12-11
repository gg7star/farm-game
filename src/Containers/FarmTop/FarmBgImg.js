import React, {useState} from 'react';
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

const imgRate = responsiveWidth(100) / 240;

const FarmBgImg = ({bgData}) => {
  // console.log(39, bgData);
  return (
    <View style={{height: 400}}>
      {bgData.map((item, i) => (
        <Image
          key={i}
          source={{uri: item[0], cache: 'force-cache'}}
          style={[
            FarmBgImgStyles.screenImg,
            {left: item[1] * imgRate, top: item[2] * imgRate},
            {width: item[3] * imgRate, height: item[4] * imgRate},
          ]}
        />
      ))}
    </View>
  );
};

export default FarmBgImg;

const FarmBgImgStyles = StyleSheet.create({
  skyImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: responsiveWidth(100),
    height: 150,
  },
  screenImg: {
    position: 'absolute',
  },
  houseImg: {
    position: 'absolute',
    top: 43 * (400 / 240),
    left: '48%',
    width: 98 * imgRate,
    height: 72 * imgRate,
  },
});
