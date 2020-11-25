import React, { useState } from 'react';
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
import Weather from './Weather';
import Nutrition from './Nutrition';
import Moisture from './Moisture';
import Calendar from './Calendar';
import GameEngine from './GameEngine';
import TopNana from './TopNana';
import TopHatakeMenu from './TopHatakeMenu';

const gameBgData = {
  sky: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/sky/A04.gif',
  ground: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/ground/1110.gif',
  house: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/house/A11.gif',
  river: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/river/1110.gif',
  tree: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/tree/1110.gif',
  hatake: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/bg/hatake/1101.gif',
}

const nanaSpot = 'スライムさん、こんにちは♪菜々と一緒にキャベツを作って餃子をゲットしよう♪\nまずはハウスの骨組みを建てよう！';

const weatherList = [
  {
    date: '1月3日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png'
  },
  {
    date: '1月4日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather2.png'
  },
  {
    date: '1月5日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather5.png'
  },
  {
    date: '1月6日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png'
  },
  {
    date: '1月7日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png'
  },
  {
    date: '1月8日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png'
  },
  {
    date: '1月9日',
    image: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png'
  }
]

const FarmTop = ({farmInfo}) => {

  const [topNana, setTopNana] = useState(undefined);
  const [curNanaTag, setCurNanaTag] = useState(undefined);
  const [topHatakeMenu, setTopHatakeMenu] = useState(false);

  const closeTopNana = () => {
    setCurNanaTag(undefined);
  }

  const showNanaSpot = () => {
    setCurNanaTag('nana');
    setTopNana(nanaSpot);
  }

  const showWeather = () => {
    setCurNanaTag('weather');
    setTopNana(weatherList);
  };

  const showTopHatakeMenu = () => {
    setTopHatakeMenu(true);
  };

  const closeTopHatakeMenu = () => {
    setTopHatakeMenu(false);
  };

  return (
    <ImageBackground
      style={FarmTopStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView style={{flexDirection: 'column'}}>
        <View style={FarmTopStyles.header}>
          <Text style={FarmTopStyles.headerText}>{farmInfo.name}</Text>
        </View>

        <GameBgImg item={gameBgData} />
        <Weather clickWeather={showWeather} />
        <Nutrition />
        <Moisture />
        <Calendar />
        <GameEngine
          clickTopNana={showNanaSpot}
          clickTopHatakeMenu={showTopHatakeMenu}
        />

        {
          curNanaTag && <TopNana item={curNanaTag} data={topNana} handleClick={closeTopNana} />
        }

        {
          topHatakeMenu && <TopHatakeMenu handleClick={closeTopHatakeMenu} />
        }

        <GameProgressBar />
        <GameMenu />
                  
      </ScrollView>
    </ImageBackground>
  
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
