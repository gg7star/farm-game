import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

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
};
const bgData = {
  sky: require('../../assets/images/bg_game/sky/A04.gif'),
  house: require('../../assets/images/bg_game/house/A11.gif'),
  ground: require('../../assets/images/bg_game/ground/1101.gif'),
  river: require('../../assets/images/bg_game/river/1110.gif'),
  tree: require('../../assets/images/bg_game/tree/1110.gif'),
  hatake: require('../../assets/images/bg_game/hatake/1110.gif'),
};

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
  };

  const showNanaSpot = () => {
    setCurNanaTag('nana');
    setTopNana(nanaSpot);
  };

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
      <View style={FarmTopStyles.header}>
        <Text style={FarmTopStyles.headerText}>{farmInfo.name}</Text>
      </View>

      {/* <GameBgImg /> */}
      <View style={{height: 400}}>
        <Image source={bgData.sky} style={GameBgImgStyles.skyImg} />
        <Image source={bgData.hatake} style={GameBgImgStyles.screenImg} />
        <Image source={bgData.ground} style={GameBgImgStyles.screenImg} />
        <TouchableWithoutFeedback>
          <AutoHeightImage
            width={responsiveWidth(41)}
            source={bgData.house}
            style={GameBgImgStyles.houseImg}
          />
        </TouchableWithoutFeedback>
        <Image source={bgData.river} style={GameBgImgStyles.screenImg} />
        <Image source={bgData.tree} style={GameBgImgStyles.screenImg} />
      </View>
      <Weather clickWeather={showWeather} />
      <Nutrition />
      <Moisture />
      <Calendar />
      <GameEngine
        clickTopNana={showNanaSpot}
        clickTopHatakeMenu={showTopHatakeMenu}
      />

      {curNanaTag && (
        <TopNana item={curNanaTag} data={topNana} handleClick={closeTopNana} />
      )}

      {topHatakeMenu && <TopHatakeMenu handleClick={closeTopHatakeMenu} farmInfo={farmInfo} />}

      <GameProgressBar />
      <GameMenu />
    </ImageBackground>
  );
};

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
  },
});

const GameBgImgStyles = StyleSheet.create({
  skyImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: responsiveWidth(100),
    height: 150,
  },
  screenImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: responsiveWidth(100),
    height: 400,
  },
  houseImg: {
    position: 'absolute',
    top: 70,
    left: '48%',
  },
});
