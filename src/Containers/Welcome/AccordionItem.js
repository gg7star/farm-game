import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';


const AccordionItem = ({item, top, bottom}) => {

  return (
    <View style={[styles.accordionBody, top && styles.topItem, bottom && styles.bottomItem]}>
      <TouchableOpacity >
        <ImageBackground style={[styles.accordionBg, styles.accordion, top && styles.topItem, bottom && styles.bottomItem]} imageStyle={[top && styles.topItem, bottom && {marginBottom: 10}]} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/bg/paper1.png'}}>
          <Text>{item.title}</Text>
          <Image style={styles.listMark} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/list_mark1.png'}} />
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default AccordionItem;

const styles = StyleSheet.create({
  accordionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#630',
    fontWeight: 'bold',
    borderColor: '#663300',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottomWidth: 0,
  },
  topItem: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#630',
    fontWeight: 'bold',
    padding: 12,
    borderBottomWidth: 1,
  },
  accordionBg: {
    width: 296,
    height: 44,
  },
  listMark: {
    marginTop: 3,
    height: 20,
    width: 20,
  }
})