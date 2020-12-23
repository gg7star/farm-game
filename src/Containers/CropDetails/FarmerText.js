import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import { responsiveWidth } from 'react-native-responsive-dimensions';
import Dash from 'react-native-dash';

import ItemTitle from './ItemTitle.js';

const FarmerText = ({item, titleImg}) => {
  return (
    <View style={FarmerTextStyles.corner}>
      <ItemTitle item="生産者紹介" titleImg={titleImg} />
      <View style={{flexDirection: 'row'}}>
        <View style={{margin: 8, width: '50%'}}>
          <Text>
            【農園名】{'\n'}
            {item.content[0]}
          </Text>
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
          <Text>
            【農家名】{'\n'}
            {item.content[1]}
          </Text>
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
          <Text>
            【生産者さんから一言】{'\n'}
            {item.content[2]}
          </Text>
        </View>
        <View style={FarmerTextStyles.shadow}>
          <AutoHeightImage
            width={responsiveWidth(40)}
            source={{uri: item.farmerImg}}
            style={FarmerTextStyles.img}
          />
        </View>
      </View>
    </View>
  );
};

export default FarmerText;

const FarmerTextStyles = StyleSheet.create({
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
    transform: [{rotate: '1deg'}],
  },
  img: {
    marginVertical: 8,
    marginHorizontal: '2.5%',
    borderColor: '#fff',
    borderWidth: 2,
  },
});
