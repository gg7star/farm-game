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


const HomeButton = ({item}) => {
  return (
    <TouchableOpacity style={[ButtonStyles.btn, {backgroundColor: item.bgColor}]}>
      {
        item.text.map((each) => (
          <Text style={ButtonStyles.text}>{each}</Text>
        ))
      }
      
    </TouchableOpacity>
  )
}

export default HomeButton;

const ButtonStyles = StyleSheet.create({
  btn: {
    width: '30%',
    height: 36,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: '2%',
    marginRight: '1%',
    marginBottom: '3%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})