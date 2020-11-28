import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
    height: 55,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBg: {
    backgroundColor: '#fff',
    width: '93%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
