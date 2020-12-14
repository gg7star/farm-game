import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth, useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';
import AutoHeightImage from 'react-native-auto-height-image';

import Header from '../../Components/Header.js';
import HeaderBrownBar from '../../Components/HeaderBrownBar.js';

import {apiAddressList} from '../../services/apis/address_list';
import EachAddress from './EachAddress';

const addresses = [
  {
    name: 'AAA',
  },
];
const AddressList = (props) => {
  const [addressList, setAddressList] = useState([]);

  const getAddressList = async () => {
    // const response = await apiAddressList(props.user.user.id);
    const response = await apiAddressList(11);
    if (response && response.dataset) {
      setAddressList(response.dataset);
    }
  };

  addressList.length === 0 && getAddressList();

  return (
    <ImageBackground
      style={AddressListStyles.bgImg}
      resizeMode="repeat"
      source={require('../../assets/images/backimg-bg.png')}>
      <ScrollView>
        <HeaderBrownBar />
        <Header title="送付先情報" />

        <View style={[AddressListStyles.content, AddressListStyles.shadow]}>
          <LinearGradient
            colors={['#6facd5', '#497bae']}
            style={AddressListStyles.subTitle}>
            <Text style={{color: '#fff'}}>お届け先の登録/変更</Text>
          </LinearGradient>
          {addressList.map((item, i) => (
            <EachAddress key={i} item={item} />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

// export default AddressList;

const AddressListStyles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    borderRadius: 8,
    marginTop: 1,
  },
  shadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 4,
    },
  },
  subTitle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});

const mapStateToProps = (state) => ({
  user: state.user || {},
});

export default connect(mapStateToProps)(AddressList);

