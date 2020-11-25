import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

const Menu3 = ({item}) => {
  const goHome = () => {
    Actions.home();
  };
  const goMyFarm = () => {
    Actions.myfarm();
  };
  const goMyMenu = () => {
    Actions.myMenu();
  };

  return (
    <View style={Menu3Styles.bg}>
      <TouchableOpacity style={Menu3Styles.btn} onPress={goHome}>
        <Text style={Menu3Styles.text}>Home</Text>
        <View style={Menu3Styles.iconBg}>
          <Image
            style={Menu3Styles.iconHomeImg}
            source={require('../assets/images/icons-18-white.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Menu3Styles.btn} onPress={goMyFarm}>
        <Text style={Menu3Styles.text}>MY FARM</Text>
        <View style={Menu3Styles.iconBg}>
          <Image
            style={Menu3Styles.iconFarmImg}
            source={require('../assets/images/icons-18-white.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Menu3Styles.btn} onPress={goMyMenu}>
        <Text style={Menu3Styles.text}>MY MENU</Text>
        <View style={Menu3Styles.iconBg}>
          <Image
            style={Menu3Styles.iconMyMenuImg}
            source={require('../assets/images/icons-18-white.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu3;

const Menu3Styles = StyleSheet.create({
  bg: {
    zIndex: 100,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderColor: '#c6c6c6',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  btn: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#222',
    width: '33.33%',
    alignItems: 'center',
    backgroundColor: '#390',
  },
  text: {
    color: '#fff',
    marginTop: 27,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    top: 4,
    position: 'absolute',
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconHomeImg: {
    width: 776,
    height: 18,
    marginLeft: -575.5,
  },
  iconFarmImg: {
    width: 776,
    height: 18,
    marginLeft: -432,
  },
  iconMyMenuImg: {
    width: 776,
    height: 18,
    marginLeft: -540,
  },
});
