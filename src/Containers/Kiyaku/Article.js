import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Article = ({item}) => {
  return (
    <View>
      <LinearGradient
        colors={['#6facd5', '#497bae']}
        style={ArticleStyles.subTitle}>
        <Text style={ArticleStyles.subTitleText}>{item.title}</Text>
      </LinearGradient>

      <LinearGradient
        colors={['#fffadf', '#fff3a5']}
        style={ArticleStyles.content}>
        <Text style={ArticleStyles.contentText}>{item.content}</Text>
      </LinearGradient>
    </View>
  );
};

export default Article;

const ArticleStyles = StyleSheet.create({
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: '#456f9a',
    borderWidth: 1,
  },
  subTitleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#333333',
  },
  content: {
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
});
