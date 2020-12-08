import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import Dash from 'react-native-dash';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Actions} from 'react-native-router-flux';

const MContent = ({item}) => {
  const addresses = item.Mcaption.address
    ? item.Mcaption.address.split(' ')
    : [];
  const cropClick = () => {
    Actions.cropDetails({gameData: item});
    // if (item.option === '無料ゲーム') {
    //   Actions.farmName({gameData: item});
    //   // Actions.admob({nextPage: 'farmName', state: {gameData: item}});
    // } else if (item.option === '一発畑') {
    //   Actions.cropDetails(item.id);
    // } else {
    //   Actions.eventTitleAll();
    // }
  };
  return (
    <TouchableOpacity style={MContentStyles.bg} onPress={() => cropClick()}>
      <View style={{flexDirection: 'row', height: 18}}>
        {item.option && item.option.length > 1 && (
          <View style={MContentStyles.option}>
            <Text style={MContentStyles.optionText}>{item.option}</Text>
          </View>
        )}
        <View style={MContentStyles.mTitle}>
          <Text>{item.Mtitle}</Text>
          <Dash
            style={{height: 0.3}}
            dashColor="rgb(142, 142, 142)"
            dashLength={1}
            dashThickness={1}
          />
        </View>
      </View>
      <View style={{marginTop: 6, flexDirection: 'row'}}>
        {/* <Image source={{uri: item.Mimg}} style={MContentStyles.mimg} /> */}
        <AutoHeightImage
          width={responsiveWidth(30)}
          source={{uri: item.Mimg}}
          style={{marginRight: 10}}
        />
        <View style={{width: responsiveWidth(50)}}>
          {/* {item.Mcaption.harvestGuide && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>・収穫目安P：</Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.harvestGuide}
              </Text>
            </View>
          )} */}
          {item.Mcaption.trainingGuide && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>育成目安：</Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.trainingGuide}
              </Text>
            </View>
          )}
          {/* {item.Mcaption.mpt && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>・獲得mpt：</Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.mpt}
              </Text>
            </View>
          )} */}
          {item.Mcaption.inGameDay && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>ゲーム内の一日：</Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.inGameDay}
              </Text>
            </View>
          )}
          {item.Mcaption.address && (
            <View style={{flexDirection: 'row'}}>
              <AutoHeightImage
                width={25}
                source={require('../../assets/images/location.png')}
              />
              <Text style={MContentStyles.mContentText}>{addresses[0]}</Text>
            </View>
          )}
          {item.Mcaption.address && (
            <TouchableOpacity style={MContentStyles.farmName}>
              <AutoHeightImage
                width={60}
                source={require('../../assets/images/10_1.png')}
                style={MContentStyles.farmmer}
              />
              <ImageBackground
                style={MContentStyles.farmNameBg}
                imageStyle={{marginLeft: -15}}
                source={require('../../assets/images/farm_name_pattern.png')}>
                <Text style={MContentStyles.mContentText}>{addresses[1]}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
          {item.Mcaption.content && (
            <View style={{flexDirection: 'row', width: '80%'}}>
              <Text style={MContentStyles.mContentText}>・ </Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.content}
              </Text>
            </View>
          )}
        </View>
        <Text style={MContentStyles.mArrow}>▲</Text>
      </View>
      <Dash
        style={{height: 0.3, marginTop: 4}}
        dashColor="rgb(142, 142, 142)"
        dashGap={0}
        dashThickness={1}
      />
    </TouchableOpacity>
  );
};

export default MContent;

const MContentStyles = StyleSheet.create({
  bg: {
    height: 150,
    width: responsiveWidth(100),
    padding: 4,
    backgroundColor: '#fff',
  },
  mimg: {
    width: 64,
    height: 64,
  },
  mTitle: {
    width: responsiveWidth(70),
    position: 'absolute',
    left: responsiveWidth(31),
  },
  option: {
    backgroundColor: '#e91e63',
    paddingVertical: 2,
    borderRadius: 2,
    width: responsiveWidth(30),
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  optionText: {
    color: '#fff',
  },
  mContentText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mArrow: {
    transform: [{rotate: '90deg'}],
  },
  farmName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmmer: {
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#fff',
    zIndex: 1,
  },
  farmNameBg: {
    width: responsiveWidth(50),
    height: 30,
    justifyContent: 'center',
  },
});
