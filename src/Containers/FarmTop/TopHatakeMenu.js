import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const todoIconList = [
  {
    id: 'topTodoIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0100.gif',
  },
  {
    id: 'topMoistureIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0300.gif',
  },
  {
    id: 'topNutritionIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0400.gif',
  },
  {
    id: 'topWeedIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0500.gif',
  },
  {
    id: 'topChemiIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0200.gif',
  },
  {
    id: 'topSpecialIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0600.gif',
  },
  {
    id: 'topPiIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0700.gif',
  },
  {
    id: 'topCloseIcon',
    icon:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/ic0800.gif',
  },
];

const TopHatakeMenu = ({handleClick, handleClickItem, farmInfo}) => {
  const handleClickIcon = (index) => {
    // handleClickItem(index);
    Actions.admob({
      nextPage: 'farmTop',
      state: {farmInfo: farmInfo, currentSelectedItem: 1},
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={TopHatakeMenuStyles.bg}>
        <View style={TopHatakeMenuStyles.content}>
          <AutoHeightImage
            width={responsiveWidth(50)}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/crops/1608/photo/0.gif',
            }}
            style={{left: '5%'}}
          />
          <View style={{marginTop: '3%'}}>
            <View style={{flexDirection: 'row'}}>
              {todoIconList.map(
                (item, i) =>
                  i < 4 && (
                    <TouchableOpacity key={`${i}`} onPress={() => handleClickIcon(i)}>
                      <AutoHeightImage
                        key={`auto-height-image-1-${i}`}
                        width={responsiveWidth(15)}
                        source={{uri: item.icon}}
                      />
                    </TouchableOpacity>
                  ),
              )}
            </View>
            <View style={{flexDirection: 'row'}}>
              {todoIconList.map(
                (item, i) =>
                  i >= 4 &&
                  i < 7 && (
                    <TouchableOpacity  key={`${i}`} onPress={() => handleClickIcon(i)}>
                      <AutoHeightImage
                        key={`auto-height-image-2-${i}`}
                        width={responsiveWidth(15)}
                        source={{uri: item.icon}}
                      />
                    </TouchableOpacity>
                  ),
              )}
            </View>
            <AutoHeightImage
              key={7}
              width={responsiveWidth(15)}
              source={{uri: todoIconList[7].icon}}
              style={{left: responsiveWidth(60)}}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopHatakeMenu;

const TopHatakeMenuStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    zIndex: 30,
    position: 'absolute',
    top: 40,
  },
  content: {
    position: 'absolute',
    top: '25%',
    left: '22%',
  },
});
