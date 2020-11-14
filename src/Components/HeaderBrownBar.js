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
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const HeaderBrownBar = () => {

  const goHome = () => {
    Actions.home();
  }

  return (
    <ImageBackground style={HeaderBrownBarStyles.headerLogin} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/category_bg4.gif'}}>
      <TouchableOpacity onPress={() => goHome()}>
        <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/logo2.png'}} style={HeaderBrownBarStyles.logo} resizeMode='cover' />
      </TouchableOpacity>            
      <Text style={HeaderBrownBarStyles.logoText}>～手のひらの小さな農園～</Text>
      <TouchableOpacity  style={HeaderBrownBarStyles.logoTouch}>
        <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/btn/footer_l.png'}} style={HeaderBrownBarStyles.loginBtn} />
        <Text 
          style={{color: '#fff', fontSize: 8, fontWeight: 'bold'}}
        >
          ログアウト
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default HeaderBrownBar;

const HeaderBrownBarStyles = StyleSheet.create({
  headerLogin: {
    height: 47,
    margin: 0,
    flexDirection: 'row'
  },
  logo: {
    width: 95,
    height: 40,
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5
  },
  logoText: {
    color: '#ccff33',
    fontSize: 12,
    display: 'flex',
    marginTop: 30,
    marginLeft: -10,
    fontWeight: 'bold'
  },
  logoTouch: {
    bottom: 2,
    right: 0,
    position: 'absolute'
  },
  loginBtn: {
    width: 38,
    height: 30,
  },
})
