import React, {useEffect, useState} from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AdMobRewarded, AdMobInterstitial} from 'react-native-admob';

const ADMOB_CONFIG = {
  name: 'Farm',
  ios: {
    id: 'ca-app-pub-4866324751233603~4180080712',
    reward: {
      live_id: 'ca-app-pub-4866324751233603/3086490898',
      test_id: 'ca-app-pub-3940256099942544/5224354917',
      unitName: 'Hatakeppi',
    },
    interstitial: {
      live_id: 'ca-app-pub-3940256099942544/1033173712',
      test_id: 'ca-app-pub-3940256099942544/1033173712',
      unitName: 'Hatakeppi',
    },
  },
  android: {
    id: 'ca-app-pub-4866324751233603~8927002753',
    reward: {
      live_id: 'ca-app-pub-4866324751233603/4353155315',
      test_id: 'ca-app-pub-3940256099942544/5224354917',
      unitName: 'Hatakeppi',
    },
    interstitial: {
      live_id: 'ca-app-pub-3940256099942544/1033173712',
      test_id: 'ca-app-pub-3940256099942544/1033173712',
      unitName: 'Hatakeppi',
    },
  },
};

const ADMOB_STATUS = {
  LOADING: {status: 'adLoading', description: 'Loading advertising...'},
  REWARED: {status: 'rewarded', description: 'Rewarded advertising.'},
  OPENED: {status: 'adOpened', description: 'Opened the advertising.'},
  LOADED: {status: 'adLoaded', description: 'Loaded the advertising.'},
  FAILED_TO_LOADE: {
    status: 'adFailedToLoad',
    description: 'Failed to loaded the advertising.',
  },
  CLOSED: {
    status: 'adClosed',
    description: 'Closed the advertising.',
  },
  LEFT_APPLICATION: {
    status: 'adLeftApplication',
    description: 'Clicked the advertising.',
  },
  VIVEO_STARTED: {
    status: 'videoStarted',
    description: 'Started the advertising for video.',
  },
};

const AdMob = (props) => {
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(ADMOB_STATUS.LOADING);

  const initAdMobRewarded = () => {
    // Test mode
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID(ADMOB_CONFIG[Platform.OS].reward.test_id);
    // Live mode
    // AdMobRewarded.setAdUnitID(constants[Platform.OS].reward.live_id);

    /* Regisrer reward listerners */
    // rewarded
    AdMobRewarded.addEventListener(ADMOB_STATUS.REWARED.status, (reward) => {
      console.log('AdMobRewarded => rewarded', reward);
      setStatus(ADMOB_STATUS.REWARED);
    });
    // adLoaded
    AdMobRewarded.addEventListener(ADMOB_STATUS.LOADED.status, () => {
      console.log('AdMobRewarded => adLoaded');
      // !loading && setLoading(false);
      setStatus(ADMOB_STATUS.LOADED);
    });
    // adFailedToLoad
    AdMobRewarded.addEventListener(
      ADMOB_STATUS.FAILED_TO_LOADE.status,
      (err) => {
        console.warn(err);
        setStatus(ADMOB_STATUS.FAILED_TO_LOADE);
      },
    );
    // adOpened
    AdMobRewarded.addEventListener(ADMOB_STATUS.OPENED.status, () => {
      console.log('AdMobRewarded => adOpened');
      setStatus(ADMOB_STATUS.OPENED);
    });
    // videoStarted
    AdMobRewarded.addEventListener(ADMOB_STATUS.VIVEO_STARTED.status, () => {
      console.log('AdMobRewarded => videoStarted');
      setStatus(ADMOB_STATUS.VIVEO_STARTED);
    });
    // adClosed
    AdMobRewarded.addEventListener(ADMOB_STATUS.CLOSED.status, () => {
      console.log('AdMobRewarded => adClosed');
      setStatus(ADMOB_STATUS.CLOSED);
    });
    // adLeftApplication
    AdMobRewarded.addEventListener(ADMOB_STATUS.LEFT_APPLICATION.status, () => {
      console.log('AdMobRewarded => adLeftApplication');
      setStatus(ADMOB_STATUS.LEFT_APPLICATION);
    });
  };

  const initAdMobInterstitial = () => {
    // Test mode
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID(
      ADMOB_CONFIG[Platform.OS].interstitial.test_id,
    );
    // Live mode
    // AdMobInterstitial.setAdUnitID(constants[Platform.OS].interstitial.live_id);

    AdMobInterstitial.addEventListener('adLoaded', () => {
      console.log('AdMobInterstitial adLoaded');
      setStatus(ADMOB_STATUS.LOADED);
    });
    AdMobInterstitial.addEventListener('adFailedToLoad', error => {
      console.warn(error);
      setStatus(ADMOB_STATUS.FAILED_TO_LOADE);
    });
    AdMobInterstitial.addEventListener('adOpened', () => {
      console.log('AdMobInterstitial => adOpened');
      setStatus(ADMOB_STATUS.OPENED);
    });
    AdMobInterstitial.addEventListener('adClosed', () => {
      console.log('AdMobInterstitial => adClosed');
      setStatus(ADMOB_STATUS.CLOSED);
      // AdMobInterstitial.requestAd().catch(error => console.warn(error));
    });
    AdMobInterstitial.addEventListener('adLeftApplication', () => {
      console.log('AdMobInterstitial => adLeftApplication');
      setStatus(ADMOB_STATUS.LEFT_APPLICATION);
    });
  };

  useEffect(() => {
    // Init reward
    initAdMobRewarded();
    // showRewarded();

    // Init initerstitial
    initAdMobInterstitial();
    showInterstitial();

    return () => {
      console.log('====== removeAllListeners');
      AdMobRewarded.removeAllListeners();
      AdMobInterstitial.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    console.log('updated ADMOB_STATUS', status);
    if (status.status !== ADMOB_STATUS.LOADING.status) {
      onGoBack();
    }
  }, [status]);

  const showRewarded = () => {
    console.log('===== loading: ', status, error);
    AdMobRewarded.requestAd()
      .then(() => {
        AdMobRewarded.showAd();
      })
      .catch((err) => {
        console.warn('===== reward error: ', err);
        // setLoading(false);
        setStatus(ADMOB_STATUS.FAILED_TO_LOADE.status);
        setError(error);
      });
    // if (!loaded) await AdMobRewarded.requestAd(); //.catch(error => console.warn(error));
    // await AdMobRewarded.showAd(); //.catch((error) => console.warn('===== reward error: ', error));
  };

  const showInterstitial = () => {
    // AdMobInterstitial.showAd().catch((err) => console.warn(err));

    AdMobInterstitial.requestAd()
      .then(() => {
        AdMobInterstitial.showAd();
      })
      .catch((err) => {
        console.warn('===== reward error: ', err);
        // setLoading(false);
        setStatus(ADMOB_STATUS.FAILED_TO_LOADE.status);
        setError(error);
      });
  };

  const onGoBack = () => {
    Actions.pop();
    props.nextPage && Actions[props.nextPage](props.state ? {...props.state} : {});
  };

  const onClickScreen = () => {
    if (status.status !== ADMOB_STATUS.LOADING.status) {
      onGoBack();
    }
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
      <View style={{justifyConetnet: 'center', flex: 1}}>
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 1}}
          onPress={onClickScreen}>
          {status && (
            <React.Fragment>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>
                {status.description}
              </Text>
            </React.Fragment>
          )}
          {error && (
            <React.Fragment>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>
                {error}
              </Text>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>
                {"Can't get Admob info. Please try later."}
              </Text>
            </React.Fragment>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdMob;
