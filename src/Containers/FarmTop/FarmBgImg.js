import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const imgRate = responsiveWidth(100) / 240;

const FarmBgImg = ({bgData}) => {
  // console.log(16, 'FarmBg= ', bgData);
  return (
    <View style={{height: responsiveWidth(100)}}>
      {bgData.map((item, i) => (
        <Image
          key={i}
          source={{uri: item[0]}}
          style={[
            FarmBgImgStyles.screenImg,
            {
              left: item[3] < 240 ? item[1] * imgRate : 0,
              top: item[3] < 240 ? item[2] * imgRate : 0,
            },
            // {left: item[1] * imgRate, top: item[2] * imgRate},
            {width: item[3] * imgRate, height: item[4] * imgRate},
          ]}
          // id={console.log('------', item[0])}
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
