import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import { Actions } from 'react-native-router-flux';

const NotationModal = ({notationClose}) => {

  return (
    <View style={NotationModalStyles.modalContent}>
      <TouchableOpacity style={NotationModalStyles.modalClose} onPress={() => notationClose()}>
        <Image source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/back.png'}} style={{width: 37, height: 37}} />
      </TouchableOpacity>
      <View
        style={NotationModalStyles.contentText}
      >
        <Text style={{fontSize: 12, lineHeight: 17}}>
          【収穫目安P】{'\n '}
          収穫に必要な最低限のポイント（っぴ）{'\n'}
          【栽培目安】{'\n '}
          農園クリアまでにかかる現実時間の日数{'\n'}
          【ダブル：】{'\n '}
          内容量が通常の2倍でお得♪{'\n'}
          【プレミアム】{'\n '}
          育て方や手間のかけ方によって、届く作物の量やパッケージが変わるよ{'\n'}
          【mpt（マイスターポイント）】{'\n '}
          クリア後に貰えるポイントで、栽培日数・作業数・収穫コストを基準に決まっているよ★{'\n'}
          【ランキングの順位基準】{'\n '}
          期間中に獲得したmptの合計値で決まるよ。上位を目指すなら作物のmptを気にしてみてね♪{'\n'}
        </Text>
      </View>
      
      <AutoHeightImage width={responsiveWidth(90)} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/mymenu/bg99.png'}} />
    </View>
  )
}

export default NotationModal;

const NotationModalStyles = StyleSheet.create({  
  modalContent: {
    left: '5%',
    top: '30%',
    position: 'absolute',
    zIndex: 60,
    width: '90%',
  },
  modalClose: {
    position: 'absolute',
    right: '6%',
    top: '3%',
    zIndex: 200,
  },
  contentText: {
    position: 'absolute',
    left: '5%',
    top: '3%',
    zIndex: 1,
    width: '91%'
  }
})