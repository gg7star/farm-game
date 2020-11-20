import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

import Header from '../../Components/Header'
import TutorialPoint from './TutorialPoint.js'
const tutorialList = [
  {
    title: ' 1. どうやって作物を選んだらいいの？ ▶',
    link: ''
  },
  {
    title: ' 2. 農園でのボタン説明 ▶',
    link: ''
  },
  {
    title: ' 3. 上手に収穫するには ▶',
    link: ''
  },
  {
    title: ' 4. 【収穫ボタン】が押せないのは？ ▶',
    link: ''
  },
  {
    title: ' 5. 動物ゲームは野菜や果物と少し違うよ！ ▶',
    link: ''
  },
  {
    title: ' 6. 収獲したあとはどうしたらいい？ ▶',
    link: ''
  }
]

const Tutorial = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={TutorialStyles.bgImg}
        resizeMode="repeat"
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <Header title='ゲームガイド' />
            
              <View
                style={TutorialStyles.corner}
              >
                <View style={[TutorialStyles.prizeText, TutorialStyles.topCorner]}>
                  <Text style={TutorialStyles.contentTitle}>
                    ◆下のリンクから各説明ページに行けるよ♪
                  </Text>
                </View>

                <View style={{margin: 8}}>
                  {
                    tutorialList.map((item, i) => (
                      <TutorialPoint key={i} item={item} index={i} />
                    ))
                  }
                </View>
                         
              </View>
            
          </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Tutorial;

const TutorialStyles = StyleSheet.create({
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
  prizeText: {
    backgroundColor: '#67b500',    
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
    borderStyle: 'solid',    
  },
  topCorner: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  contentTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
})
