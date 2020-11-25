import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import MyMenuBtn from './MyMenuBtn';

const menuList = [
  {
    imgLink: require('../../assets/images/mymenu/btnA_01.png'),
    goLink: 'profile',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_03.png'),
    goLink: 'news',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_04.png'),
    goLink: 'voice',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_05.png'),
    goLink: 'waitDelivery',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_06.png'),
    goLink: 'addressList',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_07.png'),
    goLink: 'growthList',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_08.png'),
    goLink: 'ranking',
  },
  {
    imgLink: require('../../assets/images/mymenu/btnA_09.png'),
    goLink: 'point',
  },
];
const MyMenu = () => {
  const goHome = () => {
    Actions.home();
  };
  return (
    <ImageBackground
      style={MyMenuStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/category_bg.gif')}>
      <ImageBackground
        style={MyMenuStyles.headerLogin}
        source={require('../../assets/images/category_bg4.gif')}>
        <TouchableOpacity onPress={goHome}>
          <Image
            style={MyMenuStyles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
      <Dash dashColor="#ffff99" dashThickness={1} dashGap={0} />
      <ScrollView>
        <View style={MyMenuStyles.content}>
          <View style={MyMenuStyles.contentHeaderBg}>
            <ImageBackground
              style={MyMenuStyles.contentHeader}
              source={require('../../assets/images/category_bg3.gif')}>
              <Text style={MyMenuStyles.contentHeaderText}>MY MENU</Text>
            </ImageBackground>
          </View>
          <ImageBackground
            style={MyMenuStyles.contentBg}
            resizeMode="repeat"
            source={require('../../assets/images/category_bg2.gif')}>
            {menuList.map((item, i) => (
              <MyMenuBtn key={i} item={item} />
            ))}
          </ImageBackground>
        </View>
      </ScrollView>
    </ImageBackground>
  
  );
};

export default MyMenu;

const MyMenuStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  headerLogin: {
    height: 44,
    zIndex: 1000,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
  logo: {
    width: 84,
    height: 42,
  },
  content: {
    marginHorizontal: '2%',
  },
  contentHeader: {
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentHeaderBg: {
    borderColor: '#630',
    borderWidth: 1,
  },
  contentBg: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
