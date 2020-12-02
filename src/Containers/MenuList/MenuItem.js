import React, {useEffect, useState, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image,
  Linking,
} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

import {Actions} from 'react-native-router-flux';

const urlWeb = [
  'よくある質問',
  '個人情報保護方針',
  '運営会社',
  'ご利用規約',
  'Twitter',
  'Instagram',
];
const MenuItem = ({item}) => {
  const goNext = () => {
    var includeItem = urlWeb.includes(item.name);
    if (includeItem) {
      Linking.openURL(item.link);
    } else {
      Actions[item.link]();
    }
  };
  return (
    <TouchableOpacity style={MenuItemStyle.bg} onPress={() => goNext()}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const MenuItemStyle = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#eee',
    borderWidth: 0.5,
    padding: 10,
  },
});
