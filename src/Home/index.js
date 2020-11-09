import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,

} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Dash from 'react-native-dash';

import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Actions } from 'react-native-router-flux';
import Loader from './Loader.js';
import HomeButton from './HomeButton.js';

const homeBtnList = [
  {
    text: ['ゲーム', 'ガイド '],
    bgColor: '#23A029'
  },
  {
    text: [' 表記に', 'ついて'],
    bgColor: '#B37A00'
  },
  {
    text: [' MPT', 'ランキング '],
    bgColor: '#67B500'
  }
]

const Home = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loadTime, setLoadTime] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadTime(false), 1000)
  }, [])

  const handleEmail = (e) => {
    setEmail(e);
  }

  const handlePassword = (e) => {
    setPassword(e);
  }

  const doLogin = () => {
    Actions.home()
  }
  if (loadTime) 
    return <Loader />
  return (
    <View>
      <ImageBackground
        style={HomeStyle.bgImg}
        resizeMode="repeat"
        // imageStyle={{ flex: 1 }}
        source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bg_pattern01.png'}}>
          <ScrollView style={{flexDirection: 'column'}}>
            <View style={HomeStyle.header}>
              <View style={HomeStyle.headerNews}>

              </View>
              <View style={HomeStyle.headerAccount}>
                <Text 
                style={{color: '#212121', fontSize: 12, textAlign: 'right'}}>
                  会員番号:000011
                </Text>
                <View style={{paddingHorizontal: 4, flexDirection: 'row'}}>
                  <Text style={{color: '#67b500', fontSize: 12}}>
                    [管理者]
                  </Text>    
                  <Text 
                  style={{color: '#212121', fontSize: 12}}>
                    スライムさん
                  </Text>
                </View>
              </View>
            </View>

            <AutoHeightImage width={responsiveWidth(100)} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/top_img.png'}} />

            <View style={HomeStyle.topBtn}>
              {
                homeBtnList.map((item) => (
                  <HomeButton item={item} />
                ))
              }
            </View>

            <View style={{alignItems: 'center',}}>
              <View style={HomeStyle.introPart}>
                <Text style={HomeStyle.introText}>
                  サービス終了日の4月30日が近づいてまいりました。
                  {'\n'}
                  今一度今後のスケジュールをご確認くださるようお願いいたします。
                  {'\n'}{'\n'}
                  4月8日(水）12：00を最終出荷手続き日とさせていただいております。
                  {'\n'}
                  ご確認のほどお願いいたします。
                </Text>
              </View>
              <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_1/bn.png'}} />
              <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_2/bn.png'}} />
              <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_3/bn.png'}} />
            </View>

          </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default Home;

const HomeStyle = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    position: 'relative',
    zIndex: 49,
  },
  headerNews: {
    backgroundColor: '#fff',
    width: responsiveWidth(50),
    borderRadius: 4,
    height: 32,
    marginVertical: 2,
    marginLeft: 4,
    position: 'relative'
  },
  headerAccount: {
    backgroundColor: '#dcedc8',
    position: 'absolute',
    right: 0,
    borderRadius: 4,
    height: 32,
    margin: 2,    
  },
  topBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introPart: {
    backgroundColor: '#ffc',
    width: '68%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  introText: {
    color: '#630'
  },
  eventImg: {
    borderRadius: 8,
    overflow: "hidden",
    margin: '1%',
    borderColor: '#fff',
    borderWidth: 2,
  }
})
