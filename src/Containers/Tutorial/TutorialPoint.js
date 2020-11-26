import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert
} from 'react-native';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import {Actions} from 'react-native-router-flux';

import Dash from 'react-native-dash';

const TutorialPoint = ({item, index}) => {
  const tutorialClick = (id) => {
    Actions.tutorialDetails({param: id});
  };

  return (
    <View style={{marginBottom: 8}}>
      <TouchableOpacity
        style={TutorialPointStyles.bg}
        onPress={() => tutorialClick(index)}>
        <Text style={{color: '#fff'}}>{item}</Text>
      </TouchableOpacity>
      <Dash
        style={{height: 0.3}}
        dashColor="rgb(142, 142, 142)"
        dashThickness={0.5}
      />
    </View>
  );
};

export default TutorialPoint;

const TutorialPointStyles = StyleSheet.create({
  bg: {
    marginVertical: 4,
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    borderRadius: 4,
  },
});
