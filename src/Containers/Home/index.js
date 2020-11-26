import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';

import AutoHeightImage from 'react-native-auto-height-image';

import {Actions} from 'react-native-router-flux';

import Menu from '../../Components/Menu';

import Loader from './Loader.js';
import HomeButton from './HomeButton.js';
import CategoryTab from './CategoryTab.js';
import CategoryTabContent from './CategoryTabContent.js';
import SubMenu from './SubMenu.js';
import NotationModal from './NotationModal.js';

const homeBtnList = [
  {
    text: ['ゲーム', 'ガイド '],
    bgColor: '#23A029',
  },
  {
    text: [' 表記に', 'ついて'],
    bgColor: '#B37A00',
  },
  {
    text: [' MPT', 'ランキング '],
    bgColor: '#67B500',
  },
];

const categoryTabList = [
  {
    title: '果物',
    bgColor: '#FF9354',
  },
  {
    title: '野菜',
    bgColor: '#FFC638',
  },
  {
    title: '動物・\nその他',
    bgColor: '#53C93C',
  },
  {
    title: 'イベント',
    bgColor: '#46CEF0',
  },
  {
    title: '無料ｹﾞｰﾑ',
    bgColor: '#B84DFF',
  },
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
      option: ' '
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
]

const accountList = [
  {
    name: '所持P:70327っぴ',
    link: 'point',
  },
  {
    name: '作物出荷情報',
    link: 'news',
  },
  {
    name: 'ﾕｰｻﾞｰ情報の確認',
    link: 'profile',
  },
  {
    name: 'ランキング',
    link: 'ranking',
  },
  {
    name: '送付手続き待ち',
    link: 'waitDelivery',
  },
];

const supplyList = [
  {
    name: 'お問い合わせ',
    link: 'contact',
  },
  {
    name: 'ヤマトメールサービス',
    link: 'yamato',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/hatakeppi',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/profile.php?id=100009453335924',
  },
  {
    name: 'ご利用規約',
    link: 'kiyaku',
  },
  {
    name: '対応機種',
    link: '/support/kisyu',
  },
  {
    name: '個人情報保護方針',
    link: '/support/privacy',
  },
  {
    name: '特定商取引法表示',
    link: '/support/tokutei',
  },
  {
    name: '運営会社',
    link: '/support/company',
  },
  {
    name: 'ログアウト',
    link: '/doLogout',
  },
  {
    name: '会員解除',
    link: '/regist/leave',
  },
];

const Home = () => {
  const [loadTime, setLoadTime] = useState(true);
  const [tabItem, setTabItem] = useState(0);
  const [notation, setNotation] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoadTime(false), 100);
  }, []);

  const eventImgClick = () => {
    Actions.event();
  };

  const homeBtnClick = (e) => {
    if (e === 0) {
      Actions.tutorial();
    } else if (e === 1) {
      setNotation(true);
    } else {
      Actions.ranking();
    }
  };
  const notationClose = () => {
    setNotation(false);
  };
  if (loadTime) return <Loader />;
  return (
    <ImageBackground
      style={HomeStyle.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <ScrollView>
        <View style={HomeStyle.header}>
          <View style={HomeStyle.headerNews}></View>
          <View style={HomeStyle.headerAccount}>
            <Text
              style={{color: '#212121', fontSize: 12, textAlign: 'right'}}>
              会員番号:000011
            </Text>
            <View style={{paddingHorizontal: 4, flexDirection: 'row'}}>
              <Text style={{color: '#67b500', fontSize: 12}}>[管理者]</Text>
              <Text style={{color: '#212121', fontSize: 12}}>
                スライムさん
              </Text>
            </View>
          </View>
        </View>

        <AutoHeightImage
          width={responsiveWidth(100)}
          source={{
            uri:
            'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/top_img.png'
          }}
        />

        <View style={HomeStyle.topBtn}>
          {homeBtnList.map((item, i) => (
            <HomeButton
              key={i}
              item={item}
              handleClick={homeBtnClick}
              index={i}
            />
          ))}
        </View>

        <View style={{alignItems: 'center'}}>
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
          <TouchableOpacity onPress={() => eventImgClick()}>
            <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_1/bn.png'}} />
          </TouchableOpacity>
          
          <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_2/bn.png'}} />
          <AutoHeightImage width={responsiveWidth(98)} style={HomeStyle.eventImg} source={{uri: 'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/event/event191030_3/bn.png'}} />
        </View>

        <View style={HomeStyle.corner}>
          <View style={{flexDirection: 'row'}}>
            {
              categoryTabList.map((item, i) => (
                <TouchableOpacity key={i} style={{width: '20%'}} onPress={() => setTabItem(i)}>
                  <CategoryTab item={item} />
                </TouchableOpacity>
              ))
            }
          </View>

          {
            categories.map((item, i) => (
              tabItem === i && <View key={i} style={[HomeStyle.tabContent, {backgroundColor: categoryTabList[i].bgColor}]}>
                <CategoryTabContent item={item} index={i} />
              </View>
            ))
          }
        </View>

        <View style={[HomeStyle.subMenu, HomeStyle.corner]}>
          <Text style={HomeStyle.subMenuTitle}>◆アカウント</Text>
          <View style={HomeStyle.subMenuContent}>
            {
              accountList.map((item, i) => (
                <SubMenu key={i} item={item} />
              ))
            }
          </View>
        </View>

        <View style={[HomeStyle.subMenu, HomeStyle.corner]}>
          <Text style={HomeStyle.subMenuTitle}>◆サポートメニュー</Text>
          <View style={HomeStyle.subMenuContent}>
            {
              supplyList.map((item, i) => (
                <SubMenu key={i} item={item} />
              ))
            }
          </View>
        </View>    
        <Text>{'\n\n'}</Text>               

      </ScrollView>  
      {
        notation && <NotationModal notationClose={notationClose} />
      }          
      <Menu />                  
    </ImageBackground>
    
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
