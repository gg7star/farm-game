import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,

} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Loader = () => {
  return (
    <View
    style={LoaderStyles.bg}
    >
      <Image 
      source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/loading.gif'}} 
      style={LoaderStyles.image} />
      <Text style={LoaderStyles.text}>よみこみ中だよ...</Text>
    </View>
  )
}

export default Loader;

const LoaderStyles = StyleSheet.create({
  bg: {
    backgroundColor: '#4eb823',
    zIndex: 1,
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    zIndex: 2,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  }
})