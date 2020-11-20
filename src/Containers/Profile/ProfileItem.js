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

const ProfileItem = ({item}) => {

  const goNext = () => {
    Actions[item.link]();
  }

  return (
    <TouchableOpacity onPress={goNext}>
      <ImageBackground
        style={ProfileItemStyles.contentBg}
        resizeMode="repeat"
        source={require('../../assets/images/listbg02.gif')}
      >
        <Text style={ProfileItemStyles.contentText}>
          {item.name}
        </Text>
        <View style={ProfileItemStyles.iconBg}>
          <Image
            style={ProfileItemStyles.iconNextImg}
            source={require('../../assets/images/icons-36-white.png')}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
    
  )
}

export default ProfileItem;

const ProfileItemStyles = StyleSheet.create({    
  contentBg: {
    width: '100%',
    flexDirection: 'row'
  },
  contentText: {
    margin: 12,
    color: '#2f3e46',
    fontWeight: 'bold'
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    position: 'absolute',
    right: 10,
    top: '25%',
    borderRadius: 9,
    overflow: 'hidden'
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108
  }
})
