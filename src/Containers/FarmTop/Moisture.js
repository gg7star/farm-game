import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const Nutrition = ({handleClickNutrition}) => {
  const clickItem = () => {
    handleClickNutrition();
  };
  return (
    <TouchableOpacity style={NutritionStyles.bg} onPress={() => clickItem()}>
      <AutoHeightImage
        width={responsiveWidth(16)}
        source={{
          uri:
            'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/para2.png',
        }}
      />
    </TouchableOpacity>
  );
};

export default Nutrition;

const NutritionStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    position: 'absolute',
    left: responsiveWidth(20),
    top: 50,
    zIndex: 2,
    overflow: 'hidden',
  },
});
