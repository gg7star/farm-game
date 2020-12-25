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

import TopItem from './TopItem';

const TopItemMenu = ({handleClick, itemList, handleClickItem, farmInfo}) => {
  console.log(18, itemList);
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={TopItemMenuStyles.bg}>
        <View style={TopItemMenuStyles.content}>
          <ScrollView>
            <View style={TopItemMenuStyles.title}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                アイテムを選んでください。
              </Text>
            </View>
            {itemList.map(
              (item, i) =>
                i < 15 &&
                (Boolean(item.item_description) || Boolean(item.note)) && (
                  <TopItem
                    item={item}
                    key={i}
                    // bottom={i + 1 === itemList.length}
                    bottom={i + 1 === 15 || i + 1 === itemList.length}
                    handleClick={handleClickItem}
                  />
                ),
            )}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopItemMenu;

const TopItemMenuStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    zIndex: 101,
    position: 'absolute',
    top: 40,
  },
  content: {
    position: 'absolute',
    top: '18%',
    left: '8%',
    width: '84%',
    height: responsiveWidth(80),
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
