import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import ContentText from './ContentText';
import TextBgList from './TextBgList';
import {Actions} from 'react-native-router-flux';

const contentList = [
  '畑っぴとは農家監修のもと、農作業をリアルに再現した「本格農業体験シミュレーションゲーム」でもただのゲームじゃなくて、育てた作物の出来が良いとなんと…',
  '普段何気なく食べている畑の恵み。その一つ一つに込められた、農家さんの苦労や愛情を少しでも知って頂けたら嬉しいな♪\n※写真はほんの一部なんだよ♪',
  '畑っぴはとっても簡単♪\nまず好きな作物を選んで畑に行くと、かかしの菜々が、何をしたら良いかアドバイスするから、それを参考に作業を進めてね♪\n菜々のセリフは変わる時もあるから何度か話しかけてみてね♪',
  'あとは、畑の状態に注意しながら水やり・除草などの日常作業をするだけ♪',
  '畑っぴ内での1日は現実では1.5時間で経過！\n※栽培期間の長い作物は45分で経過するから注意してね☆\n※牛さんは少し特殊だから、遊び方ガイドの牛さん編を読んでね☆\n栽培期間の短い作物ならゲームを始めてから4日で収穫可能♪\n毎日コツコツお世話をすれば、必ず収穫ができるよ♪',
  '【プチヒント】\n菜々は基本的に次の作業のタイミングを教えてくれるけど、｢作業が早い｣って言ったら、少し時間を置いてから作業を進めてね♪\n逆に｢作業が遅れてる｣って言ったら、セリフが変わるまで作業を進めるといいよ♪',
  'ちゃんと収穫できた作物はMY MENUから「送付手続き」を選んでね、農家さんからみんなの所に採れ立て作物がお届けになるからね♪\n※収穫時の評価が低いと、ゲームで利用できるポイント交換になるからまたチャレンジしてね♪。',
  '【注意】\n畑っぴでは、旬の作物を農家さんから直送しているからね♪\n現在お届けできる作物は、ゲーム内で確認してね♪',
];

const textBg1 = [
  {
    title: 'その他タップ可能箇所',
    list: [
      {
        img1: require('../../assets/images/firstguide/ic_weather.png'),
        img2: null,
        text: '[天気]\n一週間の天気が確認できるよ♪',
      },
      {
        img1: require('../../assets/images/firstguide/ic_para.png'),
        img2: null,
        text: '	[パラメーター]\n畑・牛さんの状態を確認できるよ♪',
      },
    ],
  },
];
const textBg2 = [
  {
    title: 'メニューアイコン説明\n畑　/　牧場',
    list: [
      {
        img1: require('../../assets/images/firstguide/ic0100.gif'),
        img2: null,
        text: '[共通:菜々ちゃんアイコン]\n作業を進める',
      },
      {
        img1: require('../../assets/images/firstguide/ic0300.gif'),
        img2: require('../../assets/images/firstguide/ic0310.gif'),
        text:
          '[水やり]\n通常：\nじょうろなどを使う\n牛：\nウォーターカップを使う',
      },
      {
        img1: require('../../assets/images/firstguide/ic0400.gif'),
        img2: require('../../assets/images/firstguide/ic0410.gif'),
        text: '[追肥/えさ]\n通常：肥料を与える\n牛：干し草などを与える',
      },
      {
        img1: require('../../assets/images/firstguide/ic0500.gif'),
        img2: require('../../assets/images/firstguide/ic0510.gif'),
        text:
          '[除草/掃除]\n 通常：\nかま・除草機などを使う\n牛：\n平スコップを使う\n 掃除係りを雇う',
      },
      {
        img1: require('../../assets/images/firstguide/ic0200.gif'),
        img2: null,
        text: '[共通:薬を購入する]\n薬などを使う',
      },
      {
        img1: require('../../assets/images/firstguide/ic0600.gif'),
        img2: null,
        text: '[共通:お助けアイテム]\n状態を良くしてくれるお助けアイテムを使う',
      },
      {
        img1: require('../../assets/images/firstguide/ic0700.gif'),
        img2: null,
        text: '[共通:ポイント購入]\n道具を買うのに必要なポイントを購入する',
      },
      {
        img1: require('../../assets/images/firstguide/ic0800.gif'),
        img2: null,
        text:
          '[共通:閉鎖]\n畑or牧場を閉鎖する\n※一度閉鎖したらもう戻せないからね！',
      },
    ],
  },
];

const FirstGuidePage1 = () => {
  const goFirstGuideList = () => {
    Actions.firstGuide();
  };
  return (
    <ImageBackground
      style={FirstGuidePage1Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴとは？" />
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view1.png')}
          style={FirstGuidePage1Styles.img}
        />
        <ContentText item={contentList[0]} />
        {/* <Text>{'\n'}</Text> */}
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/photo1.png')}
          style={FirstGuidePage1Styles.img}
        />
        {/* <Text>{'\n'}</Text> */}
        <ContentText item={contentList[1]} />
        {/* <Text>{'\n'}</Text> */}
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view2.png')}
          style={FirstGuidePage1Styles.img}
        />
        {/* <Text>{'\n'}</Text> */}
        <ContentText item={contentList[2]} />
        {/* <Text>{'\n'}</Text> */}
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view3.png')}
          style={FirstGuidePage1Styles.img}
        />
        {/* <Text>{'\n'}</Text> */}
        <ContentText item={contentList[3]} />
        {/* <Text>{'\n'}</Text> */}
        {textBg1.map((item, i) => (
          <TextBgList item={item} key={i} />
        ))}
        {/* <Text>{'\n'}</Text> */}
        {textBg2.map((item, i) => (
          <TextBgList item={item} key={i} />
        ))}
        <AutoHeightImage
          width={responsiveWidth(100) - 20}
          source={require('../../assets/images/firstguide/view4.png')}
          style={FirstGuidePage1Styles.img}
        />
        {contentList.map(
          (item, i) => i > 3 && <ContentText key={i} item={item} />,
        )}
        <TouchableOpacity
          style={FirstGuidePage1Styles.btn}
          onPress={goFirstGuideList}>
          <LinearGradient
            colors={['#ffefaa', '#ffe155']}
            style={FirstGuidePage1Styles.btnBg}>
            <Text style={FirstGuidePage1Styles.btnText}>ガイドTOP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>{'\n\n\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuidePage1;

const FirstGuidePage1Styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 10,
  },
  btn: {
    backgroundColor: '#fadb4e',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#f4c63f',
    borderRadius: 12,
  },
  btnBg: {
    alignItems: 'center',
    borderRadius: 12,
  },
  btnText: {
    marginVertical: 12,
    fontWeight: 'bold',
    color: '#222',
  },
});
