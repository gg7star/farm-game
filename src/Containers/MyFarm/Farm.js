import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import FarmBg from './FarmBg';

const Farm = ({item}) => {
  const goFarmTop = () => {
    Actions.farmTop({farmInfo: item.farm, currentSelectedItem: null});
  };
  const [valid, setValid] = useState(true);
  return (
    <TouchableOpacity style={FarmStyles.bg} onPress={goFarmTop}>
      <View style={{height: responsiveWidth(30)}}>
        {/* <ImageBackground
          onError={() => setValid(false)}
          source={{
            uri: valid
              ? item.farmImg
              : 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/newcreate.png',
          }}
          style={{width: '100%', aspectRatio: 1}}> */}
        <FarmBg bgData={item.images.imgAdd} />
        <View style={FarmStyles.nameArea}>
          <Text style={FarmStyles.name}>
            {item.farm.name}
            {'\n'}
            {item.str_days}
          </Text>
        </View>
        {item.farm.crop_image && item.farm.crop_image.length > 0 && (
          <Image source={{uri: item.farm.crop_image}} style={FarmStyles.crop} />
        )}
        {/* </ImageBackground> */}
      </View>
    </TouchableOpacity>
  );
};

export default Farm;

const FarmStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(31),
    margin: '0.5%',
    borderRadius: 4,
    borderColor: '#fff',
    borderWidth: 2,
  },
  nameArea: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    width: responsiveWidth(30),
  },
  name: {
    color: '#fff',
    fontSize: 10,
    padding: '1%',
  },
  crop: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    zIndex: 2,
    bottom: 2,
    right: 2,
  },
});
