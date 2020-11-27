import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ContentText = ({item}) => {
  return (
    <View style={ContentTextStyles.bg}>
      <Text style={ContentTextStyles.text}>{item}</Text>
    </View>
  );
};

export default ContentText;

const ContentTextStyles = StyleSheet.create({
  bg: {
    marginHorizontal: 5,
    backgroundColor: '#f60',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    margin: 10,
    fontWeight: 'bold',
  },
});
