import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import ProfileItem from './ProfileItem';

const contentList = [
  {
    name: '今開いている畑数：6畑',
    link: 'myfarm',
  },
  {
    name: '月間ランキング：-位',
    link: 'ranking',
  },
  {
    name: '所持ポイント：70327っぴ',
    link: 'point',
  },
  {
    name: '収穫作物出荷状況',
    link: 'waitDelivery',
  },
  {
    name: '作物お届け先情報登録／確認／修正',
    link: 'addressList',
  },
  // {
  //   name: 'ユーザー登録情報確認／修正',
  //   link: 'memberForm',
  // },
  {
    name: 'ポイント履歴',
    link: 'pointHistory',
  },
];

const Profile = () => {
  return (
    <ImageBackground
      style={ProfileStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="プロフィール" />

        <AutoHeightImage
          width={responsiveWidth(100)}
          source={require('../../assets/images/listtop.png')}
        />

        <View style={ProfileStyles.content}>
          <ImageBackground
            style={ProfileStyles.contentBg}
            resizeMode="repeat"
            source={require('../../assets/images/listbg02.gif')}>
            <Text style={ProfileStyles.contentText}>
              スライム さん [会員番号：11]
            </Text>
          </ImageBackground>
          {contentList.map((item, i) => (
            <ProfileItem key={i} item={item} />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;

const ProfileStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  name: {
    margin: '5%',
    borderColor: '#600',
    borderWidth: 3,
    backgroundColor: '#ffcc33',
    borderRadius: 8,
  },
  nameText: {
    fontSize: 16,
    margin: 10,
  },
  content: {
    width: '100%',
    borderColor: '#663300',
    borderWidth: 1,
  },
  contentBg: {
    width: '100%',
  },
  contentText: {
    margin: 12,
    fontWeight: 'bold',
    color: '#663300',
  },
});
