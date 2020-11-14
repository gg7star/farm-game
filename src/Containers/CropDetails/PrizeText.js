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

import ItemTitle from './ItemTitle.js';

const PrizeText = ({item}) => {

  return (
    <View
      style={PrizeTextStyles.corner}
    >
      <ItemTitle item={item} />
      <View
        style={{margin: 8}}
      >
        <Text>
        【内容量】{'\n'}{item.content[0]}
        </Text>
        <Dash 
          style={{height: 0.3, marginBottom: 8}}
          dashColor='rgb(142, 142, 142)'
          dashThickness={0.5} 
        />
        <Text>
        【【出荷期間】{'\n'}{item.content[1]}
        </Text>
        <Dash 
          style={{height: 0.3, marginBottom: 8}}
          dashColor='rgb(142, 142, 142)'
          dashThickness={0.5} 
        />
        <Text>
        【手続き締め切り日】
        </Text>
        <Text
          style={{color: 'rgba(214, 0, 3, 1.00)', fontWeight: 'bold'}}
        >
          {item.content[2]}
        </Text>
        <Dash 
          style={{height: 0.3, marginBottom: 8}}
          dashColor='rgb(142, 142, 142)'
          dashThickness={0.5} 
        />
        <Text>
        【生産地】{'\n'}{item.content[3]}
        </Text>
        <Dash 
          style={{height: 0.3, marginBottom: 8}}
          dashColor='rgb(142, 142, 142)'
          dashThickness={0.5} 
        />
        <View 
          style={{alignItems: 'flex-start'}}
        >
          <TouchableOpacity
            style={PrizeTextStyles.btn}
          >
            <Text
              style={{margin: 4, color: '#fff'}}
            >
              商品のレビューを送る ▶
            </Text>
          </TouchableOpacity>
        </View>
        <Dash 
          style={{height: 0.3, marginVertical: 8}}
          dashColor='rgb(142, 142, 142)'
          dashThickness={0.5} 
        />
      </View>
    </View>
  )
}

export default PrizeText;

const PrizeTextStyles = StyleSheet.create({
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    borderRadius: 4
  }
})
