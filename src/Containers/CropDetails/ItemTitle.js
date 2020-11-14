import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import Header from '../../Components/Header';


const ItemTitle = ({item}) => {

  return (
    <View 
      style={[ItemTitleStyles.prizeText,    
        ItemTitleStyles.topCorner]}
    >
      <Image
        style={{width: 32, height: 32}}
        source={{uri: item.titleImg}}
      />
      <Text style={[ItemTitleStyles.headerText, ItemTitleStyles.contentTitle]}>
        {item.title}
      </Text>
    </View>
  )
}

export default ItemTitle;

const ItemTitleStyles = StyleSheet.create({
  prizeText: {
    backgroundColor: '#67b500',    
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid', 
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  topCorner: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
  }
})
