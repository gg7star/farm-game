import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';
import Dash from 'react-native-dash';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

import Menu from '../../Components/Menu';


const GrowthItem = ({item}) => {
  return (
    <View>
      <Text style={GrowthItemStyles.line}>
        <Text style={GrowthItemStyles.listName}>ゲーム名 ：</Text>
        <Text>{item.crop_name}</Text>
      </Text>
      <Text style={GrowthItemStyles.line}>
        <Text style={GrowthItemStyles.listName}>農場名 ：</Text>
        <Text>{item.crop_name}</Text>
      </Text>
      <Text style={GrowthItemStyles.line}>
        <Text style={GrowthItemStyles.listName}>育成期間 ：</Text>
        <Text>{item.farm_create_date}</Text>
      </Text>
      <Text style={GrowthItemStyles.line}>
        <Text style={GrowthItemStyles.listName}>現在の状態 ：</Text>
        <Text>{item.status}</Text>
      </Text>
      <Dash
        style={{height: 0.3, marginBottom: 8}}
        dashColor="rgb(142, 142, 142)"
        dashThickness={0.5}
      />
    </View>
  );
};

export default GrowthItem;

const GrowthItemStyles = StyleSheet.create({
  listName: {
    fontWeight: 'bold',
  },
  line: {
    lineHeight: 20,
  },
});
