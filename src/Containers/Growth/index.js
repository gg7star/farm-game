import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import Dash from 'react-native-dash';
import { Actions } from 'react-native-router-flux';

import Menu from '../../Components/Menu';
import GrowthItem from './GrowthItem';

const growthList = [
  {
    gameName: '宝箱(11/12)(731)',
    farmName: '宝箱(11/12)農場',
    trainingPeriod: '2016/12/27～2016/12/27',
    currentState: 'ポイント交換済み',
  },
  {
    gameName: '宝箱(11/12)(731)',
    farmName: '宝箱(11/12)農場',
    trainingPeriod: '2016/12/27～2016/12/27',
    currentState: 'ポイント交換済み',
  },
  {
    gameName: '宝箱(11/12)(731)',
    farmName: '宝箱(11/12)農場',
    trainingPeriod: '2016/12/27～2016/12/27',
    currentState: 'ポイント交換済み',
  },
  {
    gameName: '宝箱(11/12)(731)',
    farmName: '宝箱(11/12)農場',
    trainingPeriod: '2016/12/27～2016/12/27',
    currentState: 'ポイント交換済み',
  },
];

const Growth = (props) => {
  return (
    <ImageBackground
      style={GrowthStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <ScrollView style={{flexDirection: 'column'}}>
        <View style={GrowthStyles.header}>
          <Text style={GrowthStyles.headerText}>栽培履歴</Text>
        </View>
        <View style={GrowthStyles.content}>
          {growthList.map((item, i) => (
            <GrowthItem key={i} item={item} />
          ))}
          <View style={GrowthStyles.pageNum}>
            <Text>145件中 1～10件表示中</Text>
          </View>
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
          <View style={GrowthStyles.pagenation}>
            <TouchableOpacity style={GrowthStyles.btn}>
              <Text style={GrowthStyles.headerText}>戻る</Text>
            </TouchableOpacity>
            <Text>1/15</Text>
            <TouchableOpacity style={GrowthStyles.btn}>
              <Text style={GrowthStyles.headerText}>次へ</Text>
            </TouchableOpacity>
          </View>
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
        </View>
      </ScrollView>
      <Menu item="myfarm" />
    </ImageBackground>
  );
};

export default Growth;

const GrowthStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    position: 'relative',
    zIndex: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAccount: {
    backgroundColor: '#dcedc8',
    position: 'absolute',
    right: 0,
    borderRadius: 4,
    height: 32,
    margin: 2,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 8,
    borderRadius: 8,
  },
  pageNum: {
    alignItems: 'center',
  },
  pagenation: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  btn: {
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});
