import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const HeaderBrownBar = () => {
  const goHome = () => {
    Actions.home();
  };

  return (
    <ImageBackground
      style={HeaderBrownBarStyles.headerLogin}
      source={require('../assets/images/category_bg4.gif')}>
      <TouchableOpacity onPress={() => goHome()}>
        <Image
          style={HeaderBrownBarStyles.logo}
          resizeMode="cover"
          source={require('../assets/images/logo2.png')}
        />
      </TouchableOpacity>
      <Text style={HeaderBrownBarStyles.logoText}>
        ～手のひらの小さな農園～
      </Text>
      <TouchableOpacity style={HeaderBrownBarStyles.logoTouch}>
        <Image
          source={require('../assets/images/footer_l.png')}
          style={HeaderBrownBarStyles.loginBtn}
        />
        <Text style={HeaderBrownBarStyles.logoutText}>ログアウト</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HeaderBrownBar;

const HeaderBrownBarStyles = StyleSheet.create({
  headerLogin: {
    height: 47,
    margin: 0,
    flexDirection: 'row',
  },
  logo: {
    width: 95,
    height: 40,
    marginTop: 2,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  logoText: {
    color: '#ccff33',
    fontSize: 12,
    display: 'flex',
    marginTop: 30,
    marginLeft: -10,
    fontWeight: 'bold',
  },
  logoTouch: {
    bottom: 2,
    right: 0,
    position: 'absolute',
  },
  loginBtn: {
    width: 38,
    height: 30,
  },
  logoutText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
