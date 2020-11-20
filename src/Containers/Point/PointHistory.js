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

import HistoryItem from './HistoryItem';

const historyList = [
  {
    point: '250っぴ（作物収穫）',
    date: '2020-10-28 19:07:40.573'
  }
]
const PointHistory = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={PointHistoryStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/01home/backimg-bg.png'}}>
        <ScrollView style={{flexDirection: 'column'}}>
          <HeaderBrownBar /> 
          <Header title='ポイント履歴' />

          <AutoHeightImage 
            width={responsiveWidth(100)} 
            source={require('../../assets/images/listtop.png')} 
            style={{marginTop: 15}}
          />

          <View style={PointHistoryStyles.content}>
            <LinearGradient colors={['#fffadf', '#fff3a5']}>
              <Text style={PointHistoryStyles.dateText}>
                ※直近の三ヶ月分表示されます。
              </Text>
            </LinearGradient>  
            <LinearGradient colors={['#6facd5', '#497bae']}>
              <Text style={[PointHistoryStyles.dateText, {color: '#fff'}]}>
                スライムさんのポイント履歴
              </Text>
            </LinearGradient>
            {
              historyList.map((item, i) => (
                <HistoryItem key={i} item={item} />
              ))
            }

          </View>
          
        </ScrollView>   
        
      </ImageBackground>
    </SafeAreaView>
  )
}

export default PointHistory;

const PointHistoryStyles = StyleSheet.create({  
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
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#222222'
  }
})
