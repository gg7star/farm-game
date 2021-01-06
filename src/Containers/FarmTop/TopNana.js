import React, { useState } from 'react';
import moment from 'moment';
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

const TopNana = ({item, data, handleClick}) => {
  console.log(17, data);
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={TopNanaStyles.bg}>
        <View style={TopNanaStyles.dialog}>
          {item === 'nana' ? (
            <Text style={TopNanaStyles.dialogText}>{data}</Text>
          ) : (
            <View style={{margin: 8}}>
              {data.map((each, i) => (
                <View key={i} style={TopNanaStyles.weather}>
                  <Text style={TopNanaStyles.weatherText}>
                    {moment(each.date).format('M')}月
                    {moment(each.date).format('D')}日
                    {/* {moment(each.date).add(i, 'days').format('M')}月
                    {moment(each.date).add(i, 'days').format('D')}日 */}
                  </Text>
                  <AutoHeightImage width={24} source={{uri: each.image}} />
                </View>
              ))}
            </View>
          )}
        </View>
        <AutoHeightImage
          width={144}
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/nana.png',
          }}
          style={TopNanaStyles.nanaImg}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopNana;

const TopNanaStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    // backgroundColor: 'rgba(0, 10, 0, 0.5)',
    zIndex: 30,
    position: 'absolute',
    top: 40,
  },
  dialog: {
    top: 80,
    left: '10%',
    width: '80%',
    minHeight: 200,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#9c0',
    opacity: 0.9,
  },
  dialogText: {
    color: '#fff',
    margin: 8,
    width: '70%',
    fontWeight: 'bold',
  },
  nanaImg: {
    position: 'absolute',
    right: -30,
    top: responsiveWidth(100) - (355 * 144) / 175,
  },
  weather: {
    margin: 4,
    flexDirection: 'row',
  },
  weatherText: {
    color: '#fff',
    fontWeight: 'bold',
    width: '35%',
  },
});
