import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Dash from 'react-native-dash';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Header from '../../Components/Header';

const Event = () => {
  const goHomeClick = () => {
    Actions.home();
  };

  return (
    <ImageBackground
      style={EventStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <ScrollView>
        <Header title='サービス終了のお知らせ' />        
        <View style={EventStyles.corner}>
          <View style={[EventStyles.prizeText, EventStyles.topCorner]}>
            <Text style={[EventStyles.headerText, EventStyles.contentTitle]}>
              詳細
            </Text>
          </View>

          <View style={{margin: 8}}>
            <Text style={{fontSize: 14, lineHeight: 20}}>
              いつも『畑っぴ』をご利用いただきましてありがとうございます。{'\n'}
              突然のご案内となりますが、2010年6月のサービス開始以来、多くの皆様にお楽しみいただきました『畑っぴ』は、今後お客様にご満足いただけるサービスの提供が困難であるという結論に至りました為、誠に残念でございますが
              <Text
                style={{color: 'rgba(214, 0, 3, 1.00)', fontWeight: 'bold'}}>
                2020年4月30日(木)12：00
              </Text>
              をもちまして､サービスを終了することを決定いたしました。{'\n\n'}
              皆様方の多大なる応援を頂きサービス開始から10年を迎えておりましたが、この度のご案内となりましたことを心よりお詫び申し上げます。{'\n\n'}
              尚、サービス終了に伴い以下のスケジュールもちまして｢畑っぴ｣を終了したく存じます。
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>
                ★サービス終了までのスケジュール{'\n\n'}
              </Text>
              〇2019年10月30日（水）12：00{'\n'}
              新規会員登録停止・新規ゲーム最終更新{'\n\n'}
              〇2020年4月1日（水）00：00{'\n'}
              課金停止{'\n'}
              ※当初4月8日を予定しておりましたが、システム更新の関係により変更になりました。
              {'\n'}
              誠に申し訳ございません。{'\n\n'}
              〇2020年4月8日（水）12：00{'\n'}
              <Text style={{textDecorationLine: 'line-through'}}>
                課金停止・
              </Text>
              最終出荷手続き日{'\n\n'}
              〇2020年4月10日（金）{'\n'}
              最終出荷予定日（天候の影響により遅延する場合がございます。）
              {'\n\n'}
              〇2020年4月30日（木）12：00{'\n'}
              閉鎖{'\n\n'}
            </Text>
            <Dash
              dashColor="rgb(142, 142, 142)"
              dashThickness={0.5} 
              dashGap={0}
              style={{marginBottom: 8}}
            />
            <Text style={{fontSize: 14, lineHeight: 20}}>
              <Text style={{fontWeight: 'bold'}}>
                ★閉鎖に伴うポイント購入関しまして{'\n'}
              </Text>
              〇サービス終了告知日時以降に購入したポイントの有効期限はサービス終了日までとさせていただきます。{'\n'}
              <TouchableOpacity>
                <Text
                  style={{color: '#0000ff', textDecorationLine: 'underline'}}>
                  利用規約 第5条の変更{'\n'}
                </Text>
              </TouchableOpacity>
            </Text>
            <Dash
              dashColor="rgb(142, 142, 142)"
              dashThickness={0.5}
              dashGap={0}
              style={{marginBottom: 8}}
            />
            <Text style={{fontSize: 14, lineHeight: 20}}>
              <Text style={{fontWeight: 'bold'}}>
                ★閉鎖に伴うMPTランキングに関しまして{'\n'}
              </Text>
              〇10月のランキング発表をもちまして終了させていただきます。{'\n'}
            </Text>
            <Dash
              dashColor="rgb(142, 142, 142)"
              dashThickness={0.5}
              dashGap={0}
              style={{marginBottom: 8}}
            />

            <Text style={{fontSize: 14, lineHeight: 20}}>
              永らくご利用いただきまして､誠にありがとうございました｡{'\n\n'}
              代表取締役{'\n'}
              宮崎尚登{'\n\n'}
              なお､ご不明な点につきましては､下記までお問い合せください｡{'\n'}
              何卒よろしくお願い申し上げます｡{'\n\n'}
              <TouchableOpacity>
                <Text
                  style={{color: '#0000ff', textDecorationLine: 'underline'}}>
                  info@ld-inc.jp
                </Text>
              </TouchableOpacity>
            </Text>
            <Dash
              dashColor="rgb(142, 142, 142)"
              dashThickness={0.5}
              style={{marginBottom: 8, marginTop: -10}}
            />
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={EventStyles.goHomeBtn}
                onPress={() => goHomeClick()}>
                <Text style={EventStyles.goHomeText}>トップへ ▶</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Event;

const EventStyles = StyleSheet.create({
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
    alignItems: 'center',
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
  goHomeBtn: {
    backgroundColor: '#dfa600',
    borderRadius: 8,
    alignItems: 'center',
  },
  goHomeText: {
    fontWeight: 'bold',
    color: '#630',
    marginHorizontal: 32,
    marginVertical: 8,
  },
});
