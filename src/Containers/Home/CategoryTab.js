import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const CategoryTab = ({item}) => {
  return (
    <View style={CategoryTabStyles.bg}>
      <View style={CategoryTabStyles.textBg}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default CategoryTab;

const CategoryTabStyles = StyleSheet.create({
  bg: {
    height: responsiveHeight(5),
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBg: {
    backgroundColor: '#fff',
    width: '93%',
    height: responsiveHeight(4),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
