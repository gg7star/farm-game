import React from 'react';
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

import {responsiveWidth} from 'react-native-responsive-dimensions';

import ItemTitle from './ItemTitle.js';

const FirstView = ({title, titleImg, img}) => {
  console.log(20, title);
  return (
    <View style={FirstViewStyles.corner}>
      <ItemTitle item={title} titleImg={titleImg} />
      <AutoHeightImage width={responsiveWidth(100) - 16} source={{uri: img}} />
    </View>
  );
};

export default FirstView;

const FirstViewStyles = StyleSheet.create({
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
  },
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
  },
  contentText: {
    marginBottom: 8,
    padding: 8,
  },
});
