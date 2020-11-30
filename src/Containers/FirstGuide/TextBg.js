import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
// import TextBgList from './TextBgList';

const bgColor = ['#FFCC99', '#FF9966'];

const TextBg = ({item, i}) => {
  return (
    <View style={[TextBgStyles.bg, {backgroundColor: bgColor[i]}]}>
      <View style={TextBgStyles.img}>
        <AutoHeightImage width={68} source={item.img1} />
      </View>
      <View style={TextBgStyles.img}>
        {item.img2 && <AutoHeightImage width={68} source={item.img2} />}
      </View>
      {/* <AutoHeightImage width={68} source={item.img2} /> */}
      <Text style={{color: '#630'}}>{item.text}</Text>
    </View>
  );
};

export default TextBg;

const TextBgStyles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
  },
  img: {
    width: 68,
    justifyContent: 'center',
    minHeight: 72,
  },
});
