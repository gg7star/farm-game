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

const companyContent =
  '運営会社：株式会社ｴﾙﾃﾞｨ\n資本金7,209万円 (2013年12月27日現在)\n設立：2010年9月16日\n所在地：〒275-0026 千葉県習志野市谷津2-7-21\n代表取締役社長：宮崎 尚登';
const Company = () => {
  return (
    <ImageBackground
      style={CompanyStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/wall_2.png')}>
      <HeaderBrownBar />
      <Header title="運営会社" />

      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={CompanyStyles.content}>
        <Text style={CompanyStyles.contentText}>{companyContent}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Company;

const CompanyStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  nextBg: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
  },
  nextText: {
    color: '#2f3e46',
    fontWeight: 'bold',
    width: '95%',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
  },
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
    lineHeight: 30,
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bottomContent: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 15,
  },
});
