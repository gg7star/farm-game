import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';

import EventItem from './EventItem';
const eachData = [
  {
    title: '【ぶどうの神】(2019)',
    date: '2019/9/11認定',
    eachList: [
      '76655：きゅーちゃんはっぴーさん',
      '76843：nozomiさん'
    ],
    clr: '#512dab',
    bgClr: '#d1c4e9'
  }
]

const EventTitleAll = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={EventTitleAllStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <Header title='称号保持者' />
            
              <View
                style={EventTitleAllStyles.corner}
              >
                <View style={[EventTitleAllStyles.subTitle, EventTitleAllStyles.topCorner]}>
                  <Text style={[EventTitleAllStyles.headerText, EventTitleAllStyles.contentTitle]}>
                    畑っぴにずっとその名を刻み続ける{'\n'}タイトルホルダーの皆さんです！
                  </Text>
                </View>

                <View style={{margin: 8}}>
                  <Text
                    style={{fontSize: 14, lineHeight: 20}}
                  >
                    称号保持者には、特待イベントや{'\n'}
                    お得な畑など、嬉しい特典があるかも？
                  </Text>
                </View>

                <View style={EventTitleAllStyles.subTitle}>
                  <Text style={[EventTitleAllStyles.headerText, EventTitleAllStyles.contentTitle]}>
                    各称号保持者
                  </Text>
                </View>

                <View
                  style={{margin: 8}}
                >
                  {
                    eachData.map((item) => (
                      <EventItem item={item} />
                    ))
                  }
                </View>                         
              </View>            
          </ScrollView>
          <Menu />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default EventTitleAll;

const EventTitleAllStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
    borderRadius: 8,
  },
  subTitle: {
    backgroundColor: '#67b500',    
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid',
  },
  topCorner: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,    
  },
  goHomeBtn: {
    backgroundColor: '#dfa600',
    borderRadius: 8,
    alignItems: 'center',
  },
  goHomeText: {
    fontWeight: 'bold', 
    color: '#630', 
    marginHorizontal: 32, 
    marginVertical: 8,
  },
})
