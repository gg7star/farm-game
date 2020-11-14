import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import GameBgImg from '../../Components/GameBgImg';

const gameBgData = {
  sky: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/sky/A04.gif',
  
}
const FarmName = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={FarmNameStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <View
              style={FarmNameStyles.header}
            >
              <View
                style={FarmNameStyles.headerText}
              >
                <Text
                  style={FarmNameStyles.headerContent}
                >
                  無料ゲーム：博多ニワカそうすを栽培する
                </Text>                
              </View>
            </View>

            <GameBgImg item={gameBgData} />
                      
          </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default FarmName;

const FarmNameStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopColor: '#8bc34a',
    borderBottomColor: '#8bc34a',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    zIndex: 49,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    width: '80%',
    marginVertical: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContent: {
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: '1%',
    lineHeight: 28
  }
})
