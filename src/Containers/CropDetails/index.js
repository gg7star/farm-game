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
import AutoHeightImage from 'react-native-auto-height-image';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Actions} from 'react-native-router-flux';
import Dash from 'react-native-dash';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';

import FirstView from './FirstView.js';
import PrizePhoto from './PrizePhoto';
import PrizeText from './PrizeText';
import GoodPointText from './GoodPointText';
import FarmerText from './FarmerText';

const firstViewData = {
  title: '【一発畑】きらぴ香',
  titleImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/d_002.png',
  fvImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_prize/772_A4.png',
  fvBg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1058/bg.png'
};

const prizePhotoData = {
  title: 'お届け商品イメージ',
  titleImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/d_004.png',
  photo: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_prize/772_B1.png',
  text: '「品の良い甘み！」があって、「適度な酸味！」「フルーティーな香り！」\nバランスが良くインパクトのある味わいです。\nまた、みずみずしくなめらかな口当たりで、高級感が漂う静岡発の新ブランド苺です。'
};

const prizeTextData = {
  title: '商品詳細',
  titleImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/d_003.png',
  content: [
    '・きらぴ香 2パック（1パック9粒～15粒）',
    '19年12月13日～20年04月10日',
    '20年04月08日 10時まで',
    '静岡県焼津市',
  ],
};

const farmerTextData = {
  title: '生産者紹介',
  titleImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/d_005.png',
  content: [
    'シックスベリーファーマーズ',
    '松田 肇さん',
    '私は苺の栽培を始めて40年になります。'
  ],
  farmerImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_farmer/40_1.png'
};

const goodPointTextData = {
  title: 'ここがすごい！',
  titleImg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/d_001.png',
  content: [
    {
      subTitle: '◆ その① ◆',
      kokosugoTitle: '「土作りへのこだわり」',
      img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_prize/137_C2.png',
      text: ' 松田さんは美味しいいちごを栽培するため、農薬の使用をできるだけ控え、環境にも食べる人にも優しい土作りを心掛けているんじゃよ。'
    },
    {
      subTitle: '◆ その② ◆',
      kokosugoTitle: '「経験と知識の賜物」',
      img: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_prize/137_C3.png',
      text: ' 土や気温、日照時間に大きく左右されるいちご。中でも栽培の難しい桃薫を収穫に導くのは、いちご作り４０年の松田さんの経験と知識なんじゃ。'
    },
  ],
};

const CropDetails = ({gameData}) => {
  const goFarm = () => {
    Actions.farmName({gameData: gameData});
  };

  return (
    <ImageBackground
      style={CropDetailsStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView>
        <Header title="商品詳細" />
        <FirstView item={firstViewData} />
        <PrizePhoto item={prizePhotoData} />
        <PrizeText item={prizeTextData} />
        <GoodPointText item={goodPointTextData} />
        <FarmerText item={farmerTextData} />
        <View style={{height: 200}} />
      </ScrollView>

      <View style={CropDetailsStyles.gameText}>
        <View style={CropDetailsStyles.gameTextTitle}>
          <Text style={{color: '#333'}}>ゲーム詳細</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={CropDetailsStyles.gameTextContent}>
            <Text style={CropDetailsStyles.bottomText}>開始期限：</Text>
            <Text style={CropDetailsStyles.bottomText}>
              20年04月08日 10時まで
            </Text>
          </View>
          <View style={CropDetailsStyles.gameTextContent}>
            <Text style={CropDetailsStyles.bottomText}>残り開始可能数：</Text>
            <Text style={CropDetailsStyles.bottomText}>制限なし</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '60%'}}>
            <Text style={CropDetailsStyles.bottomText}>
              【収穫目安P】4600っぴ
            </Text>
          </View>
          <View style={{width: '40%'}}>
            <Text style={CropDetailsStyles.bottomText}>【獲得mpt】-mpt</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text style={CropDetailsStyles.bottomText}>
              【育成目安】-日前後
            </Text>
          </View>
          <View style={{width: '50%'}}>
            <Text style={CropDetailsStyles.bottomText}>
              【ゲーム内の一日】-分
            </Text>
          </View>
        </View>
      </View>

      {/* PlayBtn */}
      <TouchableOpacity style={CropDetailsStyles.playBtnBox} onPress={goFarm}>
        <View style={CropDetailsStyles.playBtnCenter}>
          <Text style={CropDetailsStyles.goNextBtn}>ゲームスタート</Text>
        </View>
        <Text style={{color: '#ff9800', marginLeft: -2}}>▶</Text>
      </TouchableOpacity>

      <Menu />
    </ImageBackground>
  );
};

export default CropDetails;

const CropDetailsStyles = StyleSheet.create({
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
  },
  gameText: {
    position: 'absolute',
    bottom: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
  },
  gameTextTitle: {
    backgroundColor: '#fba01c',
    paddingVertical: 2,
    paddingRight: 4,
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderLeftWidth: 16,
  },
  gameTextContent: {
    width: '50%',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    lineHeight: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  playBtnBox: {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  playBtnCenter: {
    height: 50,
    width: '50%',
    backgroundColor: '#ff9800',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goNextBtn: {
    color: 'rgba(200, 0, 3, 1.00)',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
