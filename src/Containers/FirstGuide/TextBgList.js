import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import TextBg from './TextBg';

const TextBgList = ({item}) => {
  return (
    <View style={TextBgListStyles.bg}>
      <Text style={TextBgListStyles.text}>{item.title}</Text>
      {item.list.map((each, i) => (
        <TextBg item={each} key={i} i={i % 2} />
      ))}
    </View>
  );
};

export default TextBgList;

const TextBgListStyles = StyleSheet.create({
  bg: {
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#f60',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
});
