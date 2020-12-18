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
    icon: require('../../assets/images/icons/userinfo.png'),
  },
  {
    name: '送付手続き待ち',
    link: 'waitDelivery',
    icon: require('../../assets/images/icons/send_processing.png'),
  },
  {
    name: '作物出荷状況',
    link: 'news',
    icon: require('../../assets/images/icons/ship_info.png'),
  },
  {
    name: '送付先情報',
    link: 'addressList',
    icon: require('../../assets/images/icons/home_info.png'),
  },
  {
    name: '栽培履歴',
    link: 'growth',
    icon: require('../../assets/images/icons/history.png'),
  },
  {
    name: 'よくある質問',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/question.png'),
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/twitter.png'),
  },
  {
    name: 'Instagram',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/instagram.png'),
  },
  {
    name: '評価して応援する',
    link: 'profile',
    icon: require('../../assets/images/icons/evaluate.png'),
  },
  {
    name: 'ヤマトメールサービス',
    link: 'yamato',
    icon: require('../../assets/images/icons/yamato.png'),
  },
  {
    name: '個人情報保護方針',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/policy.png'),
  },
  {
    name: '運営会社',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/company.png'),
  },
  {
    name: 'ご利用規約',
    link: 'https://twitter.com/hatakeppi',
    icon: require('../../assets/images/icons/terms_service.png'),
  },
];

const MenuList = () => {
  return (
    <ImageBackground
      style={MenuListStyle.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/background_menu.png')}>
      <ScrollView>
        {menuItems.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
        <Text>{'\n\n'}</Text>
      </ScrollView>
      <Menu item="menuList" />
    </ImageBackground>
  );
};

export default MenuList;

const MenuListStyle = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
});
