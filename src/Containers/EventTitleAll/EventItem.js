import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Dash from 'react-native-dash';

import Header from '../../Components/Header'


const EventItem = ({item}) => {

  return (
    <View>
      <View 
        style={[EventItemStyles.eachTitle, {backgroundColor: item.bgClr, borderLeftColor: item.clr}]}
      >
        <Text style={[EventItemStyles.eachTitleText, EventItemStyles.eachTitleTextShawdow, {color: item.clr}]}>
        {item.title}
        </Text>
        <View
          style={EventItemStyles.dateBottom}
        >
          <Text
            style={[EventItemStyles.dateBottomText, EventItemStyles.eachTitleTextShawdow, {color: item.clr}]}
          >
            {item.date}
          </Text>
        </View>
      </View>

      {
        item.eachList.map((each, i) => (
          <View key={i}>
            <Text
              style={[EventItemStyles.contentText, {color: item.clr}]}
            >
              {each}
            </Text>
            <Dash 
              dashColor={item.clr}
              dashThickness={0.5} 
            /> 
          </View>
        ))
      }
    </View>
  )
}

export default EventItem;

const EventItemStyles = StyleSheet.create({  
  eachTitle: {
    borderLeftWidth: 5,
  },
  eachTitleText: {
    fontWeight: 'bold',
    fontSize: 14,    
  },
  eachTitleTextShawdow: {
    textShadowColor: '#fff',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
    paddingVertical: 4,
  },
  dateBottom: {
    position: 'absolute',
    right: 4,
    bottom: -4,
  },
  dateBottomText: {
    fontSize: 8,
  },
  contentText: {
    fontSize: 12,
    padding: 2
  }
})
