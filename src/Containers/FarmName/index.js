import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {apiFarmNameByCropId} from '../../services/apis/un_page_data';

import GameBgImg from '../../Components/GameBgImg';
import GameMenu from '../../Components/GameMenu';
import Panel from './Panel.js';

const gameBgData = {
  sky: require('../../assets/images/bg_game/sky/A04.gif'),
  house: require('../../assets/images/bg_game/house/A11.gif'),
  ground: require('../../assets/images/bg_game/ground/1101.gif'),
  river: require('../../assets/images/bg_game/river/1110.gif'),
  tree: require('../../assets/images/bg_game/tree/1110.gif'),
  hatake: require('../../assets/images/bg_game/hatake/1110.gif'),
};
const FarmName = ({gameData}) => {
  // const [farmNameData, setFarmNameData] = useState(undefined)

  // const getFarmData = async () => {
  //   const farmData = await apiFarmNameByCropId(cropId);
  //   setFarmNameData(farmData);
  //   console.log('==== farmData: ', farmData);
  // }

  // useEffect(() => {
  //   getFarmData();
  // }, []);

  // // getFarmData();

  return (
    <ImageBackground
      style={FarmNameStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/bg_pattern.png')}>
      <View style={FarmNameStyles.header}>
        <View style={FarmNameStyles.headerText}>
          <Text style={FarmNameStyles.headerContent}>{gameData.Mtitle}</Text>
        </View>
      </View>

      <GameBgImg bgData={gameBgData} />
      <Panel
        item={gameData.Mcaption}
        name={gameData.Mtitle + '農場'}
        cropId={gameData.id}
      />
      <GameMenu />
    </ImageBackground>
  );
};

export default FarmName;

const FarmNameStyles = StyleSheet.create({
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
    width: '80%',
    marginVertical: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: '1%',
    lineHeight: 28,
  },
});
