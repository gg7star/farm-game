import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const imgRate = responsiveWidth(100) / 240;

const EachStatus = ({item}) => {
  return (
    <View style={EachStatusStyles.bg}>
      {item.icon && (
        <AutoHeightImage
          width={responsiveWidth(20)}
          source={{
            uri: item.icon,
          }}
          style={EachStatusStyles.item}
        />
      )}
      {item.status && (
        <View style={[EachStatusStyles.item, EachStatusStyles.img]}>
          <AutoHeightImage
            width={responsiveWidth(70)}
            source={{
              uri: item.status,
            }}
            style={{marginHorizontal: responsiveWidth(5)}}
          />
        </View>
      )}
      {item.description && (
        <View style={[EachStatusStyles.item, EachStatusStyles.img]}>
          <Text style={{marginLeft: responsiveWidth(5)}}>
            {item.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default EachStatus;

const EachStatusStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#9f9',
  },
  img: {
    // alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(80),
  },
});
