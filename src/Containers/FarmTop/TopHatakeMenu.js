import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import Spinner from 'react-native-loading-spinner-overlay';

import {apiFarmTopMenus} from '../../services/apis/game_farm';

const TopHatakeMenu = ({
  handleClick,
  handleClickItem,
  handleCloseTimer,
  farmInfo,
}) => {
  const [iconList, setIconList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTopMenus();
  }, []);

  const handleClickIcon = (name) => {
    console.log(76, name);
    handleCloseTimer();
    Actions.admob({
      nextPage: 'farmTop',
      state: {farmInfo: farmInfo, currentSelectedItem: name},
    });
  };

  const getTopMenus = async () => {
    setLoading(true);
    const response = await apiFarmTopMenus(farmInfo.id);
    setLoading(false);
    console.log(78, response);
    if (response) {
      setIconList(response);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <View style={TopHatakeMenuStyles.bg}>
        <Spinner visible={loading} />
        {iconList.length > 0 && (
          <View style={TopHatakeMenuStyles.content}>
            <AutoHeightImage
              width={responsiveWidth(50)}
              source={{
                uri: iconList[0].image,
              }}
              style={{left: '5%'}}
            />
            <View style={{marginTop: '3%'}}>
              <View style={{flexDirection: 'row'}}>
                {iconList.map(
                  (item, i) =>
                    i > 0 &&
                    i < 5 && (
                      <TouchableOpacity key={`${i}`} onPress={() => handleClickIcon(item.name)}>
                        <AutoHeightImage
                          key={`auto-height-image-1-${i}`}
                          width={responsiveWidth(15)}
                          source={{uri: item.image}}
                        />
                      </TouchableOpacity>
                    ),
                )}
              </View>
              <View style={{flexDirection: 'row'}}>
                {iconList.map(
                  (item, i) =>
                    i >= 5 &&
                    i < 8 && (
                      <TouchableOpacity  key={`${i}`} onPress={() => handleClickIcon(item.name)}>
                        <AutoHeightImage
                          key={`auto-height-image-2-${i}`}
                          width={responsiveWidth(15)}
                          source={{uri: item.image}}
                        />
                      </TouchableOpacity>
                    ),
                )}
              </View>
              <TouchableOpacity
                onPress={() =>
                  handleClickIcon(iconList[iconList.length - 1].name)
                }>
                <AutoHeightImage
                  key={iconList.length - 1}
                  width={responsiveWidth(15)}
                  source={{uri: iconList[iconList.length - 1].image}}
                  style={{left: responsiveWidth(60)}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TopHatakeMenu;

const TopHatakeMenuStyles = StyleSheet.create({
  bg: {
    width: responsiveWidth(100),
    height: 400,
    zIndex: 30,
    position: 'absolute',
    top: 40,
  },
  content: {
    position: 'absolute',
    top: '25%',
    left: '22%',
  },
  loading: {
    position: 'absolute',
    top: 250,
    left: responsiveWidth(45),
    zIndex: 1000,
  },
});
