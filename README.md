# README #

### Technical stacks ###
- React native
- REST API
  1). Auth with Email
  2). Admob
- Redux
- Integration with OneSignal for push notification
- Integration with Device Middleware API

### Related Servers
- Facebook: https://developers.facebook.com/apps/411769359503356/dashboard/?business_id=1248992388822538
- OneSignal server: https://app.onesignal.com/
- API Gateway: http://ec2-35-72-6-100.ap-northeast-1.compute.amazonaws.com/apis/

### Environement ###
- node version: `12.16.2`
- react version: `16.13.1`
- react-native version: `0.63.2`

### Running cli ###

- Install react-native-cli.
```shell
  $ nvm use 12.16.2
  $ yarn install
```

- Run on ios simulator
```shell
  $ nvm use 12.16.2
  $ cd ios &&
  $ pod install
  $ cd ..
  $ yarn start
```
open other console and run this command
```shell
  $ nvm use 12.16.2
  $ npx react-native run-ios
```

or with device 

```
  $ npx react-native run-ios --device --udid 00008020-001939191138002E
```

### Troubleshooting

* Failed `pod install`
```
  $ cd ios
  $ pod update ReactNativeUiLib
  $ pod install
```
* Clean cache 

Close the iPhone simulation
```shell
  $ yarn cache clean && \
    watchman watch-del-all && \
    rm -rf node_modules && \
    rm -rf /tmp/metro-bundler-cache-* && \
    rm -rf /tmp/haste-map-react-native-packager-* && \
    rm -rf $TMPDIR/react-* && rm -rf /tmp/metro-bundler-cache-* && \
    rm -rf /tmp/haste-map-react-native-packager-* && \
    xcrun simctl erase all
```

* Clean build
```
  $ npx react-native-clean-project --remove-iOS-build --remove-iOS-pods
```

* Android
  - keystone password: `hatakeppi`

* Build Android APK
```
  $ mkdir -p android/app/src/main/assets
  $ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
  $ curl "http://localhost:8081/index.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"
  $ cd android && ./gradlew clean assembleDebug
```
  - Get APK on `./android/app/build/outputs/apk/debug`


* Keystore
```
  $ keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

* Image not loading
```
  $ react-native bundle --platform android --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --dev false --reset-cache --assets-dest android/app/src/main/res/
```

or if image isn't loading on iPhone 8, please refer https://github.com/facebook/react-native/issues/29279

* Can't find node binary.
```
  $ open -a "Android Studio.app"
```

* Build apk for android production mode.
```
  cd android && ./gradlew clean && cd ..
  cd android &&  ./gradlew assembleRelease && cd ..
```

* Failed to build Android apk.
  
  After you install npm package, please replace files in `node_modules/react-native-admob` with files in `customize_rn_packages/react-native-admob/` directory.
  After that, please try to build android apk, again.
