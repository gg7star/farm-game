import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import ItemTitle from './ItemTitle.js';

const PrizePhoto = ({item}) => {

  return (
    <View
      style={PrizePhotoStyles.corner}
    >
      <ItemTitle item={item} />
      <View
        style={{flexDirection: 'row'}}
      >
        <View
          style={PrizePhotoStyles.shadow}
        >
          <AutoHeightImage
            width={responsiveWidth(50)}
            source={{uri: item.photo}}
            style={{margin: 8}}
          />
        </View>
        <View
          style={{flex: 1}}
        >
          <Text
            style={{fontSize: 14, margin: 8, lineHeight: 20}}
          >
            {item.text}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default PrizePhoto;

const PrizePhotoStyles = StyleSheet.create({
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 8,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  }
})
