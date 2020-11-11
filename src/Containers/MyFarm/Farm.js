import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Farm = ({item}) => {
  return (
    <TouchableOpacity style={FarmStyles.bg}>
      <View>
        <ImageBackground source={{uri: item.farmImg}} style={{width: '100%', aspectRatio: 1}}>
          <View style={FarmStyles.nameArea}>
            <Text style={FarmStyles.name}>{item.name}</Text>
          </View>
          <Image source={{uri: item.cropImg}} style={FarmStyles.crop} />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

export default Farm;

const FarmStyles = StyleSheet.create({
  bg: {
    width: '32%',
    margin: '0.5%',
    borderRadius: 4,
    borderColor: '#fff',
    borderWidth: 2
  },
  nameArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  name: {
    color: '#fff',
    fontSize: 10,
    padding: '1%'
  },
  crop: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    zIndex: 2,
    bottom: 2,
    right: 2,
  }
})