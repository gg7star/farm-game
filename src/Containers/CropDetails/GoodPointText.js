import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import { responsiveWidth } from 'react-native-responsive-dimensions';
import Dash from 'react-native-dash';

import ItemTitle from './ItemTitle.js';

const GoodPointText = ({item, titleImg}) => {
  return (
    <View style={GoodPointTextStyles.corner}>
      <ItemTitle item="ここがすごい！" titleImg={titleImg} />
      {item.map((each, i) => (
        <View key={i}>
          {i > 0 && (
            <Dash style={{height: 0.3, marginTop: 8}} dashThickness={0.5} />
          )}
          <View style={{alignItems: 'flex-start'}}>
            <View style={GoodPointTextStyles.subTitleBg}>
              <Text style={GoodPointTextStyles.subTitle}>
                ◆ その
                <View style={GoodPointTextStyles.circle}>
                  <Text style={{color: '#fff'}}>{i + 1}</Text>
                </View>{' '}
                ◆
              </Text>
            </View>
          </View>
          <View style={GoodPointTextStyles.kokosugoTitleBg}>
            <Text style={GoodPointTextStyles.kokosugoTitle}>{each.title}</Text>
            <Dash
              style={{height: 0.3}}
              dashThickness={0.5}
              dashLength={1}
              dashColor={'rgba(32, 164, 0, 1.00)'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={GoodPointTextStyles.shadow}>
              <AutoHeightImage
                width={responsiveWidth(45)}
                source={{uri: each.image}}
                style={GoodPointTextStyles.img}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 14, margin: 8, lineHeight: 20}}>
                {each.description}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default GoodPointText;

const GoodPointTextStyles = StyleSheet.create({
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
  },
  subTitleBg: {
    backgroundColor: 'rgba(81, 106, 255, 1.00)',
    borderRadius: 4,
    transform: [{rotate: '-4deg'}],
    marginTop: 5,
  },
  subTitle: {
    color: '#fff',
    marginHorizontal: 3,
    fontSize: 14,
    lineHeight: 20,
  },
  kokosugoTitle: {
    color: 'rgba(32, 164, 0, 1.00)',
    fontWeight: 'bold',
  },
  kokosugoTitleBg: {
    width: '90%',
    marginTop: 5,
    marginLeft: '5%',
  },
  img: {
    margin: 8,
    marginTop: 1,
    borderColor: '#fff',
    borderWidth: 2,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  circle: {
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 3,
  },
});
