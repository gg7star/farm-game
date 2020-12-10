import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import {apiPoint} from '../../services/apis/point';

// const pointData = {
//   title: '現在のポイント:70327っぴ',
//   news: '2020年04月01日をもってポイント購入は停止致しました。',
// };

const Point = (props) => {
  const [member, setMember] = useState(undefined);
  useEffect(() => {
    console.log('===== props.user: ', props.user);
    const user = props.user && props.user.user;
    user && user.id && setMember(user.id);
  }, []);
  const goHistory = () => {
    Actions.pointHistory();
  };

  const [pointData, setPointData] = useState({});

  const getPoint = async () => {
    if (member) {
      const response = await apiPoint(member);
      if (response) {
        setPointData(response);
      }
    }
  };
  getPoint();

  return (
    <ImageBackground
      style={PointStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="ポイント購入" />

        <View style={PointStyles.name}>
          {pointData && (
            <Text style={PointStyles.nameText}>{pointData.title}</Text>
          )}
        </View>

        <AutoHeightImage
          width={responsiveWidth(100)}
          source={require('../../assets/images/listtop.png')}
        />

        <View style={PointStyles.content}>
          <LinearGradient colors={['#fffadf', '#fff3a5']}>
            {pointData && (
              <Text style={PointStyles.dateText}>{pointData.news}</Text>
            )}
          </LinearGradient>
          <LinearGradient colors={['#6facd5', '#497bae']}>
            <Text style={[PointStyles.dateText, {color: '#fff'}]}>
              ポイント購入履歴
            </Text>
          </LinearGradient>
          <LinearGradient colors={['#ffefaa', '#ffe155']}>
            <TouchableOpacity style={PointStyles.history} onPress={goHistory}>
              <Text style={PointStyles.historyText}>
                購入したポイントをみる
              </Text>
              <View style={PointStyles.iconBg}>
                <Image
                  style={PointStyles.iconNextImg}
                  source={require('../../assets/images/icons-36-white.png')}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

// export default Point;

const PointStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  name: {
    margin: '5%',
    borderColor: '#600',
    borderWidth: 3,
    backgroundColor: '#ffcc33',
    borderRadius: 8,
  },
  nameText: {
    fontSize: 16,
    margin: 10,
  },
  content: {
    width: '100%',
    borderColor: '#663300',
    borderWidth: 1,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    color: '#222222',
  },
  history: {
    marginVertical: 25,
    marginLeft: 15,
  },
  historyText: {
    color: '#630',
    fontSize: 16,
    fontWeight: 'bold',
    width: '90%',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    position: 'absolute',
    right: 10,
    top: '25%',
    borderRadius: 9,
    overflow: 'hidden',
  },
  iconNextImg: {
    width: 776,
    height: 18,
    marginLeft: -108,
  },
});

const mapStateToProps = (state) => ({
  user: state.user || {},
});

export default connect(mapStateToProps)(Point);