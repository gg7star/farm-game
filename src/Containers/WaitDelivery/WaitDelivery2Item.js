import React from 'react';
import {View, Text} from 'react-native';

import Dash from 'react-native-dash';

const WaitDelivery2Item = ({item}) => {
  return (
    <View>
      <Text style={{lineHeight: 16}}>◆お届け品：</Text>
      <Text style={{lineHeight: 16}}>
        愛情運up!ﾗﾌﾞじゃが {item.name_kanji_sei}kgお届け！
      </Text>

      <Text style={{lineHeight: 16}}>◆手続き日：</Text>
      <Text style={{lineHeight: 16}}>{item.update_date}</Text>

      <Text style={{lineHeight: 16}}>◆宛先：</Text>
      <Text style={{lineHeight: 16}}>{item.product_name}</Text>

      <Dash
        style={{height: 0.3, marginBottom: 8}}
        dashColor="rgb(142, 142, 142)"
        dashThickness={1}
      />
    </View>
  );
};

export default WaitDelivery2Item;
