import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import { Actions } from 'react-native-router-flux';

import MenuBtn from './MenuBtn.js';

const menuList = [
  {
    title: 'profile',
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/btnA_01.png'
  },
  {
    title: 'profile',
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/btnA_03.png'
  },
  {
    title: 'profile',
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/btnA_05.png'
  },
  {
    title: 'profile',
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/btnA_06.png'
  },
  {
    title: 'profile',
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/btnA_07.png'
  }
];

const Menu = ({item}) => {
  const [myMenu, setMyMenu] = useState(false);

  const goHome = () => {
    Actions.home()
  }

  const goMyFarm = () => {
    Actions.myfarm()
  }

  const goNews = () => {
    Actions.news()
  }

  return (
    <View>
      {
        myMenu && <View style={MenuStyles.modalContent}>
          <TouchableOpacity style={MenuStyles.modalClose} onPress={() => setMyMenu(false)}>
            <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/back.png'}} style={{width: 37, height: 37}} />
          </TouchableOpacity>
          <View style={MenuStyles.menuBtn}>
            {
              menuList.map((item, i) => (
                <View key={i} style={MenuStyles.eachBtn}>
                  <MenuBtn item={item} />
                </View>
              ))
            }
          </View>
          <AutoHeightImage width={responsiveWidth(90)} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/bg99.png'}} />
        </View>
      }
      <View style={MenuStyles.bg}>
        <TouchableOpacity style={MenuStyles.eachMenu} onPress={() => goHome()}>
          <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bt01.png'}} style={{width: 30, height: 30}} />
          <View style={MenuStyles.name}>
            <Text style={MenuStyles.text}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.eachMenu} onPress={() => goMyFarm()}>
          <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bt04.png'}} style={{width: 30, height: 30}} />
          <View style={MenuStyles.name}>
            <Text style={MenuStyles.text}>MY FARM</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.eachMenu} onPress={() => setMyMenu(true)}>
          <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bt03.png'}} style={{width: 30, height: 30}} />
          <View style={MenuStyles.name}>
            <Text style={MenuStyles.text}>MY MENU</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.eachMenu} onPress={() => goNews()}>
          <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bt05.png'}} style={{width: 30, height: 30}} />
          <View style={MenuStyles.name}>
            <Text style={MenuStyles.text}>お知らせ</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={MenuStyles.pageTop}>
          <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/go_top.png'}} style={{width: 80, height: 90}} />
        </TouchableOpacity>
      </View>
     
    </View>
  )
}

export default Menu;

const MenuStyles = StyleSheet.create({
  bg: {
    height: 50,
    zIndex: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#388e3c',
    backgroundColor: '#67b500',
    flexDirection: 'row'
  },
  eachMenu: {
    width: '25%',
    zIndex: 10,
    backgroundColor: '#67b500',
    borderRightColor: '#388e3c',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#630'
  },
  pageTop: {
    width: '25%',
    height: 90,
    zIndex: 1,
    bottom: 25,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  modalContent: {
    left: '5%',
    top: -responsiveHeight(65),
    position: 'absolute',
    zIndex: 60,
    width: '90%',
  },
  modalClose: {
    position: 'absolute',
    right: '6%',
    top: '3%',
    zIndex: 200,
  },
  menuBtn: {
    position: 'absolute',
    zIndex: 100,
    top: '15%',
    width: '88%',
    left: '6%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  eachBtn: {
    width: '25%',
    marginHorizontal: 10
  }
})