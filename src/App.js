/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './routes/index';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {useDarkMode} from 'react-native-dark-mode';
import {AdMobBanner} from 'react-native-admob';
import {store} from './redux/store';
import {ADMOB_CONFIG} from './config/constants';

let persistor = persistStore(store);

const App: () => React$Node = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      setVisible(true);
    }, 2500);
  }, []);

  const isDarkMode = useDarkMode();

  const handleAdFailedToLoad = (error) => {
    console.log('===== AdMobBanner: error: ', error);
  };

  const renderAdmob = () => {
    const adMobId = ADMOB_CONFIG[Platform.OS].banner.test_id;

    return (
      <AdMobBanner
        adSize="fullBanner"
        adUnitID={adMobId}
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => handleAdFailedToLoad(error)}
      />
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView
          style={{
            flex: 0,
            backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
          }}
        />
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
        <SafeAreaView style={{flex: 0, backgroundColor: '#000000'}}>
          {renderAdmob()}
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
