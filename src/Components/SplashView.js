import React from 'react';
import {
  View,
  ImageBackground,
  Animated,
} from 'react-native';

const LOGIN_BG_IMAGE = require('../assets/images/logo.png');

export default class SplashView extends React.Component {
  state = {
    anim: new Animated.Value(0),
    isKeyboardVisible: false,
    keyboardHeight: 0,
    adjust: {
      mostTop: 160*em
    }
  };

  UNSAFE_componentWillMount() {
  }

  componentDidMount() {
    Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
  }

  componentWillUnmount() {
  }

  fadeIn(delay, from = 0) {
    const { anim } = this.state;
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateY: anim.interpolate({
            inputRange: [delay, Math.min(delay + 500, 3000)],
            outputRange: [from, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  }

  render() {
    return (
      <ImageBackground
        source={LOGIN_BG_IMAGE}
        style={{flex: 1, height: H}}
        resizeMode='cover'
      >
        <View style={{flex: 1,top: H/3}}>
          <LogoView styles={this.fadeIn(0)} />
        </View>
      </ImageBackground>
    )
  }
}
