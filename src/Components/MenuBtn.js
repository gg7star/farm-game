import React from 'react';
import {TouchableOpacity} from 'react-native';

import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';
import {Actions} from 'react-native-router-flux';

const MenuBtn = ({item}) => {
  const goNext = () => {
    Actions[item.title]();
  };
  return (
    <TouchableOpacity onPress={goNext}>
      <AutoHeightImage width={responsiveWidth(25)} source={item.img} />
    </TouchableOpacity>
  );
};

export default MenuBtn;
