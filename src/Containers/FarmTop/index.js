import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Modal,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import LinearGradient from 'react-native-linear-gradient';
import AutoHeightImage from 'react-native-auto-height-image';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  apiFarmData,
  apiDeleteFarm,
  apiSubItems,
  apiUseItems,
  apiFarmStatus,
  apiSubItemsByAction,
} from '../../services/apis/farm_data';

import GameMenu from '../../Components/GameMenu';

import GameProgressBar from './GameProgressBar';
import Weather from './Weather';
import Nutrition from './Nutrition';
import Moisture from './Moisture';
import Calendar from './Calendar';
import GameEngine from './GameEngine';
import TopNana from './TopNana';
import TopHatakeMenu from './TopHatakeMenu';
import TopItemMenu from './TopItemMenu';
import TopActionMenu from './TopActionMenu';
import AdMob from '../AdMob';
import FarmBgImg from './FarmBgImg';
import YesNoPanel from './YesNoPanel';
import FarmStatusList from './FarmStatusList';
import TopStatus from './TopStatus';

const nanaSpot =
  'スライムさん、こんにちは♪菜々と一緒にキャベツを作って餃子をゲットしよう♪\nまずはハウスの骨組みを建てよう！';

const weatherList = [
  {
    date: '1月3日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png',
  },
  {
    date: '1月4日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather2.png',
  },
  {
    date: '1月5日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather5.png',
  },
  {
    date: '1月6日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png',
  },
  {
    date: '1月7日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png',
  },
  {
    date: '1月8日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png',
  },
  {
    date: '1月9日',
    image:
      'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/weather1.png',
  },
];

var Constants = {
  FarmType: {
    CROP: 0,
    RANCH: 1,
    TANBO: 2,
    HYPO: 3,
    SALT: 4,
    FISH: 5,
    HONEY: 6,
    MISO: 7,
  },
  ItemType: {
    CROP: 1,
    RANCH: 2,
    BERRY: 3,
    MEGA: 4,
    MEGA_RANCH: 5,
    TOMATO: 6,
    BUTA: 7,
    CHICKEN: 8,
    MEAT: 9,
    SALT: 10,
    FISH: 11,
    HONEY: 12,
    MISO: 13,
  },
  Ranch: {
    MAX_VALUE: 200,
    MAX_LEVEL: 10,
    DATES: [
      [2010, 11, 24],
      [2011, 1, 3],
      [2011, 3, 8],
      [2011, 6, 24],
      [2011, 8, 15],
      [2011, 10, 23],
      [2012, 0, 17],
      [2012, 3, 5],
      [2012, 7, 15],
      [2012, 9, 23],
      [2012, 11, 1],
      [2012, 11, 20],
      [2012, 3, 15],
    ],
    SEASONS: [3, 3, 0, 1, 2, 3, 3, 0, 1, 2, 3, 3],
    DATES_BUTA: [
      [2012, 7, 10],
      [2012, 7, 19],
      [2012, 8, 4],
      [2012, 8, 29],
      [2012, 9, 19],
      [2012, 11, 8],
      [2012, 1, 6],
      [2012, 2, 8],
      [2012, 3, 7],
    ],
    SEASONS_BUTA: [1, 1, 2, 2, 2, 3, 3, 3, 4],
    DATES_CHICKEN: [
      [2012, 3, 10],
      [2012, 3, 30],
      [2012, 4, 20],
      [2012, 5, 8],
      [2012, 5, 25],
      [2012, 6, 14],
      [2012, 6, 31],
    ],
    SEASONS_CHICKEN: [0, 0, 0, 0, 0, 1, 1],
    DATES_FISH: [
      [2011, 4, 12],
      [2011, 5, 2],
      [2011, 7, 30],
      [2011, 10, 4],
      [2011, 2, 19],
      [2011, 4, 5],
      [2011, 6, 14],
      [2011, 9, 2],
      [2011, 0, 10],
      [2011, 2, 26],
      [2011, 4, 11],
      [2011, 6, 19],
      [2011, 8, 9],
      [2011, 10, 14],
      [2011, 1, 20],
      [2011, 3, 9],
      [2011, 5, 21],
      [2011, 8, 18],
      [2011, 10, 2],
      [2011, 11, 2],
    ],
    SEASONS_FISH: [0, 1, 1, 2, 3, 0, 1, 2, 3, 0, 0, 1, 2, 2, 3, 0, 1, 2, 2, 3],
    DATES_HONEY: [
      [2011, 5, 15],
      [2011, 6, 4],
      [2011, 7, 3],
      [2011, 8, 10],
      [2011, 9, 2],
      [2011, 10, 2],
      [2011, 11, 1],
      [2011, 2, 2],
      [2011, 3, 2],
      [2011, 5, 15],
    ],
    SEASONS_HONEY: [1, 1, 1, 1, 2, 2, 3, 3, 0, 1],
    DATES_HONEY8: [
      [2011, 5, 15],
      [2011, 6, 4],
      [2011, 7, 3],
      [2011, 8, 10],
      [2011, 10, 2],
      [2011, 11, 1],
      [2011, 3, 2],
      [2011, 5, 15],
    ],
    SEASONS_HONEY8: [1, 1, 1, 1, 2, 3, 0, 1],
    DATES_MISO: [
      [2012, 1, 1],
      [2012, 1, 2],
      [2012, 1, 3],
      [2012, 6, 10],
      [2012, 10, 1],
    ],
    SEASONS_MISO: [3, 3, 3, 1, 2],
    DATES_OLIVE: [
      [2013, 10, 20],
      [2013, 10, 21],
      [2013, 10, 22],
      [2013, 10, 23],
    ],
    SEASONS_OLIVE: [2, 2, 2, 2],
  },
  Season: {
    SPRING: 0,
    SUMMER: 1,
    AUTUMN: 2,
    WINTER: 3,
    BORDER: [
      [2, 4], // 3/4
      [5, 6], // 6/6
      [9, 1], // 10/1
      [11, 8], // 12/8
    ],
  },
  Hatake: {
    MAX_VALUE: 80,
    MAX_LEVEL: 8,
  },
  Yamamoto: {
    GAREKI: [0, 956, 981, 982, 983, 984, 985],
  },
  CategoryDesc: {
    HATAKE: [
      '農具',
      '石灰',
      '肥料',
      'くすり',
      'ペット',
      'お家',
      '農園',
      'スペシャル',
    ],
    RANCH: ['道具', 'えさ', 'くすり', 'ペット', 'お家', '農園', 'スペシャル'],
    BERRY: ['農具', '石灰', '肥料', 'くすり', 'ペット', 'スペシャル'],
    RANCH_NOBKG: ['道具', 'えさ', 'くすり', 'ペット', 'スペシャル'],
    FISH: ['道具', 'えさ', 'くすり'],
    HONEY: ['道具', 'えさ', 'くすり', 'スペシャル'],
  },
  FarmStatus: {
    OK: 1,
    FINISH: 2,
    DONE: 3,
    WAIT: 4,
    CANCEL: 5,
  },
};

var _interval;

const FarmTop = ({farmInfo, currentSelectedItem}) => {
  const [loadTime, setLoadTime] = useState(0);
  const [topNana, setTopNana] = useState(undefined);
  const [curNanaTag, setCurNanaTag] = useState(undefined);
  const [topHatakeMenu, setTopHatakeMenu] = useState(undefined);
  const [topItemMenu, setTopItemMenu] = useState(undefined);
  const [itemName, setItemName] = useState({name: currentSelectedItem});
  // const [showAdmob, setShowAdmob] = useState(false);
  const [bgImg, setBgImg] = useState([]);
  const [farmData, setFarmData] = useState(undefined);
  const [curWeather, setCurWeather] = useState(undefined);
  const [imageLoading, setImageLoading] = useState(false);
  const [closeFarm, setCloseFarm] = useState(false);
  const [point, setPoint] = useState(false);
  const [panel, setPanel] = useState(undefined);
  const [eventItem, setEventItem] = useState(undefined);
  const [farmStatus, setFarmStatus] = useState(undefined);

  useEffect(() => {
    getBgImg();
    if (currentSelectedItem === 'topCloseIcon') {
      setCloseFarm(true);
    } else if (currentSelectedItem === 'topPiIcon') {
      setPoint(true);
    } else {
      currentSelectedItem && getSubItems(currentSelectedItem);
      // _interval = setInterval(() => callImg(), 300000);
      // return () => {
      //   clearInterval(_interval);
      // };
    }
  }, []);

  const getBgImg = async () => {
    console.log(303, 'Background');
    // setImageLoading(true);
    const response = await apiFarmData(farmInfo.id);
    console.log(306, response);
    // setImageLoading(false);
    if (response && response.images.imgAdd) {
      setBgImg(response.images.imgAdd);
      setFarmData(response.farm);
    }

    const responseWeather = await apiFarmData(farmInfo.id);
    if (responseWeather && responseWeather.weather_predictions) {
      setCurWeather(response.weather_predictions);
    }
  };

  const getSubItems = async (data) => {
    if (data) {
      setImageLoading(true);
      console.log(322, data);
      const response = await apiSubItems(farmInfo.id, data);
      setImageLoading(false);
      if (response && response.items) {
        setTopItemMenu(response.items);
        console.log(327, response.items);
      }
    }
  };

  const callImg = () => {
    if (loadTime === 0) {
      getBgImg();
    }
    setLoadTime((loadTime + 1) % 10);
  };

  const closeTimer = () => {
    clearInterval(_interval);
  };

  const closeTopNana = () => {
    setCurNanaTag(undefined);
  };

  const showNanaSpot = () => {
    setCurNanaTag('nana');
    setTopNana(nanaSpot);
  };

  const showWeather = async () => {
    setImageLoading(true);
    const response = await apiFarmData(farmInfo.id);
    setImageLoading(false);
    if (response && response.weather_predictions) {
      setTopNana(response.weather_predictions);
      setCurNanaTag('weather');
    }
  };

  const showTopHatakeMenu = () => {
    !topHatakeMenu && setTopHatakeMenu(true);
  };

  const closeTopHatakeMenu = () => {
    setTopHatakeMenu(false);
  };

  const closeTopItemMenu = () => {
    setTopItemMenu(false);
  };

  // const handleClickItem = (ItemName) => {
  //   setTopHatakeMenu(false);
  //   if (ItemName === 'topCloseIcon') {
  //     setCloseFarm(true);
  //   } else if (ItemName === 'topPiIcon') {
  //     setPoint(true);
  //   } else {
  //     console.log(358, ItemName);
  //     getSubItems(ItemName);
  //   }
  // };

  const goCloseFarm = async () => {
    const response = await apiDeleteFarm(farmInfo.id);
    if (response) {
      setCloseFarm(false);
      Actions.myfarm();
    }
  };

  const handleClosePoint = () => {
    setPoint(false);
  };

  const showYesNoPanel = (e) => {
    setTopItemMenu(undefined);
    setPanel(e);
  };

  const getSubItemsByAction = async (data) => {
    if (data) {
      setImageLoading(true);
      const response = await apiSubItemsByAction(farmInfo.id, data);
      setImageLoading(false);
      if (response) {
        setTopItemMenu(response.items);
        console.log(406, response);
      }
    }
  };

  const clickAction = (e) => {
    getSubItemsByAction(e.action_type);
  };

  const handleCloseYesNoPanel = () => {
    setPanel(undefined);
  };

  const handleWorkItem = async () => {
    setPanel(undefined);
    console.log(425, 'Work Item', farmInfo.id, panel);
    setImageLoading(true);
    const response = await apiUseItems(farmInfo.id, panel.item_id);
    setImageLoading(false);
    console.log(429, response);
    if (
      response &&
      response.result_image.image &&
      response.result_image.image.length > 0
    ) {
      setEventItem(response.result_image.image);
      console.log(428, response.result_image.image);
      setPanel(undefined);
      getBgImg();
      setTimeout(() => {
        console.log(432, 'New Load');
        setEventItem(undefined);
      }, 20000);
    }
  };

  const closeEventItem = () => {
    setEventItem(undefined);
  };

  const handleClickNutrition = async () => {
    setImageLoading(true);
    const response = await apiFarmStatus(farmInfo.id);
    console.log(453, farmInfo.id, response);
    setImageLoading(false);
    if (response) {
      setFarmStatus(response);
    }
  };

  const closeStatus = async () => {
    setFarmStatus(undefined);
  };

  return (
    <ImageBackground
      style={FarmTopStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <View style={FarmTopStyles.header}>
        <Text style={FarmTopStyles.headerText}>{farmInfo.name}</Text>
      </View>

      {bgImg.length > 0 && <FarmBgImg bgData={bgImg} />}
      <Weather clickWeather={showWeather} curWeather={curWeather} />
      {farmData && (
        <Nutrition
          handleClickNutrition={handleClickNutrition}
          item={farmData}
        />
      )}
      {farmData && (
        <Moisture handleClickNutrition={handleClickNutrition} item={farmData} />
      )}
      {farmData && farmData.pest > 0 && farmData.disease && (
        <TopStatus handleClickNutrition={handleClickNutrition} />
      )}
      {farmStatus && (
        <FarmStatusList statusList={farmStatus} closeStatus={closeStatus} />
      )}
      {curWeather && curWeather.length > 0 && (
        <Calendar item={curWeather[0].date} />
      )}
      <Spinner visible={imageLoading} />
      <GameEngine
        clickTopNana={showNanaSpot}
        clickTopHatakeMenu={showTopHatakeMenu}
      />

      {curNanaTag && (
        <TopNana item={curNanaTag} data={topNana} handleClick={closeTopNana} />
      )}

      {topHatakeMenu && (
        <TopHatakeMenu
          handleClick={closeTopHatakeMenu}
          handleCloseTimer={closeTimer}
          farmInfo={farmInfo}
        />
      )}

      {topItemMenu &&
        topItemMenu.length > 0 &&
        topItemMenu[0].type === 'action' && (
          <TopActionMenu
            handleClick={closeTopItemMenu}
            itemList={topItemMenu}
            handlieClickAction={clickAction}
          />
        )}

      {topItemMenu &&
        topItemMenu.length > 0 &&
        topItemMenu[0].type === 'item' && (
          <TopItemMenu
            handleClick={closeTopItemMenu}
            itemList={topItemMenu}
            handleClickItem={showYesNoPanel}
          />
        )}

      {closeFarm && (
        <View style={FarmTopStyles.closeFarm}>
          <View style={FarmTopStyles.closeHeader}>
            <Text style={{color: '#fff'}}>農場閉鎖</Text>
          </View>
          <LinearGradient
            colors={['#eee', '#ddd']}
            style={FarmTopStyles.closeContent}>
            <Text>本当に閉鎖してよろしいですか？{'\n'}</Text>
            <Text style={{fontSize: 12}}>
              ※閉鎖した農場は元には戻せません。
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#eee', '#ddd']}
            style={[FarmTopStyles.closeContent, FarmTopStyles.closeBottom]}>
            <TouchableOpacity
              style={FarmTopStyles.shadow}
              onPress={goCloseFarm}>
              <LinearGradient
                colors={['#fdfdfd', '#eee']}
                style={FarmTopStyles.closeBtn}>
                <Text style={{fontWeight: 'bold'}}>農場を閉鎖する</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={FarmTopStyles.shadow}
              onPress={() => setCloseFarm(false)}>
              <LinearGradient
                colors={['#fdfdfd', '#eee']}
                style={FarmTopStyles.closeBtn}>
                <Text style={{fontWeight: 'bold'}}>閉鎖しない</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}

      {point && (
        <YesNoPanel
          title="ポイント購入"
          content={['所持ポイント：65727っぴ']}
          yesBtnName="ポイントを購入する"
          goCancel={handleClosePoint}
        />
      )}

      {panel && (
        <YesNoPanel
          title="農作業"
          content={panel.content}
          icon={panel.icon}
          yesBtnName="使用する"
          workItem={handleWorkItem}
          goCancel={handleCloseYesNoPanel}
        />
      )}

      {eventItem && (
        <TouchableOpacity
          onPress={closeEventItem}
          style={FarmTopStyles.resImgArea}>
          <AutoHeightImage
            width={responsiveWidth(80)}
            source={{
              uri: eventItem,
            }}
            style={FarmTopStyles.resImg}
          />
        </TouchableOpacity>
      )}

      <View
        style={[
          FarmTopStyles.bottomItem,
          {
            bottom: farmStatus ? 0 : null,
            top: farmStatus ? null : responsiveWidth(100) + 40,
          },
        ]}>
        <GameProgressBar />
        <GameMenu handleClickMenu={closeTimer} />
      </View>
    </ImageBackground>
  );
};

export default FarmTop;

const FarmTopStyles = StyleSheet.create({
  bgImg: {
    width: responsiveWidth(100),
    height: '100%',
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#67b500',
    borderTopColor: '#8bc34a',
    borderBottomColor: '#8bc34a',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    zIndex: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    paddingVertical: 2,
    paddingHorizontal: '1%',
    lineHeight: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomItem: {
    position: 'absolute',
    top: responsiveWidth(100) + 40,
    zIndex: 100,
  },
  loading: {
    position: 'absolute',
    top: 250,
    left: responsiveWidth(45),
    zIndex: 200,
  },
  closeFarm: {
    position: 'absolute',
    top: '20%',
    marginHorizontal: '8%',
    width: '84%',
    borderRadius: 8,
    zIndex: 30,
  },
  closeHeader: {
    width: '100%',
    height: 32,
    backgroundColor: '#6c0',
    borderTopColor: '#8bc34a',
    borderBottomColor: '#8bc34a',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    zIndex: 30,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  closeContent: {
    borderColor: '#c6c6c6',
    borderWidth: 0.5,
    padding: 15,
  },
  closeBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  closeBtn: {
    marginHorizontal: 5,
    marginVertical: 3,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
  resImg: {
    position: 'absolute',
    top: 150,
    left: responsiveWidth(10),
  },
  resImgArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 101,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
});
