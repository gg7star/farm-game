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

const GameProgressBar = ({item}) => {


  return (
    <View style={GameProgressBarStyles.bg}>
      <View style={GameProgressBarStyles.current} />      
    </View>
  )
}

export default GameProgressBar;

const GameProgressBarStyles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 8,
    backgroundColor: '#f90',
    overflow: 'hidden',
    zIndex: 100,
  },
  current: {
    backgroundColor: '#666',
    height: 4,
    top: 2
  }
})