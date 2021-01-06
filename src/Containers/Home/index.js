import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Spinner from 'react-native-loading-spinner-overlay';
import AutoHeightImage from 'react-native-auto-height-image';

import {Actions} from 'react-native-router-flux';
import {SliderBox} from 'react-native-image-slider-box';

import {apiBaseFarm, apiRecommends} from '../../services/apis/farmer';

import Menu from '../../Components/Menu';

// import HomeButton from './HomeButton.js';
import CategoryTab from './CategoryTab.js';
import CategoryTabContent from './CategoryTabContent.js';
// import SubMenu from './SubMenu.js';
// import NotationModal from './NotationModal.js';
import News from '../News';

// const homeBtnList = [
//   {
//     text: ['ゲーム', 'ガイド '],
//     bgColor: '#23A029',
//   },
//   {
//     text: [' 表記に', 'ついて'],
//     bgColor: '#B37A00',
//   },
//   {
//     text: [' MPT', 'ランキング '],
//     bgColor: '#67B500',
//   },
// ];

const categoryTabList = [
  {
    title: '一般ゲーム',
    bgColor: '#FFC638',
  },
  {
    title: '抽選ゲーム',
    bgColor: '#46CEF0',
  },
];


const Home = () => {
  const [loadTime, setLoadTime] = useState(true);
  const [tabItem, setTabItem] = useState(0);
  const [newNotification, setNewNotification] = useState(false);
  const [sImg, setSImg] = useState([
    require('../../assets/images/rotebunner/main_bunner_01.png'),
    require('../../assets/images/rotebunner/main_bunner_02.png'),
    require('../../assets/images/rotebunner/main_bunner_03.png'),
    require('../../assets/images/rotebunner/main_bunner_04.png'),
    require('../../assets/images/rotebunner/main_bunner_05.png'),
    require('../../assets/images/rotebunner/main_bunner_06.png'),
  ]);
  const [imageLoading, setImageLoading] = useState(false);
  const [cropList, setCropList] = useState(undefined);
  const [recommends, setRecommends] = useState(undefined);

  useEffect(() => {
    getCropList();
    getRecommends();
  }, []);

  const getCropList = async () => {
    // console.log(987, 'Home Crop List');
    setImageLoading(true);
    const response = await apiBaseFarm();
    setImageLoading(false);
    if (response) {
      // console.log(989, response);
      setCropList(response.dataset);
    }
  };

  const getRecommends = async () => {
    // console.log(1002, 'Home Recommends');
    setImageLoading(true);
    const response = await apiRecommends();
    setImageLoading(false);
    if (response) {
      // console.log(1007, response);
      setRecommends(response.dataset);
    }
  };

  const handleTab = (e) => {
    if (e.nativeEvent.contentOffset.x >= responsiveWidth(100)) {
      setTabItem(1);
    } else {
      setTabItem(0);
    }
  };

  const scrollRef = useRef();

  const moveTab = (e) => {
    console.log('===== moveTab: e: ', e);
    if (e === 0) {
      scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
    } else {
      scrollRef.current.scrollTo({
        x: responsiveWidth(100),
        y: 0,
        animated: true,
      });
    }
  };

  const goNews = () => {
    setNewNotification(true);
  };

  return (
    <ImageBackground
      style={HomeStyle.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern_1.gif')}>
      <Spinner visible={imageLoading} />
       <TouchableOpacity style={HomeStyle.newsImgArea} onPress={goNews}>
        <Image
          source={{
            uri:
              'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/img7/bt05.png',
          }}
          style={HomeStyle.newsImg}
        />
      </TouchableOpacity>

      <ScrollView>
        <View>
          <SliderBox
            images={sImg}
            sliderBoxHeight={120}
            autoplay={true}
            circleLoop={true}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
          />
        </View>
        <View style={HomeStyle.corner}>
          <View style={{flexDirection: 'row'}}>
            {categoryTabList.map((item, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => moveTab(i)}
                style={[
                  HomeStyle.tabTitle,
                  {
                    backgroundColor:
                      tabItem === i ? categoryTabList[i].bgColor : '#fff',
                  },
                ]}>
                <View>
                  <CategoryTab item={item} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {cropList && (
            <View
              style={{
                height:
                  (responsiveWidth(30) + 20) *
                  (tabItem === 0 ? cropList.length + 2 : recommends.length + 2),
              }}>
              <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={responsiveWidth(100)}
                snapToAlignment={'center'}
                ref={scrollRef}
                // ref={(c) => {
                //   scrollRef = c;
                // }}
                onScroll={(e) => handleTab(e)}>
                <View style={[HomeStyle.tabContent]}>
                  {/* <CategoryTabContent item={categories[0]} /> */}
                  {cropList && <CategoryTabContent item={cropList} />}
                  <Text>{'\n\n'}</Text>
                </View>
                <View style={[HomeStyle.tabContent]}>
                  {recommends && <CategoryTabContent item={recommends} />}
                  <Text>{'\n\n'}</Text>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>
      <Menu item="Home" />
      <Modal
        transparent={true}
        visible={newNotification}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={HomeStyle.modalContent}>
          <ImageBackground
            style={{width: '100%', height: responsiveHeight(87)}}
            resizeMode="repeat"
            imageStyle={HomeStyle.modalBgImg}
            source={require('../../assets/images/category_bg2.gif')}>
            <TouchableOpacity
              style={HomeStyle.modalCloseTop}
              onPress={() => setNewNotification(false)}>
              <Image
                source={require('../../assets/images/back.png')}
                style={{width: 37, height: 37}}
              />
            </TouchableOpacity>
            <News />
          </ImageBackground>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Home;

const HomeStyle = StyleSheet.create({
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
  },
  headerNews: {
    backgroundColor: '#fff',
    width: responsiveWidth(50),
    borderRadius: 4,
    height: 32,
    marginVertical: 2,
    marginLeft: 4,
    position: 'relative',
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
    color: '#630',
  },
  eventImg: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: '1%',
    borderColor: '#fff',
    borderWidth: 2,
  },
  newsImgArea: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1000,
  },
  newsImg: {
    width: 50,
    height: 50,
  },
  corner: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  tabTitle: {
    width: '50%',
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: {
      height: 5,
      width: 4,
    },
  },
  tabContent: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    // height: responsiveHeight(100) - 155 - (188 * responsiveWidth(100)) / 375,
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
    alignItems: 'flex-start',
  },
  subMenuTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 6,
  },
  modalContent: {
    left: '2%',
    top: responsiveHeight(7),
    zIndex: 60,
    width: '96%',
    height: responsiveHeight(86),
  },
  modalBgImg: {
    borderWidth: 5,
    borderColor: '#c30',
  },
  modalCloseTop: {
    position: 'absolute',
    right: '6%',
    top: 10,
    zIndex: 200,
  },
  modalBg: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
});
