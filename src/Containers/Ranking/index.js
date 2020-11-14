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
import Icon from 'react-native-vector-icons'
import { List } from 'react-native-paper';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Dash from 'react-native-dash';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';
import RankBtn from './RankBtn.js';
import RankItem from './RankItem.js';

const rankList = [
  {
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/myMenu/1.jpg',
    title: '消えソール ',
    content: '271mpt　[収穫数:1]'
  },
  {
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/myMenu/1.jpg',
    title: 'ひぃろ',
    content: '150mpt　[収穫数:1]'
  },
  {
    img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/myMenu/1.jpg',
    title: 'mako',
    content: '144mpt　[収穫数:1]'
  },
]

const Ranking = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={RankingStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/01home/backimg-bg.png'}}>
        <ScrollView style={{flexDirection: 'column'}}>
          <HeaderBrownBar /> 
          <Header title='月間ランキング' />
          
          <TouchableOpacity>
            <RankBtn name='月間' />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row'}}
          >
            <TouchableOpacity style={{width: '50%'}}>
              <RankBtn name='11月前半' />
            </TouchableOpacity>
            <TouchableOpacity style={{width: '50%'}}>
              <RankBtn name='11月後半' />
            </TouchableOpacity>
          </View>
          <AutoHeightImage width={responsiveWidth(100)} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/deco/listtop.png'}} />
          {
            rankList.map((item, i) => (
              <RankItem item={item} index={i+1} />
            ))
          }
          <TouchableOpacity>
            <LinearGradient 
              colors={['#f9f9f9', '#eeeeee']}
              style={RankingStyles.pageNav}
            >
              <Text
                style={RankingStyles.pageNavText}
              >
                次の25件
              </Text>
              <Image
                style={RankingStyles.iconBg}
                source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/images/icons-36-white.png'}}
              />
            </LinearGradient>
          </TouchableOpacity>
          <Dash 
            style={{height: 2}}
            dashColor='#663300'
            dashGap={0}
          />
        </ScrollView>   
        
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Ranking;

const RankingStyles = StyleSheet.create({
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
  bgImg: {
    width: '100%',
    height: '100%',    
  },
  pageNav: {
    borderWidth: 0.5,
    borderColor: '#aaa'
  },
  pageNavText: {
    marginVertical: 8,
    marginHorizontal: 15
  },
  iconBg: {
    width: 14,
    height: 14,
    position: 'absolute',
    top: '30%',
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 9,
  }
})
