import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

const SubMenu = ({item}) => {

  const goNext = () => {
    Actions[item.link]();
  }
  return (
    <TouchableOpacity style={SubMenuStyles.bg} onPress={goNext}>
      <Text style={SubMenuStyles.text}>{item.name}</Text>
      <Text style={SubMenuStyles.mArrow}>▲</Text>
    </TouchableOpacity>
  )
}

export default SubMenu;

const SubMenuStyles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    width: '50%',
    borderWidth: 1,
    borderColor: '#67b500',
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    paddingLeft: 8,
    fontSize: 12,
    paddingVertical: 10
  },
  mArrow: {
    right: 4,
    top: 10,
    position: 'absolute',
    transform: [{rotate: '90deg'}],
    color: '#67b500'
  }
})