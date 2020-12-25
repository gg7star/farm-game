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
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import TopActionItem from './TopActionItem';

// const itemList = [
//   {
//     img:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/images/icons/item/1.gif',
//     content: 'じょうろ(3)',
//   },
// ];

const TopActionMenu = ({
  handleClick,
  itemList,
  handleCloseTimer,
  handleClickItem,
  farmInfo,
  handlieClickAction,
}) => {
  const handleClickIcon = (index) => {
    handleClickItem(index);
    handleCloseTimer();
    // Actions.admob({
    //   nextPage: 'farmTop',
    //   state: {farmInfo: farmInfo, currentSelectedItem: 1},
    // });
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={TopActionMenuStyles.bg}>
        <View style={TopActionMenuStyles.content}>
          {itemList.map((item, i) => (
            <TopActionItem
              item={item}
              handlieClickAction={handlieClickAction}
              key={i}
              top={i === 0}
              bottom={i + 1 === itemList.length}
            />
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopActionMenu;

const TopActionMenuStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    zIndex: 30,
    position: 'absolute',
    top: 40,
  },
  content: {
    position: 'absolute',
    top: '20%',
    left: '8%',
    width: '84%',
  },
  title: {
    backgroundColor: '#6c0',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: '#c6c6c6',
    borderWidth: 1,
  },
});
