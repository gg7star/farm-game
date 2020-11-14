import React from 'react';
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
import LinearGradient from 'react-native-linear-gradient';

const RankBtn = ({name}) => {
  return (
    <LinearGradient 
      colors={['#5f9cc5', '#396b9e']} 
      style={[RankBtnStyles.btnGradient]}
    >
      <Text style={RankBtnStyles.text}>{name}</Text>
    </LinearGradient>
  )
}

export default RankBtn;

const RankBtnStyles = StyleSheet.create({
  btnGradient: {
    flex: 1,
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginVertical: 8,
    fontWeight: 'bold',
    fontSize: 14
  }
})
