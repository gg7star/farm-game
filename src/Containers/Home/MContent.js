import React from 'react';
import {
  StyleSheet,
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
  // const addresses = item.Mcaption.address
  //   ? item.Mcaption.address.split(' ')
  //   : [];
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
  const goFarmDetails = () => {
    Actions.farmDetails({farmHouseId: item.farm_house.id});
  };
  return (
    <TouchableOpacity style={MContentStyles.bg} onPress={() => cropClick()}>
      <View style={{flexDirection: 'row', height: 18}}>
        <View style={MContentStyles.option}>
          <Text style={MContentStyles.optionText}>一般ゲーム</Text>
        </View>
        <View style={MContentStyles.mTitle}>
          <Text>
            {item.crop.name}:{item.name}
          </Text>
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
          source={{uri: item.product_image}}
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
          {item.cultivation_date && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>育成目安：</Text>
              <Text style={MContentStyles.mContentText}>
                {item.cultivation_date}日前後
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
          {item.game_day && (
            <View style={{flexDirection: 'row'}}>
              <Text style={MContentStyles.mContentText}>ゲーム内の一日：</Text>
              <Text style={MContentStyles.mContentText}>{item.game_day}分</Text>
            </View>
          )}
          {item.farm_house.area && (
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <AutoHeightImage
                width={25}
                source={require('../../assets/images/location.png')}
              />
              <Text style={MContentStyles.mContentText}>
                {item.farm_house.area}
              </Text>
            </View>
          )}
          {item.farm_house.name && (
            <TouchableOpacity
              style={MContentStyles.farmName}
              onPress={goFarmDetails}>
              <Image
                // resizeMode="contain"
                source={{uri: item.farm_house.farm_house_images[0].image}}
                // source={require('../../assets/images/10_1.png')}
                style={MContentStyles.farmmer}
              />
              <ImageBackground
                style={MContentStyles.farmNameBg}
                imageStyle={{marginLeft: -15}}
                source={require('../../assets/images/farm_name_pattern.png')}>
                <View style={MContentStyles.container}>
                  <Text
                    numberOfLines={1}
                    style={[MContentStyles.mContentText, {flex: 1}]}>
                    {item.farm_house.name}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )}
          {/* {item.Mcaption.content && (
            <View style={{flexDirection: 'row', width: '80%'}}>
              <Text style={MContentStyles.mContentText}>・ </Text>
              <Text style={MContentStyles.mContentText}>
                {item.Mcaption.content}
              </Text>
            </View>
          )} */}
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
  container: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  mContentText: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  mArrow: {
    transform: [{rotate: '90deg'}],
  },
  farmName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  farmmer: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    zIndex: 1,
    width: 50,
    height: 50,
    marginLeft: -5,
  },
  farmNameBg: {
    width: responsiveWidth(50),
    height: 30,
    justifyContent: 'center',
  },
});
