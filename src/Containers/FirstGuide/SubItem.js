import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const selectItem = [0, -36];

const SubItem = ({item, id, status, handleClick, top, bottom}) => {
  return (
    <TouchableOpacity
      style={[
        SubItemStyles.bg,
        top ? SubItemStyles.topItem : null,
        bottom ? SubItemStyles.bottomItem : null,
        {marginTop: top ? 10 : 0},
      ]}
      onPress={() => handleClick(id)}>
      <LinearGradient
        colors={['#f9f9f9', '#eeeeee']}
        style={[
          SubItemStyles.bgGradient,
          top ? SubItemStyles.topItem : null,
          bottom ? SubItemStyles.bottomItem : null,
        ]}>
        <View style={SubItemStyles.iconBg}>
          <Image
            style={[
              SubItemStyles.iconImg,
              {marginLeft: selectItem[status ? 1 : 0]},
            ]}
            source={require('../../assets/images/icons-18-white.png')}
          />
        </View>
        <Text style={SubItemStyles.text}>{item}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SubItem;

const SubItemStyles = StyleSheet.create({
  bg: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderTopWidth: 0,
  },
  bgGradient: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    margin: 10,
    fontWeight: 'bold',
  },
  iconBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 18,
    height: 18,
    borderRadius: 9,
    overflow: 'hidden',
    marginLeft: 10,
  },
  iconImg: {
    width: 776,
    height: 18,
  },
  topItem: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
  },
  bottomItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
