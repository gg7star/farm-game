import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header = ({title}) => {

  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerText}>{title}</Text>              
    </View>
  )
}

export default Header;

const HeaderStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    position: 'relative',
    zIndex: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})
