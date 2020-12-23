import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import Spinner from 'react-native-loading-spinner-overlay';
import {Actions} from 'react-native-router-flux';

import Menu from '../../Components/Menu';

import Farm from './Farm.js';
import {apiMyFarms} from '../../services/apis/farm_data';

// const farmList = [
//   {
//     id: 364197,
//     name: '無料ゲーム：白菜農場',
//     date: '155日目',
//     farmImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp/images/farms/364145.jpg',
//     cropImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp/images/crops/1609/icon.png',
//   },
//   {
//     id: 364197,
//     name: 'はちみつ(小瓶セット)農場',
//     date: '7日目',
//     farmImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp/images/farms/53541.jpg',
//     cropImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp/images/crops/555/icon.png',
//   },
//   {
//     id: 364197,
//     name: '',
//     date: '',
//     farmImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/newcreate.png',
//     cropImg: '',
//   },
//   {
//     id: 364197,
//     name: '',
//     date: '',
//     farmImg:
//       'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img/newcreate.png',
//     cropImg: '',
//   },
// ];
const MyFarm = (props) => {
  const [myFarmList, setMyFarmList] = useState(undefined);
  const [imageLoading, setImageLoading] = useState(false);
  const getFarms = async () => {
    // console.log(60, props.user.user.id);
    setImageLoading(true);
    const response = await apiMyFarms(props.user.user.id);
    setImageLoading(false);
    // console.log(62, response);
    if (response && response.dataset) {
      setMyFarmList(response.dataset);
    }
  };

  useEffect(() => {
    getFarms();
  }, []);

  return (
    <ImageBackground
      style={MyFarmStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <Spinner visible={imageLoading} />
      <ScrollView>
        <View style={MyFarmStyles.header}>
          <Text style={MyFarmStyles.headerText}>MY FARM</Text>
          <View style={MyFarmStyles.headerAccount}>
            <Text style={{color: '#212121', fontSize: 12, textAlign: 'right'}}>
              会員番号:000011
            </Text>
            <View style={{paddingHorizontal: 4, flexDirection: 'row'}}>
              <Text style={{color: '#67b500', fontSize: 12}}>[管理者]</Text>
              <Text style={{color: '#212121', fontSize: 12}}>スライムさん</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity style={MyFarmStyles.farmNews}>
          <Text style={{color: '#ff0000'}}>[重要]</Text>
          <Text>初めて作物を収穫された方へ</Text>
        </TouchableOpacity> */}

        <View style={MyFarmStyles.farmData}>
          <ImageBackground
            style={{width: '100%'}}
            // imageStyle={{borderRadius: 8}}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/images/20150422/category_bg2.gif',
            }}
            resizeMode="repeat">
            <View style={MyFarmStyles.myFarmTable}>
              {myFarmList &&
                myFarmList.map((item, i) => <Farm key={i} item={item} />)}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <Menu item="myfarm" />
    </ImageBackground>
  );
};

// export default MyFarm;

const MyFarmStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
    // marginRight: -50
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
  headerAccount: {
    backgroundColor: '#dcedc8',
    position: 'absolute',
    right: 0,
    borderRadius: 4,
    height: 32,
    margin: 2,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  farmNews: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 8,
    borderRadius: 8,
    flexDirection: 'row',
  },
  farmData: {
    marginHorizontal: 8,
    marginVertical: 16,
  },
  myFarmTable: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: '0%',
  },
});

const mapStateToProps = (state) => ({
  user: state.user || {},
});

// const mapDispatchToProps = (dispatch) => ({
//   loginActions: bindActionCreators(userActions.login, dispatch),
// });

export default connect(mapStateToProps)(MyFarm);
