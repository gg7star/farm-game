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

  const tutorialClick = (id) => {
    Actions.tutorialDetails({param: id});
  }

  return (
    <View style={FooterMenuStyles.bg}>
      <TouchableOpacity style={[FooterMenuStyles.eachArea, FooterMenuStyles.width3]}>
        <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
          <Text style={FooterMenuStyles.text}>HOME</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[FooterMenuStyles.eachArea, FooterMenuStyles.width3]}>
        <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
          <Text style={FooterMenuStyles.text}>HOME</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[FooterMenuStyles.eachArea, FooterMenuStyles.width3]}>
        <LinearGradient colors={['#ffa84c', '#ff7b0d']} style={[FooterMenuStyles.btnGradient]}>
          <Text style={FooterMenuStyles.text}>HOME</Text>
        </LinearGradient>
      </TouchableOpacity>
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
  }
})
