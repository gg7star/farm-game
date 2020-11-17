import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import GameBgImg from '../../Components/GameBgImg';
import GameMenu from '../../Components/GameMenu';

import GameProgressBar from './GameProgressBar';

const gameBgData = {
  sky: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/sky/A04.gif',
  ground: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/ground/1110.gif',
  house: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/house/A11.gif',
  river: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/river/1110.gif',
  tree: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/tree/1110.gif',
  hatake: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/hatake/1101.gif',
}

const FarmTop = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={FarmTopStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <View
              style={FarmTopStyles.header}
            >
              <Text
                style={FarmTopStyles.headerText}
              >
                無料ゲーム：博多ニワカそうすを栽培する
              </Text>
            </View>

            <GameBgImg item={gameBgData} />
            <GameProgressBar />
            <GameMenu />
                      
          </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default FarmTop;

const FarmTopStyles = StyleSheet.create({
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
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: '1%',
    lineHeight: 28,
    color: '#fff',
    fontWeight: 'bold'
  }
})
