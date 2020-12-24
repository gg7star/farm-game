import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const Weather = ({clickWeather, curWeather}) => {
  return (
    <TouchableWithoutFeedback onPress={clickWeather}>
      <View style={WeatherStyles.bg}>
        {curWeather ? (
          <AutoHeightImage
            width={responsiveWidth(16)}
            source={{
              uri: curWeather[0].image,
            }}
          />
        ) : (
          <AutoHeightImage
            width={responsiveWidth(16)}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather.png',
            }}
          />
        )}
        {/* <AutoHeightImage
          width={responsiveWidth(16)}
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather.png',
          }}
        /> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Weather;

const WeatherStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    position: 'absolute',
    left: responsiveWidth(2),
    top: 50,
    zIndex: 2,
    overflow: 'hidden',
  },
});
