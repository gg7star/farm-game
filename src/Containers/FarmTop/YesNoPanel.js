import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

const YesNoPanel = ({title, content, icon, yesBtnName, workItem, goCancel}) => {
  const goClose = () => {
    goCancel();
  };
  const goNext = () => {
    if (yesBtnName === 'ポイントを購入する') {
      Actions.point();
    } else {
      workItem();
    }
  };
  return (
    <View style={YesNoPanelStyles.closeFarm}>
      <View style={YesNoPanelStyles.closeHeader}>
        <Text style={{color: '#fff'}}>{title}</Text>
      </View>
      <LinearGradient
        colors={['#eee', '#ddd']}
        style={YesNoPanelStyles.closeContent}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon && <AutoHeightImage width={25} source={{uri: icon}} />}
          <Text style={{fontWeight: 'bold'}}>{content[0]}</Text>
        </View>
        {content.length > 1 && (
          <Text style={{fontSize: 12}}>
            {'\n'}
            {content[1]}
          </Text>
        )}
      </LinearGradient>
      <LinearGradient
        colors={['#eee', '#ddd']}
        style={[YesNoPanelStyles.closeContent, YesNoPanelStyles.closeBottom]}>
        <TouchableOpacity style={YesNoPanelStyles.shadow} onPress={goNext}>
          <LinearGradient
            colors={['#fdfdfd', '#eee']}
            style={YesNoPanelStyles.closeBtn}>
            <Text style={{fontWeight: 'bold'}}>{yesBtnName}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={YesNoPanelStyles.shadow} onPress={goClose}>
          <LinearGradient
            colors={['#fdfdfd', '#eee']}
            style={YesNoPanelStyles.closeBtn}>
            <Text style={{fontWeight: 'bold'}}>キャンセル</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default YesNoPanel;

const YesNoPanelStyles = StyleSheet.create({
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
});
