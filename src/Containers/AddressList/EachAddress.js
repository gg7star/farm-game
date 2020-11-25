import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

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
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const EachAddress = ({item}) => {

  const goAddressInput = () => {
    // Actions.addressInput();
  }

  return (
    <TouchableOpacity onPress={goAddressInput}>
      <LinearGradient
        colors={['#ffffff', '#f1f1f1']}
        style={EachAddressStyles.bg}>
        <Text style={{fontSize: 12, width: '95%'}}>{item.name}</Text>
        <View style={EachAddressStyles.iconBg}>
          <Image
            style={EachAddressStyles.iconNextImg}
            source={require('../../assets/images/icons-36-white.png')}
          />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default EachAddress;

const EachAddressStyles = StyleSheet.create({
  bg: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
  },
});
