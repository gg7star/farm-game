import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';

const WaitDelivery = () => {

  const goWaitDelivery2 = () => {
    Actions.waitDelivery2()
  }

  return (
    <ImageBackground
      style={WaitDeliveryStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView>
        <Header title='送付手続き' />
        
        <View style={[WaitDeliveryStyles.content, WaitDeliveryStyles.shadow]}>
          <View style={{margin: 8}}>
            <View style={{alignItems: 'flex-start'}}>
              <TouchableOpacity  style={WaitDeliveryStyles.waitDelivery2} onPress={goWaitDelivery2}>
                <Text style={WaitDeliveryStyles.waitDelivery2Text}>
                  手続き済みの作物 ▶
                </Text>
              </TouchableOpacity>
            </View>
            <Dash 
              style={{height: 0.3, marginVertical: 4}}
              dashColor='rgb(142, 142, 142)'
              dashThickness={1} 
            />
          </View>
          <View 
            style={WaitDeliveryStyles.prizeText}
          >
            <Text style={WaitDeliveryStyles.subTitle}>
              手続き待ちの作物一覧
            </Text>
          </View>
          <View style={{margin: 8}}>
            <Text>[未手続き作物]　該当無し</Text>
            <Dash
              style={{height: 0.3, marginBottom: 16}}
              dashColor="rgb(142, 142, 142)"
              dashThickness={1}
            />
          </View>
        </View>
      </ScrollView>
      <Menu />
    </ImageBackground>
  );
};

export default WaitDelivery;

const WaitDeliveryStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  content: {
    backgroundColor: '#fff',
    marginVertical: 16,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  shadow: {
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 0,
      width: 5,
    }
  },
  waitDelivery2: {
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    borderRadius: 4,   
    marginVertical: 4, 
  },
  waitDelivery2Text: {
    color: '#fff',
    lineHeight: 30,
    fontWeight: 'bold'
  },
  prizeText: {
    backgroundColor: '#67b500',    
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid',    
    marginTop: 4,
  },
  subTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
})
