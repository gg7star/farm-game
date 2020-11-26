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
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

const Article = ({item}) => {
  return (
    <View>
      <LinearGradient
        colors={['#6facd5', '#497bae']}
        style={ArticleStyles.subTitle}>
        <Text style={ArticleStyles.subTitleText}>{item.title}</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#fffadf', '#fff3a5']}
        style={ArticleStyles.content}>
        <Text style={ArticleStyles.contentText}>{item.content}</Text>
      </LinearGradient>
    </View>
  );
};

export default Article;

const ArticleStyles = StyleSheet.create({
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#456f9a',
    borderWidth: 1,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333333',
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
