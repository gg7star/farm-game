import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header';
import Menu3 from '../../Components/Menu3';

const Yamato = () => {
  const openLink = () => {
    Linking.openURL(
      'http://cmypage.kuronekoyamato.co.jp/portal/custtempregpage',
    );
  };
  return (
    <ImageBackground
      style={YamatoStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <Header title="ヤマトのメールお知らせサービス" />
      <ScrollView>
        <AutoHeightImage
          width={responsiveWidth(100)}
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/yamato/ytop.gif',
          }}
        />
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={[YamatoStyles.regist, YamatoStyles.pageNav]}>
          <Text style={YamatoStyles.registText}>
            畑っぴでは鮮度の良い作物を{'\n'}
            受け取って頂くためヤマトの{'\n'}
            クロネコメンバーズ(無料)への{'\n'}
            登録をお願いしています。
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={['#6facd5', '#497bae']}
          style={YamatoStyles.subTitle}>
          <Text style={YamatoStyles.subTitleText}>
            クロネコメンバーズに登録すると・・・
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={[YamatoStyles.pageNavText, {color: '#060'}]}>
            ★作物が出荷されるとﾒ-ﾙが届く{'\n'}
            ★配達時間の指定・変更ができる{'\n'}
            ★配達場所の変更・転送ができる
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#6facd5', '#497bae']}
          style={YamatoStyles.subTitle}>
          <Text style={YamatoStyles.subTitleText}>注意事項</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ※1 ご登録されている住所・電話番号等を正確に入力して下さい。畑っぴでご登録されている情報と一致しない場合サービスのご案内ができません。
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ※2 メールの受信制限設定をされている方は
            <Text style={{color: '#ff3300'}}>@kuronekoyamato.co.jp</Text>
            からメールが受け取れるよう受信許可設定をしてください。
            ※尚、出荷に関する緊急の連絡をする場合もありますので
            <Text style={{color: '#ff3300'}}>@ld-inc.jp</Text>
            からも受信許可設定をして下さい。
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ※3 受信許可設定については各キャリアにお問い合わせ下さい。
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#6facd5', '#497bae']}
          style={YamatoStyles.subTitle}>
          <Text style={YamatoStyles.subTitleText}>登録手順はとても簡単!!</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ①下の「登録(無料)はｺﾁﾗから」ﾎﾞﾀﾝを押し、案内に従って希望のID・パスワードを入力したら利用規約に同意して送信する
          </Text>
          <AutoHeightImage
            width={responsiveWidth(100) - 30}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/yamato/y2.gif',
            }}
            style={YamatoStyles.contentImg}
          />
        </LinearGradient>
        <TouchableOpacity
          style={[YamatoStyles.goBtn, YamatoStyles.shadow]}
          onPress={openLink}>
          <Text style={YamatoStyles.subTitleText}>
            登録 (無料) はコチラから
          </Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ②返信メールに記載されたURLにアクセスしたら、名前・電話番号など必要事項を入力し、サービスを選択する
          </Text>
          <AutoHeightImage
            width={responsiveWidth(100) - 30}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/yamato/y3.gif',
            }}
            style={YamatoStyles.contentImg}
          />
        </LinearGradient>
        <LinearGradient
          colors={['#f9f9f9', '#eeeeee']}
          style={YamatoStyles.pageNav}>
          <Text style={YamatoStyles.pageNavText}>
            ③入力内容を確認して、「登録」を押すと登録メールが配信され、登録完了！！
          </Text>
          <AutoHeightImage
            width={responsiveWidth(100) - 30}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/yamato/y4.gif',
            }}
            style={YamatoStyles.contentImg}
          />
        </LinearGradient>
        <TouchableOpacity
          style={[YamatoStyles.goBtn, YamatoStyles.shadow]}
          onPress={openLink}>
          <Text style={YamatoStyles.subTitleText}>
            登録 (無料) はコチラから
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Menu3 />
    </ImageBackground>
  );
};

export default Yamato;

const YamatoStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  regist: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  registText: {
    color: '#c00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pageNav: {
    borderWidth: 0.5,
    borderColor: '#aaa',
  },
  pageNavText: {
    marginVertical: 8,
    marginHorizontal: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  subTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentImg: {
    marginLeft: 15,
    marginBottom: 15,
  },
  goBtn: {
    marginHorizontal: 5,
    backgroundColor: '#390',
    marginVertical: 8,
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    borderColor: '#111',
    borderWidth: 1,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
});
