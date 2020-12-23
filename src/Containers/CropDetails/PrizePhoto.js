import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import {responsiveWidth} from 'react-native-responsive-dimensions';

import ItemTitle from './ItemTitle.js';

const PrizePhoto = ({item, titleImg}) => {
  return (
    <View style={PrizePhotoStyles.corner}>
      <ItemTitle item="お届け商品イメージ" titleImg={titleImg} />
      <View style={{flexDirection: 'row'}}>
        <View style={[PrizePhotoStyles.shadow]}>
          <AutoHeightImage
            width={responsiveWidth(50)}
            source={{uri: item.image}}
            style={{margin: 8}}
          />
        </View>
        <Text style={{fontSize: 14, margin: 8, lineHeight: 20, flex: 1}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default PrizePhoto;

const PrizePhotoStyles = StyleSheet.create({
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
