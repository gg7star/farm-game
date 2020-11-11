import React, { useState } from 'react';
import {
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

const TutorialDetails = () => {

  return (
    <View>
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
                  <Text style={[TutorialStyles.headerText, TutorialStyles.contentTitle]}>
                    ◆下のリンクから各説明ページに行けるよ♪
                  </Text>
                </View>

                <View style={{margin: 8}}>
                  {
                    tutorialList.map((item, i) => (
                      <TutorialPoint item={item} index={i} />
                    ))
                  }
                </View>
                         
              </View>
            
          </ScrollView>
      </ImageBackground>
    </View>
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
