import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Dash from 'react-native-dash';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const MyMenuBtn = ({item}) => {
  const goNext = () => {
    Actions[item.goLink]();
  };
  return (
    <TouchableOpacity onPress={goNext}>
      <AutoHeightImage
        width={responsiveWidth(30)}
        style={MyMenuBtnStyles.img}
        source={item.imgLink}
      />
    </TouchableOpacity>
  );
};

export default MyMenuBtn;

const MyMenuBtnStyles = StyleSheet.create({
  img: {
    marginHorizontal: responsiveWidth(1),
    marginVertical: 10,
  },
});
