import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import EachStatus from './EachStatus';

const imgRate = responsiveWidth(100) / 240;

const FarmStatusList = ({statusList, closeStatus}) => {
  // console.log(39, bgData);
  return (
    <TouchableWithoutFeedback onPress={closeStatus}>
      <View style={FarmStatusListStyles.bg}>
        {statusList.map((item, i) => (
          <EachStatus item={item} key={i} />
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FarmStatusList;

const FarmStatusListStyles = StyleSheet.create({
  bg: {
    position: 'absolute',
    top: 40,
    zIndex: 101,
    height: responsiveHeight(100),
  },
});
