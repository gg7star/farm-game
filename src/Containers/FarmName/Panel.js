import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import AutoHeightImage from 'react-native-auto-height-image';

import {apiCreateFarmWithCropId} from '../../services/apis/farm_data';

const Panel = (props) => {
  const [farmName, setFarmName] = useState(props.name);

  const inputFarmName = (e) => {
    setFarmName(e);
  };

  const submitFarm = async () => {
    console.log('Submit = ', props.user.user.id, props.name, props.cropId);
    const response = await apiCreateFarmWithCropId({
      name: props.name,
      crop_id: 1202,
      member_id: props.user.user.id,
    });
    console.log(32, response);
    if (response && response.id) {
      const farmInfo = {
        farmId: response.id,
        name: props.name,
      };
      Actions.farmTop({farmInfo: farmInfo, currentSelectedItem: null});
    }
  };

  return (
    <View style={PanelStyles.bg}>
      <View style={PanelStyles.name}>
        <Text style={PanelStyles.nameText}>農場の名前を決めてね♪</Text>
      </View>
      <View style={PanelStyles.content}>
        <View style={PanelStyles.nanaImg}>
          <AutoHeightImage
            width={144}
            source={{
              uri:
                'https://hatake.s3-ap-northeast-1.amazonaws.com/web-game/images/wapp3/css/img/nana.png',
            }}
            style={{marginLeft: -12, marginTop: -20}}
          />
        </View>
        <View style={{margin: 8}}>
          <Text>
            <Text style={{color: '#00cc33', fontSize: 12}}>★</Text>
            <Text style={{color: '#666666', fontSize: 12}}>収穫目安</Text>
            <Text style={{color: '#00cc33', fontSize: 12}}>★</Text>
          </Text>
          <Text>
            <Text style={{color: '#666666', fontSize: 12}}>現実時間の</Text>
            <Text style={{color: '#ff5500', fontSize: 12}}>
              {props.item.trainingGuide.split('前後')}
            </Text>
            <Text style={{color: '#666666', fontSize: 12}}>前後</Text>
          </Text>
          <Text>
            <Text style={{color: '#00cc33', fontSize: 12}}>★</Text>
            <Text style={{color: '#666666', fontSize: 12}}>ゲーム内の1日</Text>
            <Text style={{color: '#00cc33', fontSize: 12}}>★</Text>
          </Text>
          <Text>
            <Text style={{color: '#666666', fontSize: 12}}>現実時間の</Text>
            <Text style={{color: '#ff5500', fontSize: 12}}>
              {props.item.inGameDay}
            </Text>
          </Text>
        </View>
      </View>
      <TextInput
        style={[PanelStyles.inputName, PanelStyles.shadow]}
        value={farmName}
        returnKeyType="next"
        onChange={inputFarmName}
      />
      <TouchableOpacity
        style={[PanelStyles.submit, PanelStyles.shadow]}
        onPress={submitFarm}>
        <Text style={PanelStyles.submitText}>農場を作る</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default Panel;

const PanelStyles = StyleSheet.create({
  bg: {
    width: '90%',
    position: 'absolute',
    zIndex: 10000,
    top: 60,
    marginHorizontal: '5%',
    borderRadius: 8,
    backgroundColor: '#eee',
    shadowOffset: {
      height: 2,
      width: 4,
    },
  },
  name: {
    backgroundColor: '#67b500',
    height: 40,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  nameText: {
    color: 'rgba(255, 255, 255, 1.00)',
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: 14,
    marginLeft: 8,
  },
  content: {
    flexDirection: 'row',
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#ffc',
  },
  nanaImg: {
    width: 120,
    height: 110,
    overflow: 'hidden',
  },
  inputName: {
    width: '96%',
    height: 36,
    margin: '2%',
    borderColor: '#c6c6c6',
    borderWidth: 1,
    color: '#333',
    borderRadius: 12,
    textAlign: 'center',
  },
  submit: {
    borderColor: '#145072',
    backgroundColor: '#9c3',
    borderWidth: 1,
    alignItems: 'center',
    width: '96%',
    margin: '2%',
    borderRadius: 16,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  shadow: {
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
});

const mapStateToProps = (state) => ({
  user: state.user || {},
});

export default connect(mapStateToProps)(Panel);
