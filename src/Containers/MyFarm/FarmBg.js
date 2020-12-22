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

const imgWidth = responsiveWidth(30);
const imgRate = imgWidth / 240;

const FarmBg = ({bgData}) => {
  return (
    <View style={{height: imgWidth}}>
      {bgData.map((item, i) => (
        <Image
          key={i}
          source={{uri: item[0], cache: 'force-cache'}}
          style={[
            FarmBgStyles.screenImg,
            {
              left: item[3] < 240 ? item[1] * imgRate : 0,
              top: item[3] < 240 ? item[2] * imgRate : 0,
            },
            {width: item[3] * imgRate, height: item[4] * imgRate},
          ]}
        />
      ))}
    </View>
  );
};

export default FarmBg;

const FarmBgStyles = StyleSheet.create({
  skyImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: imgWidth,
    height: 150 * imgRate,
  },
  screenImg: {
    position: 'absolute',
  },
  houseImg: {
    position: 'absolute',
    top: 43 * (imgWidth / 240),
    left: '48%',
    width: 98 * imgRate,
    height: 72 * imgRate,
  },
});
