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

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

import Header from '../../Components/Header';
import Menu from '../../Components/Menu';

const News = () => {

  const [showTag, setShowTag] = useState(undefined);

  return (
    <View style={NewsStyles.bg}>
      <View style={NewsStyles.title}>
        <Text style={{fontSize: 22}}>お知らせ</Text>
      </View>
      <ScrollView>
        <View style={NewsStyles.newsContent}>
          <TouchableOpacity
            style={NewsStyles.subTitle}
            onPress={() => setShowTag(0)}>
            <Text style={NewsStyles.subDate}>2018/11/15 00:15</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#ff0000'}}>[重要]</Text>
              <Text>初めて作物を収穫された方へ</Text>
            </View>
            <Text style={NewsStyles.director}>▼</Text>
          </TouchableOpacity>
          {showTag === 0 && (
            <View style={NewsStyles.subContent}>
              <Text style={{fontSize: 12}}>【初めて収穫された方】{'\n\n'}</Text>
              <Text style={{color: '#ff0000', fontSize: 12}}>
                皆様からの出荷のご依頼は、毎週水曜日10:00に集計し、生産者さん及びヤマト運輸へ連絡、{'\n'}
                その週の金曜日の出荷の準備をして頂いております。{'\n'}
                従いまして、水曜日の10:00を過ぎてしまった出荷のご依頼は次週分に回させて頂いております。{'\n'}
                ご理解ご協力のほどよろしくお願いいたします。
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={NewsStyles.subTitle}
            onPress={() => setShowTag(1)}>
            <Text style={NewsStyles.subDate}>2015/10/09 19:30</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#ff0000'}}>[サポートメール]</Text>
              <Text>ドメイン解除のお願い</Text>
            </View>
            <Text style={NewsStyles.director}>▼</Text>
          </TouchableOpacity>
          {showTag === 1 && (
            <View style={NewsStyles.subContent}>
              <Text style={{fontSize: 12}}>
                ■サポートメール関して{'\n\n'}
                最近、登録されたメールアドレス以外からお問い合わせを頂くケースが増えており、ご利用者を特定できません。{'\n\n'}
                サポート宛にお問い合わせを頂く際は、ログインした状態で件名に会員番号が表示される状態でお送りください。{'\n\n'}
                現在、お問い合わせへの返信がld-inc.jpから送信エラーになる方についてはsupport-hatakeppi@docomo.ne.jpより送信しております。しかし、こちらで送信してエラーにならない場合、迷惑メールに届いていることがあります。{'\n\n'}
                エラーにならない限り、こちらからのお知らせや回答は届いているものと考えておりますので、確認をお願いいたします。{'\n\n'}
                今後、ld-inc.jpから受信できるようドメイン解除の設定を必ず行なってください。{'\n\n '}
                ドメイン解除いただけない場合はへお問い合わせへの回答ができませんのでご注意ください。{'\n\n'}
                尚、お問い合わせへの回答は必ず24時間以内には行なっていますので、回答がない場合はドメイン解除の設定確認をお願いいたします。{'\n'}
                (2015/10/09 19:30)
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={NewsStyles.subTitle}
            onPress={() => setShowTag(2)}>
            <Text style={NewsStyles.subDate}>2012/05/19 19:00</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>ヤマトメールサービスの案内</Text>
            </View>
            <Text style={NewsStyles.director}>▼</Text>
          </TouchableOpacity>
          {showTag === 2 && (
            <View style={NewsStyles.subContent}>
              <View style={{padding: 8, flexDirection: 'row'}}>
                <Image
                  source={{
                    uri:
                      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/ui/em/em01.gif',
                  }}
                  style={{width: 14, height: 14}}
                />
                <Text style={{fontSize: 12, color: '#666'}}>
                  「ヤマトの便利なメールサービス」を掲載しました。{'\n'}
                  お届けの作物が農家さんから出荷されたことをメールでお知らせするサービスです。無料ですので、是非ご登録いただきますようお願いいたします。{'\n'}
                </Text>
              </View>
              <Text style={{fontSize: 12}}>
                スマートフォン/光iフレームの方{'\n'}
                「送付手続き」内
              </Text>
              <TouchableOpacity>
                <Text style={NewsStyles.linkText}>登録はコチラから</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 12}}>
                上記以外の方{'\n'}
                「サポートメニュー」内{'\n'}
              </Text>
              <TouchableOpacity>
                <Text style={NewsStyles.linkText}>登録はコチラから</Text>
              </TouchableOpacity>
              <Text style={{fontSize: 12}}>(2012/05/19)</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const NewsStyles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginTop: 20,
  },
  bg: {
    width: '90%',
    marginLeft: '5%',
    height: responsiveHeight(80),
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    position: 'relative',
    zIndex: 49,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsContent: {
    marginHorizontal: 8,
    marginVertical: 16,
  },
  subTitle: {
    paddingTop: 24,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 8,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#111',
    borderRadius: 4,
    marginTop: 5,
  },
  subDate: {
    position: 'absolute',
    fontSize: 12,
    top: 8,
    left: 8,
  },
  director: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    color: 'rgba(181, 181, 181, 1.00)',
    fontSize: 10,
    width: '100%',
  },
  subContent: {
    borderLeftWidth: 1,
    borderLeftColor: '#111',
    borderRightWidth: 1,
    borderRightColor: '#111',
    borderBottomWidth: 1,
    borderBottomColor: '#111',
    marginHorizontal: '1%',
    marginBottom: 8,
    padding: 8,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  linkText: {
    fontSize: 12,
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
});
