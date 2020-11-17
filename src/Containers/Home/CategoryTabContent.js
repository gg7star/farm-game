import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import MContent from './MContent.js'

const CategoryTabContent = ({item, index}) => {
  return (
    <View>
      {
        index === 3 && <View style={CategoryTabContentStyles.title}>
          <Text style={CategoryTabContentStyles.titleText}>お得News★</Text>
        </View>
      }
      {
        index === 4 && <View style={CategoryTabContentStyles.title}>
          <Text style={CategoryTabContentStyles.titleText}>遊びやすい無料ゲーム♪</Text>
        </View>
      }
      {
        item.map((eachItem, i) => (
          <MContent key={i} item={eachItem} />
        ))
      }
    </View>
  )
}

export default CategoryTabContent;

const CategoryTabContentStyles = StyleSheet.create({
  title: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 4
  }
})