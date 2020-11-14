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
import CategoryTab from './CategoryTab.js';
import CategoryTabContent from './CategoryTabContent.js';
import SubMenu from './SubMenu.js';
import Menu from '../../Layouts/Menu.js';
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
];

const categoryTabList = [
  {
    title: '果物',
    bgColor: '#FF9354'
  },
  {
    title: '野菜',
    bgColor: '#FFC638'
  },
  {
    title: '動物・\nその他',
    bgColor: '#53C93C'
  },
  {
    title: 'イベント',
    bgColor: '#46CEF0'
  },
  {
    title: '無料ｹﾞｰﾑ',
    bgColor: '#B84DFF'
  }
];

const categories = [
  [
    {
      id: 'crop1058',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1058/reco.png',
      Mtitle: 'きらぴ香',
      Mcaption: {
        harvestGuide: '4600っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '静岡県焼津市 シックスベリーファーマーズ'
      },
      option: '一発畑'
    },
    {
      id: 'crop1524',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1524/reco.png',
      Mtitle: 'ダブル：きらぴ香',
      Mcaption: {
        harvestGuide: '7200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '静岡県焼津市 シックスベリーファーマーズ'
      },
      option: '一発畑'
    }
  ],
  [
    {
      id: 'crop1367',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1367/reco.png',
      Mtitle: '畑っぴオリジナル選べる肉餃子と野菜餃子',
      Mcaption: {
        harvestGuide: '4600っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '静岡県焼津市 シックスベリーファーマーズ'
      },
      option: '一発畑'
    }
  ],
  [
    {
      id: 'crop635',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/635/reco.png',
      Mtitle: 'プラチナポーク「白金豚」',
      Mcaption: {
        harvestGuide: '5460っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '岩手県花巻市 高源精麦株式会社'
      },
      option: '一発畑'
    }
  ],
  [
    {
      id: 'event_title_all',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event_title_all/ic.png',
      Mtitle: '★歴代称号保持者★',
      Mcaption: {
        content: 'ずっとその名を刻み続けるタイトルホルダーの皆さんです！\n称号保持者には、特待イベントやお得な畑など、嬉しい特典があるかも？',
      }
    }
  ],
  [
    {
      id: 'crop1614',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1614/reco.png',
      Mtitle: '博多ニワカそうす',
      Mcaption: {
        trainingGuide: '2日前後',
        inGameDay: '45分',
      },
      option: '無料ゲーム'
    }
  ]
]

const accountList = [
  {
    name: '所持P:70327っぴ',
    link: 'point'
  },
  {
    name: '作物出荷情報',
    link: 'news'
  },
  {
    name: 'ﾕｰｻﾞｰ情報の確認',
    link: 'profile'
  },
  {
    name: 'ランキング',
    link: 'ranking'
  },
  {
    name: '送付手続き待ち',
    link: 'wait_delivery'
  }
]

const supplyList = [
  {
    name: 'お問い合わせ',
    link: '/support/contact'
  },
  {
    name: 'ヤマトメールサービス',
    link: '/yamato'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/hatakeppi'
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100009453335924'
  },
  {
    name: 'ご利用規約',
    link: '/support/kiyaku1'
  },
  {
    name: '対応機種',
    link: '/support/kisyu'
  },
  {
    name: '個人情報保護方針',
    link: '/support/privacy'
  },
  {
    name: '特定商取引法表示',
    link: '/support/tokutei'
  },
  {
    name: '運営会社',
    link: '/support/company'
  },
  {
    name: 'ログアウト',
    link: '/doLogout'
  },
  {
    name: '会員解除',
    link: '/regist/leave'
  }
]



const Home = () => {

  const [loadTime, setLoadTime] = useState(true);
  const [tabItem, setTabItem] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoadTime(false), 1000)
  }, [])

  const doLogin = () => {
    Actions.home()
  }

  const homeBtnClick = (e) => {
    if (e === 0) {
      Actions.tutorial()
    }
  }
  if (loadTime) 
    return <Loader />
  return (
    <SafeAreaView style={{flex: 1}}>
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
                homeBtnList.map((item, i) => (
                  <HomeButton item={item} handleClick={homeBtnClick} index={i} />
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

            <View style={HomeStyle.corner}>
              <View style={{flexDirection: 'row'}}>
                {
                  categoryTabList.map((item, i) => (
                    <TouchableOpacity style={{width: '20%'}} onPress={() => setTabItem(i)}>
                      <CategoryTab item={item} />
                    </TouchableOpacity>
                  ))
                }
              </View>

              {
                categories.map((item, i) => (
                  tabItem === i && <View style={[HomeStyle.tabContent, {backgroundColor: categoryTabList[i].bgColor}]}>
                    <CategoryTabContent item={item} index={i} />
                  </View>
                ))
              }
            </View>

            <View style={[HomeStyle.subMenu, HomeStyle.corner]}>
              <Text style={HomeStyle.subMenuTitle}>◆アカウント</Text>
              <View style={HomeStyle.subMenuContent}>
                {
                  accountList.map((item) => (
                    <SubMenu item={item} />
                  ))
                }
              </View>
            </View>

            <View style={[HomeStyle.subMenu, HomeStyle.corner]}>
              <Text style={HomeStyle.subMenuTitle}>◆サポートメニュー</Text>
              <View style={HomeStyle.subMenuContent}>
                {
                  supplyList.map((item) => (
                    <SubMenu item={item} />
                  ))
                }
              </View>
            </View>    
            <Text>{'\n\n'}</Text>               

          </ScrollView>          
      </ImageBackground>
      <Menu />
    </SafeAreaView>
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
  },
  corner: {
    marginHorizontal: 8,
    marginVertical: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  tabContent: {
    padding: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  subMenu: {
    backgroundColor: '#67B500',
    paddingBottom: '1%',
    borderRadius: 8,    
  },
  subMenuContent: {
    marginHorizontal: '1%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  subMenuTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 6,   
  }
})
