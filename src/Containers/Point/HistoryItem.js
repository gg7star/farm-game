import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';

const HistoryItem = ({item}) => {

  return (
    <LinearGradient colors={['#fffadf', '#fff3a5']} style={{padding: 15}}>
      <Text style={HistoryItemStyles.pointText}>
        {item.point}
      </Text>
      <Text style={HistoryItemStyles.dateText}>
        {item.date}
      </Text>
    </LinearGradient>
  )
}

export default HistoryItem;

const HistoryItemStyles = StyleSheet.create({  
  pointText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#630'
  },
  dateText: {
    fontWeight: 'normal',
    fontSize: 12,
    marginLeft: -5,
    color: '#222222'
  }
})
