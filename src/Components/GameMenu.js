import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

const GameMenu = ({handleClickMenu}) => {
  // clearInterval(window.interval);
  const goHome = () => {
    handleClickMenu();
    Actions.home();
  };
  const goMyFarm = () => {
    handleClickMenu();
    Actions.myfarm();
  };

  return (
    <View style={GameMenuStyles.bg}>
      <TouchableOpacity style={GameMenuStyles.btn} onPress={goHome}>
        <Text style={GameMenuStyles.text}>Home</Text>
        <View style={GameMenuStyles.iconBg}>
          <Image
            style={GameMenuStyles.iconHomeImg}
            source={require('../assets/images/icons-18-white.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={GameMenuStyles.btn} onPress={goMyFarm}>
        <Text style={GameMenuStyles.text}>MY FARM</Text>
        <View style={GameMenuStyles.iconBg}>
          <Image
            style={GameMenuStyles.iconFarmImg}
            source={require('../assets/images/icons-18-white.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GameMenu;

const GameMenuStyles = StyleSheet.create({
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
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#222',
    width: '50%',
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
})