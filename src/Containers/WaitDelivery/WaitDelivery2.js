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

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';

import WaitDelivery2Item from './WaitDelivery2Item';

const deliveryList = [
  {
    delivery: '愛情運up!ﾗﾌﾞじゃが 1kgお届け！',
    procedureDate: '2012/04/04 13:44:20',
    destination: 'はだ あきら様宛'
  },
  {
    delivery: '愛情運up!ﾗﾌﾞじゃが 1kgお届け！',
    procedureDate: '2012/04/04 13:44:20',
    destination: 'はだ あきら様宛'
  }
]

const WaitDelivery2 = () => {

  const goWaitDelivery = () => {
    Actions.waitDelivery();
  }

  return (
    <ImageBackground
      style={WaitDelivery2Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView style={{flexDirection: 'column'}}>
        <Header title='送付手続き' />
        
        <View style={[WaitDelivery2Styles.content, WaitDelivery2Styles.shadow]}>
          <View style={{margin: 8}}>
            <View style={{alignItems: 'flex-start'}}>
              <TouchableOpacity  style={WaitDelivery2Styles.waitDelivery1} onPress={goWaitDelivery}>
                <Text style={WaitDelivery2Styles.waitDeliveryText}>
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
            style={WaitDelivery2Styles.prizeText}
          >
            <Text style={WaitDelivery2Styles.subTitle}>
              手続き待ちの作物一覧
            </Text>
          </View>
          <View style={{margin: 8}}>
            {
              deliveryList.map((item, i) => (
                <WaitDelivery2Item key={i} item={item} />
              ))
            }
          </View>
        </View>
      </ScrollView>
      <Menu />
    </ImageBackground>

  )
}

export default WaitDelivery2;

const WaitDelivery2Styles = StyleSheet.create({
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
  waitDelivery1: {
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    borderRadius: 4,   
    marginVertical: 4, 
  },
  waitDeliveryText: {
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
