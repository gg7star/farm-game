import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import {Actions} from 'react-native-router-flux';

const MenuBrown = () => {
  const goHome = () => {
    Actions.home();
  };

  const goMyMenu = () => {
    Actions.myMenu();
  };

  const goMyFarm = () => {
    Actions.myfarm();
  };

  const goFirstGuide = () => {
    Actions.firstGuide();
  };

  return (
    <ImageBackground
      style={MenuBrownStyles.bgImg}
      source={require('../assets/images/category_bg4.gif')}>
      <TouchableOpacity
        style={MenuBrownStyles.eachMenu}
        onPress={() => goHome()}>
        <Image
          source={require('../assets/images/footer_h.png')}
          style={{width: 30, height: 28}}
        />
        <View style={MenuBrownStyles.name}>
          <Text style={MenuBrownStyles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuBrownStyles.eachMenu}
        onPress={() => goMyFarm()}>
        <Image
          source={require('../assets/images/footer_f.png')}
          style={{width: 30, height: 28}}
        />
        <View style={MenuBrownStyles.name}>
          <Text style={MenuBrownStyles.text}>MY FARM</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={MenuBrownStyles.eachMenu} onPress={goMyMenu}>
        <Image
          source={require('../assets/images/footer_m.png')}
          style={{width: 30, height: 28}}
        />
        <View style={MenuBrownStyles.name}>
          <Text style={MenuBrownStyles.text}>MY MENU</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={MenuBrownStyles.eachMenu}
        onPress={() => goFirstGuide()}>
        <Image
          source={require('../assets/images/footer_g.png')}
          style={{width: 30, height: 28}}
        />
        <View style={MenuBrownStyles.name}>
          <Text style={MenuBrownStyles.text}>ｹﾞｰﾑｶﾞｲﾄﾞ</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default MenuBrown;

const MenuBrownStyles = StyleSheet.create({
  bgImg: {
    height: 44,
    zIndex: 1000,
    flexDirection: 'row'
  },
  bg: {
    height: 50,
    zIndex: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#388e3c',
    backgroundColor: '#67b500',
    flexDirection: 'row',
  },
  eachMenu: {
    width: '25%',
    zIndex: 10,
    borderTopColor: '#ffff99',
    borderTopWidth: 1,
    borderRightColor: '#ffff99',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
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
    alignItems: 'flex-start',
  },
  eachBtn: {
    width: '25%',
    marginHorizontal: 10,
  },
});
