import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import { Actions } from 'react-native-router-flux';

import Menu from './Menu';

const FourMenuLayout = (props) => {
  return (
    <View>
      {props.children}
      <Menu />
    </View>
  );
};

export default FourMenuLayout;
