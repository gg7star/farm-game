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
  Modal,
} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

import {Actions} from 'react-native-router-flux';

import Menu from '../../Components/Menu';
import MenuItem from './MenuItem';

const menuItems = [
  {
    name: 'ユーザー情報',
    link: 'profile',
  },
  {
    name: '送付手続き待ち',
    link: 'waitDelivery',
  },
  {
    name: '作物出荷状況',
    link: 'news',
  },
  {
    name: 'プロフィール',
    link: 'profile',
  },
  {
    name: '送付手続き',
    link: 'waitDelivery',
  },
  {
    name: '送付先情報',
    link: 'addressList',
  },
  // {
  //   name: '栽培履歴',
  //   link: 'growthList',
  // },
  {
    name: 'よくある質問',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: 'Instagram',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: '評価して応援する',
    link: 'profile',
  },
  {
    name: 'ヤマトメールサービス',
    link: 'yamato',
  },
  {
    name: '個人情報保護方針',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: '運営会社',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: 'ご利用規約',
    link: 'https://twitter.com/hatakeppi',
  },
];

const MenuList = () => {
  return (
    <ImageBackground
      style={MenuListStyle.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      {menuItems.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
      <Menu />
    </ImageBackground>
  );
};

export default MenuList;

const MenuListStyle = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
});
