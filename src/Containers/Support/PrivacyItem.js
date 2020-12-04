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
import LinearGradient from 'react-native-linear-gradient';

const PrivacyItem = ({item}) => {
  return (
    <View>
      <LinearGradient
        colors={['#6facd5', '#497bae']}
        style={PrivacyItemStyles.subTitle}>
        <Text style={PrivacyItemStyles.subTitleText}>{item.title}</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={PrivacyItemStyles.bottomContent}>
        <Text style={PrivacyItemStyles.contentText}>{item.content}</Text>
      </LinearGradient>
    </View>
  );
};

export default PrivacyItem;

const PrivacyItemStyles = StyleSheet.create({
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#456f9a',
    borderWidth: 1,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333333',
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  bottomContent: {
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 15,
  },
});
