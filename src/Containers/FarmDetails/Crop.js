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

const Crop = ({item}) => {
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
    <TouchableOpacity style={CropStyles.bg} onPress={cropClick}>
      <View style={{flexDirection: 'row', height: 18}}>
        <View style={CropStyles.option}>
          <Text style={CropStyles.optionText}>一般ゲーム</Text>
        </View>
        <View style={CropStyles.mTitle}>
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
        {/* <Image source={{uri: item.Mimg}} style={CropStyles.mimg} /> */}
        <AutoHeightImage
          width={responsiveWidth(30)}
          source={{uri: item.product_image}}
          style={{marginRight: 10}}
        />
        <View style={{width: responsiveWidth(50)}}>
          {/* {item.Mcaption.harvestGuide && (
            <View style={{flexDirection: 'row'}}>
              <Text style={CropStyles.mContentText}>・収穫目安P：</Text>
              <Text style={CropStyles.mContentText}>
                {item.Mcaption.harvestGuide}
              </Text>
            </View>
          )} */}
          {item.cultivation_date && (
            <View style={{flexDirection: 'row'}}>
              <Text style={CropStyles.mContentText}>育成目安：</Text>
              <Text style={CropStyles.mContentText}>
                {item.cultivation_date}日前後
              </Text>
            </View>
          )}
          {/* {item.Mcaption.mpt && (
            <View style={{flexDirection: 'row'}}>
              <Text style={CropStyles.mContentText}>・獲得mpt：</Text>
              <Text style={CropStyles.mContentText}>{item.Mcaption.mpt}</Text>
            </View>
          )} */}
          {item.game_day && (
            <View style={{flexDirection: 'row'}}>
              <Text style={CropStyles.mContentText}>ゲーム内の一日：</Text>
              <Text style={CropStyles.mContentText}>{item.game_day}分</Text>
            </View>
          )}
        </View>
        <Text style={CropStyles.mArrow}>▲</Text>
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

export default Crop;

const CropStyles = StyleSheet.create({
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
