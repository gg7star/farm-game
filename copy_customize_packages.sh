#!/usr/bin/env sh

# Copy Admob package
cp -f ./customize_rn_packages/react-native-admob/RNAdMobBanner.js ./node_modules/react-native-admob/RNAdMobBanner.js
cp -f ./customize_rn_packages/react-native-admob/ios/RNDFPBannerView.m ./node_modules/react-native-admob/ios/RNDFPBannerView.m
cp -f ./customize_rn_packages/react-native-admob/android/src/main/java/com/sbugert/rnadmob/* ./node_modules/react-native-admob/android/src/main/java/com/sbugert/rnadmob/

# Copy Slider Box package
cp -f ./customize_rn_packages/react-native-image-slider-box/dist/SliderBox.js ./node_modules/react-native-image-slider-box/dist/SliderBox.js 

# Copy ReactNativeFlipper.js to fix image uploading issue in Android debug environment
cp -f ./customize_rn_packages/android/app/src/debug/java/com/potikuru/ReactNativeFlipper.java ./android/app/src/debug/java/com/potikuru/ReactNativeFlipper.java
