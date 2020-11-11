import React from 'react';
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

const MenuBtn = ({item}) => {
  return (
    <TouchableOpacity>
      <AutoHeightImage width={responsiveWidth(25)} source={{uri: item.img}} />
    </TouchableOpacity>
  )
}

export default MenuBtn;
