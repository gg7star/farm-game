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
import AutoHeightImage from 'react-native-auto-height-image';

import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

import Header from '../../Components/Header';
import FooterMenu from './FooterMenu.js';

const tutorialDetailsList = [
  {
    title: '◆どうやって作物を選んだらいいの？',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img1.png']
  },
  {
    title: '◆農園でのボタン説明',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img2_1.png', 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img2_2.png']
  },
  {
    title: '◆上手に収穫するには',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img6.png']
  },
  {
    title: '◆「収穫ボタン」が押せないのは…',
    img: ['']
  },
  {
    title: '◆動物について',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img8.png']
  },
  {
    title: '◆収獲したあとはどうしたらいい？',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img4.png']
  },
  {
    title: '◆出荷手配のタイミングとお願いについて',
    img: ['https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/tutorial/img7.png']
  },
]

const TutorialDetails = ({param}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <ImageBackground
          style={TutorialDetailsStyles.bgImg}
          resizeMode="repeat"
          source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}
        >
          <ScrollView style={{flexDirection: 'column'}}>
            <Header title={'ゲームガイド【' + (param + 1) +'/7】'} />
            
              <View
                style={TutorialDetailsStyles.corner}
              >
                <View 
                  style={[TutorialDetailsStyles.prizeText,    
                    TutorialDetailsStyles.topCorner]}
                >
                  <Text style={[TutorialDetailsStyles.headerText, TutorialDetailsStyles.contentTitle]}>
                    {tutorialDetailsList[param].title}
                  </Text>
                </View>

                {
                  tutorialDetailsList[param].img.map((item) => (
                    <AutoHeightImage width={(responsiveWidth(100) - 16)} source={{uri: item}} style={{borderRadius: 8}} />
                  ))
                }
  
              </View>
            
          </ScrollView>
          <FooterMenu index={param} />
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default TutorialDetails;

const TutorialDetailsStyles = StyleSheet.create({
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
})
