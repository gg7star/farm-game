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
import Dash from 'react-native-dash';

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
    <ImageBackground
      style={TutorialDetailsStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.gif')}>
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
            tutorialDetailsList[param].img.map((item, i) => (
              <AutoHeightImage key={i} width={(responsiveWidth(100) - 16)} source={{uri: item}} style={{borderRadius: 8}} />
            ))
          }

          {
            param === 3 && <View
              style={TutorialDetailsStyles.contentText}
            >
              <Text style={{fontSize: 14}}>
                ナビキャラが「収穫しよう」って言ってるのに収穫ボタンが押せないのは、                  
                <Text 
                  style={{fontSize: 14, color: 'rgba(232, 0, 3, 1.00)'}}
                >
                  畑の成長が追いついてない
                </Text>
                <Text 
                  style={{fontSize: 14}}
                >
                  からなの；{'\n'}
                </Text>
              </Text>
              <Text style={{fontSize: 14}}>
                ナビキャラはゲームスタート時から適正な作業タイミングでアドバイスしてるけど、畑に来た時にいつも「遅れているよ」っていう言葉しか見ない人は、                  
                <Text 
                  style={{fontSize: 14, color: 'rgba(232, 0, 3, 1.00)'}}
                >
                  作業タイミングがズレている
                </Text>
                <Text 
                  style={{fontSize: 14}}
                >
                  んだよ；；
                </Text>
              </Text>
              <Text style={{fontSize: 14}}>
                特に植付けは大切で、大幅に遅れると成長しないうちに「収穫して」っていっちゃうの。{'\n'}でも、花が咲いていては収穫はできないから、                  
                <Text 
                  style={{fontSize: 14, color: 'rgba(232, 0, 3, 1.00)'}}
                >
                  一定の状態まで作物が成長しないと収穫作業はできない
                </Text>
                <Text 
                  style={{fontSize: 14}}
                >
                  の、畑の成長を待ってね。{'\n'}
                </Text>
              </Text>
              <Text style={{fontSize: 14}}>
                初めて畑っぴをやるなら、まずは                  
                <Text 
                  style={{fontSize: 14, color: 'rgba(232, 0, 3, 1.00)'}}
                >
                  栽培期間の短い作物から始めて、畑っぴに慣れていく
                </Text>
                <Text 
                  style={{fontSize: 14}}
                >
                  事をオススメするよ♪
                </Text>
              </Text>
              <Dash 
                style={{height: 0.3}}
                dashColor='rgb(142, 142, 142)'
                dashThickness={0.5} 
              />
            </View>
          }

        </View>
        <Text>{'\n\n'}</Text>
        
      </ScrollView>
      <FooterMenu index={param} />
    </ImageBackground>
  );
};

export default TutorialDetails;

const TutorialDetailsStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  corner: {
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 0,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 16,
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
  contentText: {
    marginBottom: 8,
    padding: 8,
  }
})
