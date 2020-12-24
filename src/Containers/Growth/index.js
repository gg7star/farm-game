import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import Dash from 'react-native-dash';
import {Actions} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

import {apiGrowth} from '../../services/apis/farm_data';

import Menu from '../../Components/Menu';
import GrowthItem from './GrowthItem';

// const growthList = [
//   {
//     gameName: '宝箱(11/12)(731)',
//     farmName: '宝箱(11/12)農場',
//     trainingPeriod: '2016/12/27～2016/12/27',
//     currentState: 'ポイント交換済み',
//   },
//   {
//     gameName: '宝箱(11/12)(731)',
//     farmName: '宝箱(11/12)農場',
//     trainingPeriod: '2016/12/27～2016/12/27',
//     currentState: 'ポイント交換済み',
//   },
//   {
//     gameName: '宝箱(11/12)(731)',
//     farmName: '宝箱(11/12)農場',
//     trainingPeriod: '2016/12/27～2016/12/27',
//     currentState: 'ポイント交換済み',
//   },
//   {
//     gameName: '宝箱(11/12)(731)',
//     farmName: '宝箱(11/12)農場',
//     trainingPeriod: '2016/12/27～2016/12/27',
//     currentState: 'ポイント交換済み',
//   },
// ];

const perPage = 10;

const Growth = (props) => {
  const [growthList, setGrowthList] = useState(undefined);
  const [imageLoading, setImageLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const getGrowth = async () => {
    setImageLoading(true);
    const response = await apiGrowth(props.user.user.id, perPage, pageNum);
    setImageLoading(false);
    if (response) {
      console.log(64, response.dataset);
      setGrowthList(response.dataset);
      setTotalCount(response.pagination.total_count);
      setTotalPages(response.pagination.total_pages);
    }
  };

  useEffect(() => {
    getGrowth();
  }, []);

  const goPrev = () => {
    let prev = pageNum - 1;
    if (prev === 0) prev = 1;
    setPageNum(prev);
    getGrowth();
  };

  const goNext = () => {
    let next = pageNum + 1;
    if (pageNum === totalPages) next = totalPages;
    setPageNum(next);
    getGrowth();
  };

  return (
    <ImageBackground
      style={GrowthStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <Spinner visible={imageLoading} />
      <ScrollView style={{flexDirection: 'column'}}>
        <View style={GrowthStyles.header}>
          <Text style={GrowthStyles.headerText}>栽培履歴</Text>
        </View>
        <View style={GrowthStyles.content}>
          {growthList &&
            growthList.length > 0 &&
            growthList.map((item, i) => <GrowthItem key={i} item={item} />)}
          {totalCount > 0 && (
            <View style={GrowthStyles.pageNum}>
              <Text>
                {totalCount}件中 {(pageNum - 1) * perPage + 1}～
                {pageNum * perPage < totalCount
                  ? pageNum * perPage
                  : totalCount}
                件表示中
              </Text>
            </View>
          )}
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
          <View style={GrowthStyles.pagenation}>
            <TouchableOpacity style={GrowthStyles.btn} onPress={goPrev}>
              <Text style={GrowthStyles.headerText}>戻る</Text>
            </TouchableOpacity>
            <Text>
              {pageNum}/{totalPages}
            </Text>
            <TouchableOpacity style={GrowthStyles.btn} onPress={goNext}>
              <Text style={GrowthStyles.headerText}>次へ</Text>
            </TouchableOpacity>
          </View>
          <Dash
            style={{height: 0.3, marginBottom: 8}}
            dashColor="rgb(142, 142, 142)"
            dashThickness={0.5}
          />
        </View>
      </ScrollView>
      <Menu item="myfarm" />
    </ImageBackground>
  );
};

// export default Growth;

const GrowthStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
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
  content: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 8,
    borderRadius: 8,
  },
  pageNum: {
    alignItems: 'center',
  },
  pagenation: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  btn: {
    backgroundColor: 'rgba(29, 187, 47, 1.00)',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});
const mapStateToProps = (state) => ({
  user: state.user || {},
});

export default connect(mapStateToProps)(Growth);
