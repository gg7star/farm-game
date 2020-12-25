import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const rate = responsiveWidth(100) / 400;

const Calendar = ({item}) => {
  return (
    <View style={CalendarStyles.bg}>
      <AutoHeightImage
        width={responsiveWidth(20)}
        source={{
          uri:
            'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/calendar_base.png',
        }}
      />
      <Text style={CalendarStyles.monthText}>December</Text>
      <Text style={CalendarStyles.dayText}>12</Text>
    </View>
  );
};

export default Calendar;

const CalendarStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    position: 'absolute',
    left: responsiveWidth(78),
    top: 50,
    zIndex: 1,
    overflow: 'hidden',
  },
  monthText: {
    color: '#fff',
    fontSize: 10 * rate,
    position: 'absolute',
    top: responsiveWidth(4),
    fontWeight: 'bold',
    width: 60,
    textAlign: 'center',
  },
  dayText: {
    fontSize: 40 * rate,
    position: 'absolute',
    top: responsiveWidth(7),
    width: 80,
    textAlign: 'center',
  },
});
