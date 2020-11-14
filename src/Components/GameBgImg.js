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
    <View>
    </View>
  )
}

export default GameBgImg;

const GameBgImgStyles = StyleSheet.create({
  bg: {
    height: 50,
    zIndex: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#388e3c',
    backgroundColor: '#67b500',
    flexDirection: 'row'
  },
})