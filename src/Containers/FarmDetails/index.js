import React, {useEffect, useState, useRef} from 'react';
import {
  Animated,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

import {Actions} from 'react-native-router-flux';
import {SliderBox} from "react-native-image-slider-box";

import Menu from '../../Components/Menu';
import Crop from './Crop';
import { color } from 'react-native-reanimated';

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
        address: '静岡県焼津市 シックスベリーファーマーズ',
      },
      option: '一発畑',
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
    },
    {
      id: 'crop1202',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1202/reco.png',
      Mtitle: '桃薫',
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
      id: 'crop1203',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1203/reco.png',
      Mtitle: 'ダブル：桃薫',
      Mcaption: {
        harvestGuide: '7200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '静岡県焼津市 シックスベリーファーマーズ'
      },
      option: '一発畑'
    },
    {
      id: 'crop1522',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1522/reco.png',
      Mtitle: '桃薫＆きらぴ香　食べ比べセット',
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
      id: 'crop1523',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1523/reco.png',
      Mtitle: 'ダブル：桃薫＆きらぴ香　食べ比べセット',
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
      id: 'crop1251',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1251/reco.png',
      Mtitle: '紀州南高梅の梅干しセット',
      Mcaption: {
        harvestGuide: '4600っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '三重県南牟婁郡御浜町 松本農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1368',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1368/reco.png',
      Mtitle: '紀州南高梅のはちみつ梅干しセット',
      Mcaption: {
        harvestGuide: '3200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '三重県南牟婁郡御浜町 松本農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1262',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1262/reco.png',
      Mtitle: '山久農園のまるごと三宝柑シャーベット ',
      Mcaption: {
        harvestGuide: '4200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '和歌山県有田郡湯浅町 山久農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop843',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/843/reco.png',
      Mtitle: 'マル金の梅干し',
      Mcaption: {
        harvestGuide: '2500～3400っぴ',
        trainingGuide: '12日前後',
        mpt: '94mpt',
        inGameDay: '45分',
        address: '大分県日田市 黒川金右衛門 マル金ファーム'
      },
      option: ' '
    },
    {
      id: 'crop197',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/197/reco.png',
      Mtitle: '【お試し】紀州南高梅',
      Mcaption: {
        harvestGuide: '2500～2800っぴ',
        trainingGuide: '11日前後',
        mpt: '128mpt',
        inGameDay: '45分',
        address: '三重県南牟婁郡御浜町 松本農園'
      },
      option: ' '
    },
    {
      id: 'crop1292',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1292/reco.png',
      Mtitle: '紀州南高梅のはちみつ梅干しセット',
      Mcaption: {
        harvestGuide: '3200～4100っぴ',
        trainingGuide: '12日前後',
        mpt: '246mpt',
        inGameDay: '45分',
        address: '三重県南牟婁郡御浜町 松本農園'
      },
      option: ' '
    },
    {
      id: 'crop1165',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1165/reco.png',
      Mtitle: '紀州南高梅の梅干しセット',
      Mcaption: {
        harvestGuide: '4600～5500っぴ',
        trainingGuide: '12日前後',
        mpt: '371mpt',
        inGameDay: '45分',
        address: '三重県南牟婁郡御浜町 松本農園'
      },
      option: ' '
    },
    {
      id: 'crop274',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/274/reco.png',
      Mtitle: '山久農園のまるごと三宝柑シャーベット',
      Mcaption: {
        harvestGuide: '4200～5100っぴ',
        trainingGuide: '9日前後',
        mpt: '268mpt',
        inGameDay: '45分',
        address: '和歌山県有田郡湯浅町 山久農園'
      },
      option: ' '
    },
    {
      id: 'crop1032',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1032/reco.png',
      Mtitle: '梨とスパイスのジャムセット',
      Mcaption: {
        harvestGuide: '4700～5600っぴ',
        trainingGuide: '7日前後',
        mpt: '385mpt',
        inGameDay: '60分',
        address: '千葉県山武市横芝町 城山みのり園'
      },
      option: ' '
    },
    {
      id: 'crop389',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/389/reco.png',
      Mtitle: '清野さんの葉とらずりんごセット',
      Mcaption: {
        harvestGuide: '3980っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '青森県弘前市 せいの農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop178',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/178/reco.png',
      Mtitle: '清野さんの葉とらずりんごセット',
      Mcaption: {
        harvestGuide: '3980～4880っぴ',
        trainingGuide: '10日前後',
        mpt: '271mpt',
        inGameDay: '45分',
        address: '青森県弘前市 せいの農園'
      },
      option: ' '
    },
    {
      id: 'crop702',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/702/reco.png',
      Mtitle: 'ダブル：清野さんの葉とらずりんごセット',
      Mcaption: {
        harvestGuide: '6960～7860っぴ',
        trainingGuide: '10日前後',
        mpt: '491mpt',
        inGameDay: '45分',
        address: '青森県弘前市 せいの農園'
      },
      option: ' ',
    },
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
        address: '栃木県宇都宮市 自然派花の季'
      },
      option: '一発畑'
    },
    {
      id: 'crop635',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/635/reco.png',
      Mtitle: 'おからショコラと豆乳シフォンケーキ',
      Mcaption: {
        harvestGuide: '3500～4400っぴ',
        trainingGuide: '13日前後',
        mpt: '186mpt',
        inGameDay: '90分',
        address: '神奈川県横須賀市 池嶋とうふ店'
      },
      option: ' '
    },
    {
      id: 'crop1472',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1472/reco.png',
      Mtitle: 'おからショコラと豆乳シフォンケーキ',
      Mcaption: {
        harvestGuide: '2310～3210っぴ',
        trainingGuide: '8日前後',
        mpt: '143mpt',
        inGameDay: '45分',
        address: '佐賀県杵島郡 百武青果'
      },
      option: ' '
    },
    {
      id: 'crop1373',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1373/reco.png',
      Mtitle: '笑顔のきくらげ',
      Mcaption: {
        harvestGuide: '3980っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '山口県宇部市 株式会社サンアロー'
      },
      option: '一発畑'
    },
    {
      id: 'crop586',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/586/reco.png',
      Mtitle: '笑顔のきくらげ',
      Mcaption: {
        harvestGuide: '3980っぴ',
        trainingGuide: '2日前後',
        mpt: '150mpt',
        inGameDay: '90分',
        address: '山口県宇部市 株式会社サンアロー'
      },
      option: ' '
    },
    {
      id: 'crop826',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/826/reco.png',
      Mtitle: '川田さんが選んだおまかせ野菜セット',
      Mcaption: {
        harvestGuide: '2700っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '長崎県南島原市 川田農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1410',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1410/reco.png',
      Mtitle: '川田さんが選んだおまかせ野菜セット',
      Mcaption: {
        harvestGuide: '2700～3600っぴ',
        trainingGuide: '5日前後',
        mpt: '95mpt',
        inGameDay: '90分',
        address: '長崎県南島原市 川田農園'
      },
      option: ' '
    }
  ],
  [
    {
      id: 'crop1376',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1376/reco.png',
      Mtitle: 'プラチナポーク「白金豚」',
      Mcaption: {
        harvestGuide: '5460っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '岩手県花巻市 高源精麦株式会社'
      },
      option: '一発畑'
    },
    {
      id: 'crop1617',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1617/reco.png',
      Mtitle: '8個 宮崎EMO牛100％ハンバーグ',
      Mcaption: {
        harvestGuide: '6200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: '一発畑'
    },
    {
      id: 'crop1514',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1514/reco.png',
      Mtitle: '4個 宮崎EMO牛100％ハンバーグ',
      Mcaption: {
        harvestGuide: '4300っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: '一発畑'
    },
    {
      id: 'crop1183',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1183/reco.png',
      Mtitle: '宮崎EMO牛サイコロステーキセット　',
      Mcaption: {
        harvestGuide: '7500っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: '一発畑'
    },
    {
      id: 'crop917',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/917/reco.png',
      Mtitle: '山ん鶏（有明骨太鶏）',
      Mcaption: {
        harvestGuide: '4450っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '佐賀県伊万里市 百姓屋'
      },
      option: '一発畑'
    },
    {
      id: 'crop1362',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1362/reco.png',
      Mtitle: '鹿児島黒豚「六白」',
      Mcaption: {
        harvestGuide: '5530っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '鹿児島県鹿児島市 黒豚屋「佐藤」'
      },
      option: '一発畑'
    },
    {
      id: 'crop583',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/583/reco.png',
      Mtitle: '選べる伊萬里牛',
      Mcaption: {
        harvestGuide: '7370っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '佐賀県伊万里市 元氣の木株式会社'
      },
      option: '一発畑'
    },
    {
      id: 'crop1025',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1025/reco.png',
      Mtitle: '選べる宮崎EMO牛',
      Mcaption: {
        harvestGuide: '7900っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: '一発畑'
    },
    {
      id: 'crop1129',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1129/reco.png',
      Mtitle: '宮崎EMO牛100％ハンバーグ 4個セット',
      Mcaption: {
        harvestGuide: '4300～5200っぴ',
        trainingGuide: '13日前後',
        mpt: '482mpt',
        inGameDay: '24分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: ' '
    },
    {
      id: 'crop1505',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1505/reco.png',
      Mtitle: '宮崎EMO牛100％ハンバーグ 8個セット',
      Mcaption: {
        harvestGuide: '6200～7100っぴ',
        trainingGuide: '13日前後',
        mpt: '591mpt',
        inGameDay: '24分',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: ' '
    },
    {
      id: 'crop1506',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1506/reco.png',
      Mtitle: 'プラチナポーク「白金豚」',
      Mcaption: {
        harvestGuide: '5460～6360っぴ',
        trainingGuide: '9日以上',
        mpt: '422mpt',
        inGameDay: '24時間',
        address: '岩手県花巻市 高源精麦株式会社'
      },
      option: ' '
    },
    {
      id: 'crop1507',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1507/reco.png',
      Mtitle: '宮崎EMO牛サイコロステーキセット',
      Mcaption: {
        harvestGuide: '7500～8400っぴ',
        trainingGuide: '13日前後',
        mpt: '740mpt',
        inGameDay: '24時間',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: ' '
    },
    {
      id: 'crop1131',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1131/reco.png',
      Mtitle: '宮崎EMO牛ローストビーフ',
      Mcaption: {
        harvestGuide: '8300～9200っぴ',
        trainingGuide: '13日前後',
        mpt: '812mpt',
        inGameDay: '24時間',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: ' '
    },
    {
      id: 'crop629',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/629/reco.png',
      Mtitle: '山ん鶏(骨太有明鶏)',
      Mcaption: {
        harvestGuide: '4450～5350っぴ',
        trainingGuide: '7日以上',
        mpt: '261mpt',
        inGameDay: '24時間',
        address: '佐賀県伊万里市 百姓屋'
      },
      option: ' '
    },
    {
      id: 'crop109',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/109/reco.png',
      Mtitle: '鹿児島黒豚「六白」',
      Mcaption: {
        harvestGuide: '5530～6430っぴ',
        trainingGuide: '9日前後',
        mpt: '399mpt',
        inGameDay: '24時間',
        address: '鹿児島県鹿児島市 黒豚屋「佐藤」'
      },
      option: ' '
    },
    {
      id: 'crop175',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/175/reco.png',
      Mtitle: '選べる伊萬里牛',
      Mcaption: {
        harvestGuide: '7370～8270っぴ',
        trainingGuide: '13日以上',
        mpt: '847mpt',
        inGameDay: '24時間',
        address: '佐賀県伊万里市 元氣の木株式会社'
      },
      option: ' '
    },
    {
      id: 'crop870',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/870/reco.png',
      Mtitle: '選べる純系名古屋コーチン',
      Mcaption: {
        harvestGuide: '4800～5700っぴ',
        trainingGuide: '7日以上',
        mpt: '271mpt',
        inGameDay: '24時間',
        address: '愛知県北設楽郡東栄町 名古屋市南部食鶏加工協同組合'
      },
      option: ' '
    },
    {
      id: 'crop470',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/470/reco.png',
      Mtitle: '選べる宮崎EMO牛',
      Mcaption: {
        harvestGuide: '7900～8800っぴ',
        trainingGuide: '13日前後',
        mpt: '655mpt',
        inGameDay: '24時間',
        address: '宮崎県西都市 有田牧畜産業'
      },
      option: ' '
    },
    {
      id: 'crop240',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/240/reco.png',
      Mtitle: '【お試し】長野産信州りんご米',
      Mcaption: {
        harvestGuide: '3280～4180っぴ',
        trainingGuide: '7日前後',
        mpt: '163mpt',
        inGameDay: '45分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1625',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1625/reco.png',
      Mtitle: '荻原ファーム信州もち麦',
      Mcaption: {
        harvestGuide: '4200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1536',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1536/reco.png',
      Mtitle: '荻原ファーム信州りんご米',
      Mcaption: {
        harvestGuide: '4750っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: '一発畑'
    },
    {
      id: 'crop1537',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1537/reco.png',
      Mtitle: 'ダブル：荻原ファーム信州りんご米',
      Mcaption: {
        harvestGuide: '8700っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: '一発畑'
    },
    {
      id: 'crop1624',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1624/reco.png',
      Mtitle: '荻原ファーム信州りんご米ともち麦セット',
      Mcaption: {
        harvestGuide: '5980っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: '一発畑'
    },
    {
      id: 'crop1532',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1532/reco.png',
      Mtitle: '笠原さんのコシヒカリ',
      Mcaption: {
        harvestGuide: '3850っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '新潟県阿賀野市 笠原農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1533',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1533/reco.png',
      Mtitle: 'ダブル：笠原さんのコシヒカリ',
      Mcaption: {
        harvestGuide: '6900っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '新潟県阿賀野市 笠原農園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1530',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1530/reco.png',
      Mtitle: '多古米',
      Mcaption: {
        harvestGuide: '3500っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '千葉県山武市横芝町 城山みのり園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1531',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1531/reco.png',
      Mtitle: 'ダブル：多古米',
      Mcaption: {
        harvestGuide: '6200っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '千葉県山武市横芝町 城山みのり園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1528',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1528/reco.png',
      Mtitle: '恋の予感',
      Mcaption: {
        harvestGuide: '4980っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '千葉県山武市横芝町 城山みのり園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1529',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1529/reco.png',
      Mtitle: 'ダブル：恋の予感',
      Mcaption: {
        harvestGuide: '9160っぴ',
        trainingGuide: '-日前後',
        mpt: '-mpt',
        inGameDay: '-分',
        address: '千葉県山武市横芝町 城山みのり園'
      },
      option: '一発畑'
    },
    {
      id: 'crop1600',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1600/reco.png',
      Mtitle: '荻原ファーム信州もち麦',
      Mcaption: {
        harvestGuide: '4200～5100っぴ',
        trainingGuide: '10日前後',
        mpt: '271mpt',
        inGameDay: '45分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1330',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1330/reco.png',
      Mtitle: '荻原ファーム信州りんご米',
      Mcaption: {
        harvestGuide: '4750～5650っぴ',
        trainingGuide: '11日前後',
        mpt: '339mpt',
        inGameDay: '90分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1331',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1331/reco.png',
      Mtitle: 'ダブル：荻原ファーム信州りんご米',
      Mcaption: {
        harvestGuide: '8700～9600っぴ',
        trainingGuide: '11日前後',
        mpt: '679mpt',
        inGameDay: '90分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1599',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1599/reco.png',
      Mtitle: '荻原ファーム信州りんご米ともち麦セット',
      Mcaption: {
        harvestGuide: '5980～6880っぴ',
        trainingGuide: '11日前後',
        mpt: '459mpt',
        inGameDay: '90分',
        address: '長野県東御市 信州ファーム荻原'
      },
      option: ' '
    },
    {
      id: 'crop1326',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1326/reco.png',
      Mtitle: '笠原さんのコシヒカリ',
      Mcaption: {
        harvestGuide: '3850～4750っぴ',
        trainingGuide: '8日前後',
        mpt: '232mpt',
        inGameDay: '60分',
        address: '新潟県阿賀野市 笠原農園'
      },
      option: ' '
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
    },
    {
      id: 'crop1612',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1612/reco.png',
      Mtitle: 'のむヨーグルト「伊都物語」',
      Mcaption: {
        trainingGuide: '12日前後',
        inGameDay: '24分',
      },
      option: '無料ゲーム'
    },
    {
      id: 'crop1608',
      Mimg: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/nae7/1608/reco.png',
      Mtitle: '花の季餃子',
      Mcaption: {
        trainingGuide: '3日前後',
        inGameDay: '30分',
      },
      option: '無料ゲーム'
    }
  ]
];

const FarmDetails = () => {
  const [sImg, setSImg] = useState([
    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_farmer/83_1.png',
    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_farmer/10_1.png',
    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_farmer/11_1.png',
    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/photo_farmer/12_1.png',
  ]);

  return (
    <ImageBackground
      style={FarmDetailsStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <ScrollView>
        <View>
          <SliderBox
            images={sImg}
            sliderBoxHeight={300}
            autoplay={true}
            circleLoop={true}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
        <View style={FarmDetailsStyles.content}>
          <Text>きらぴ香</Text>
          <View style={FarmDetailsStyles.btn}>
            <Text style={{color: 'rgb(4, 164, 222)'}}>きらぴ香</Text>
          </View>
        </View>
        {categories[0].map((item, i) => i < 3 && <Crop item={item} key={i} />)}
        <Text>{'\n\n\n'}</Text>
      </ScrollView>
      <Menu />
    </ImageBackground>
  );
};

export default FarmDetails;

const FarmDetailsStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  btn: {
    borderColor: 'rgb(4, 164, 222)',
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
