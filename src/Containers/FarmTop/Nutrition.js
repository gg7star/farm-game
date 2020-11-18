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

const Nutrition = ({item}) => {


  return (
    <View style={NutritionStyles.bg}>   
      <AutoHeightImage
        width={responsiveWidth(16)}
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/para1.png'}} 
      />
    </View>
  )
}

export default Nutrition;

const NutritionStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    position: 'absolute',
    left: responsiveWidth(20),
    top: 50,
    zIndex: 1,
    overflow: 'hidden'
  },
})