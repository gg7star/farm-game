import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HistoryItem = ({item}) => {
  return (
    <LinearGradient
      colors={['#fffadf', '#fff3a5']}
      style={HistoryItemStyles.bg}>
      <Text style={HistoryItemStyles.pointText}>{item.str_point}</Text>
      <Text style={HistoryItemStyles.dateText}>{item.date}</Text>
    </LinearGradient>
  );
};

export default HistoryItem;

const HistoryItemStyles = StyleSheet.create({
  bg: {
    padding: 15,
    borderColor: '#f7c942',
    borderWidth: 0.5,
  },
  pointText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#630',
  },
  dateText: {
    fontWeight: 'normal',
    fontSize: 12,
    marginLeft: -5,
    color: '#222222',
  },
});
