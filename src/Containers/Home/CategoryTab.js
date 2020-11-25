import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const CategoryTab = ({item}) => {
  return (
    <View style={[CategoryTabStyles.bg, {backgroundColor: item.bgColor}]}>
      <View style={CategoryTabStyles.textBg}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default CategoryTab;

const CategoryTabStyles = StyleSheet.create({
  bg: {
    height: 55,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBg: {
    backgroundColor: '#fff',
    width: '87%',
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
})