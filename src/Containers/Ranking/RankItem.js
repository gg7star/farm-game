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
import LinearGradient from 'react-native-linear-gradient';

const RankItem = ({item, index}) => {
  return (
    <LinearGradient 
      colors={['#f9f9f9', '#eeeeee']}
      style={RankItemStyles.bg}
    >
      <Image
        style={{width: 80, height: 80, marginRight: 10}}
        source={{uri: item.img}}
      />
      <View
        style={RankItemStyles.content}
      >
        <Text
          style={RankItemStyles.contentTitle}
        >
          {index}位：{item.title}
        </Text>
        <Text
          style={RankItemStyles.contentText}
        >
          {item.content}
        </Text>
      </View>
    </LinearGradient>
  )
}

export default RankItem;

const RankItemStyles = StyleSheet.create({
  bg: {
    flexDirection: 'row', 
    borderWidth: 0.5,
    borderColor: '#aaa'
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    height: 83
  },
  contentTitle: {
    fontSize: 16,
    color: '#630',
    marginVertical: 5,
    marginLeft: 5,
  },
  contentText: {
    fontSize: 12,
    margin: 3,    
  }
})
