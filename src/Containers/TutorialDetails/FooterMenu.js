import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert
} from 'react-native';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';

const FooterMenu = ({index}) => {

  const homeBtnClick = () => {
    Actions.home();
  }

  const pageMoveClick = (id) => {
    Actions.tutorialDetails({param: id});
  }

  const goTutorial = () => {
    Actions.tutorial();
  }

  return (
    <View style={FooterMenuStyles.bg}>
      <TouchableOpacity 
        style={[FooterMenuStyles.eachArea, (index % 6) === 0 ? FooterMenuStyles.width3 : {width: '20%'}]}
        onPress={() => {homeBtnClick()}}
      >
        <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
          <Text style={FooterMenuStyles.text}>HOME</Text>
        </LinearGradient>
      </TouchableOpacity>

      {
        index > 0 && <TouchableOpacity 
          style={[FooterMenuStyles.eachArea, index === 6 ? FooterMenuStyles.width3 : {width: '27%'}]}
          onPress={() => {pageMoveClick(index - 1)}}
        >
          <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
            <Text style={FooterMenuStyles.text}>戻る</Text>
          </LinearGradient>
        </TouchableOpacity>
      }
      <TouchableOpacity 
        style={[FooterMenuStyles.eachArea, (index % 6) === 0 ?  FooterMenuStyles.width3 : {width: '27%'}]}
        onPress={() => {goTutorial()}}
      >
        <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
          <Text style={FooterMenuStyles.text}>一覧へ</Text>
        </LinearGradient>
      </TouchableOpacity>
      {
        index < 6 && <TouchableOpacity 
          style={[FooterMenuStyles.eachArea, index === 0 ? FooterMenuStyles.width3 : {width: '27%'}]}
          onPress={() => {pageMoveClick(index + 1)}}
        >
          <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
            <Text style={FooterMenuStyles.text}>進む</Text>
          </LinearGradient>
        </TouchableOpacity>
      }
    </View>
  )
}

export default FooterMenu;

const FooterMenuStyles = StyleSheet.create({
  bg: {
    height: 50,
    zIndex: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#67b500',
    borderTopColor: '#388e3c',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  eachArea: {
    borderRightColor: '#388e3c',
    borderRightWidth: 1,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGradient: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    marginVertical: '2%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  width3: {
    width: '33.333%'
  },
  width4: {
    width: '27%'
  },
  text: {
    color: '#630',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
