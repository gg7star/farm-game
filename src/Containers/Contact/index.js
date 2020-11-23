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
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

const Contact = () => {
  return (
    <SafeAreaView style={ContactStyles.safeArea}>
      <ImageBackground
        style={ContactStyles.bgImg}
        resizeMode="repeat"
        source={require('../../assets/images/wall_2.png')}>
        <ScrollView>
          <HeaderBrownBar />
          <Header title="ポイント購入" />

          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={ContactStyles.content}>
            <Text style={ContactStyles.contentText}>
              ゲームに関してのお問い合わせは、メールにてお願い致します。
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={ContactStyles.subTitle}>
            <Text style={ContactStyles.subTitleText}>メールアドレス</Text>
          </LinearGradient>

          <TouchableOpacity>
            <LinearGradient
              colors={['#ffffff', '#f1f1f1']}
              style={ContactStyles.nextBg}>
              <Text style={ContactStyles.nextText}>info@ld-inc.jp</Text>
              <View style={ContactStyles.iconBg}>
                <Image
                  style={ContactStyles.iconNextImg}
                  source={require('../../assets/images/icons-36-white.png')}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <LinearGradient
            colors={['#f9f9f9', '#eeeeee']}
            style={ContactStyles.bottomContent}>
            <Text style={ContactStyles.contentText}>
              ※PCからのﾒｰﾙを受信できるようﾄﾞﾒｲﾝ制限解除をお願いいたします。制限解除頂けない場合、ご連絡が遅れる場合がありますのでご了承ください。
              {'\n'}
              ※尚、制限解除された方は、初回のﾒｰﾙに「制限解除済み」と記載ください。
            </Text>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Contact;

const ContactStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  nextBg: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#aaa',
    borderWidth: 1,
  },
  nextText: {
    color: '#2f3e46',
    fontWeight: 'bold',
    width: '95%',
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
