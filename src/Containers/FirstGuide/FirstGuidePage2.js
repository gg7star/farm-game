import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import SubItem from './SubItem';

const subTitleList = [
  '時間の経過',
  'お世話タイミング',
  'ウンチがいっぱい…',
  '病気かな',
];

const FirstGuidePage2 = () => {
  const [selectItem, setSelectItem] = useState(undefined);
  const goFirstGuideList = () => {
    Actions.firstGuide();
  };
  const handleClickItem = (e) => {
    if (selectItem === e) {
      setSelectItem(undefined);
    } else {
      setSelectItem(e);
    }
  };
  return (
    <ImageBackground
      style={FirstGuidePage2Styles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="畑っぴガイド" />
        <SubItem
          item={subTitleList[0]}
          id={0}
          status={selectItem === 0}
          handleClick={handleClickItem}
          top={true}
          bottom={false}
        />
        {selectItem === 0 && (
          <View style={FirstGuidePage2Styles.content}>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                ゲーム内の1日は、現実時間の24時間で進むの♪
              </Text>
            </Text>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                ゲームの時間は、朝5時からスタートするよ！お世話できる時間は21時までだよ！
              </Text>
            </Text>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                農場開始から24時間以上経った後に農場にログインすると、次の日の朝5時に進むよ♪
              </Text>
            </Text>
            <Text style={FirstGuidePage2Styles.contentText}>
              動物さんは、農場にログインしない限り成長しないままだよ！{'\n'}
              ★例)リアル時間の10時に始める(ゲーム内ではこの時5時){'\n'}
              ※つまり深夜に始めると、その日のゲーム内では深夜～朝にかけてお世話しなきゃいけないから注意してね!!
              {'\n'}
            </Text>
            <Text>
              <AutoHeightImage
                width={25}
                source={require('../../assets/images/firstguide/icon01.png')}
              />
              <Text
                style={[FirstGuidePage2Styles.contentText, {color: '#ffffcc'}]}>
                チビ菜々から特別アドバイス
              </Text>
            </Text>
            <Text style={FirstGuidePage2Styles.contentText}>
              動物さんの生活リズムとあなたの生活リズムを合わせてお世話すると面倒が見
              やすいよ♪ 生活スタイルに合わせて農場へログインする時間を決めてね！
            </Text>
          </View>
        )}
        <SubItem
          item={subTitleList[1]}
          id={1}
          status={selectItem === 1}
          handleClick={handleClickItem}
          top={false}
          bottom={false}
        />
        {selectItem === 1 && (
          <View style={FirstGuidePage2Styles.content}>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                朝・昼・夕以外にも動物さんの様子に注意をしながらお世話をしてね！ 寝る前のお世話も忘れずにね♪
              </Text>
            </Text>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                毎日の作業をきちんとやらないと、評価が下がるよ！一気にお世話するのはおすすめしないよ・・・。
              </Text>
            </Text>
          </View>
        )}
        <SubItem
          item={subTitleList[2]}
          id={2}
          status={selectItem === 2}
          handleClick={handleClickItem}
          top={false}
          bottom={false}
        />
        {selectItem === 2 && (
          <View style={FirstGuidePage2Styles.content}>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                ウンチを溜めると病気になっちゃうよ♪早めに掃除してあげてね！
              </Text>
            </Text>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                ヘルパーさんを使うと、2日間掃除をしてくれるよ♪環境も良くなる素敵なアイテムなの♪♪
              </Text>
            </Text>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                お魚はウンチではなく網が汚れていくの！水中用高圧洗浄機でお掃除をして、綺麗にしてあげてね♪
              </Text>
            </Text>
          </View>
        )}
        <SubItem
          item={subTitleList[3]}
          id={3}
          status={selectItem === 3}
          handleClick={handleClickItem}
          top={false}
          bottom={true}
        />
        {selectItem === 3 && (
          <View style={FirstGuidePage2Styles.content}>
            <Text>
              <AutoHeightImage
                width={14}
                source={{
                  uri:
                    'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em08.gif',
                }}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                パラメーターに
              </Text>
              <AutoHeightImage
                width={25}
                source={require('../../assets/images/firstguide/ic_caution.gif')}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                がでているときは病気だよ！くすり・注射・点滴・ダイエットキャンプで治してあげてね！ただしそれぞれ治癒力が違うよ♪1回では治らない物もあるので注意してね！
              </Text>
            </Text>
            <Text>
              <Text style={FirstGuidePage2Styles.contentText}>
                治癒するアイテムは畑をタップして、
              </Text>
              <AutoHeightImage
                width={25}
                source={require('../../assets/images/firstguide/ic0200.gif')}
              />
              <Text style={FirstGuidePage2Styles.contentText}>
                から買ってね♪
              </Text>
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={FirstGuidePage2Styles.btn}
          onPress={goFirstGuideList}>
          <LinearGradient
            colors={['#ffefaa', '#ffe155']}
            style={FirstGuidePage2Styles.btnBg}>
            <Text style={FirstGuidePage2Styles.btnText}>ガイドTOP</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>{'\n\n\n'}</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default FirstGuidePage2;

const FirstGuidePage2Styles = StyleSheet.create({
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
    marginTop: 10,
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
  content: {
    marginHorizontal: 16,
    backgroundColor: '#f60',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  contentText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
