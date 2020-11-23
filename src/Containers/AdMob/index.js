import React, {useEffect, useState} from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AdMobRewarded} from 'react-native-admob';
import {admob as AdMobConstant} from '../../config/constants';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('Loading advertising...');

  useEffect(() => {
    console.log('===== AdMobConstant: ', AdMobConstant);
    // Init reward
    // Test mode
    AdMobRewarded.setTestDevices([AdMobRewarded.simulatorId]);
    AdMobRewarded.setAdUnitID(AdMobConstant[Platform.OS].reward.test);
    // Live mode
    // AdMobRewarded.setAdUnitID(constants[Platform.OS].reward.id);

    /* Regisrer reward listerners */
    // rewarded
    AdMobRewarded.addEventListener(ADMOB_STATUS.REWARED.status, (reward) =>
      console.log('AdMobRewarded => rewarded', reward),
    );
    // adLoaded
    AdMobRewarded.addEventListener(ADMOB_STATUS.LOADED.status, () => {
      console.log('AdMobRewarded => adLoaded');
      !loading && setLoading(false);
    });
    // adFailedToLoad
    AdMobRewarded.addEventListener(ADMOB_STATUS.FAILED_TO_LOADE.status, (err) =>
      console.warn(err),
    );
    // adOpened
    AdMobRewarded.addEventListener(ADMOB_STATUS.OPENED.status, () => {
      console.log('AdMobRewarded => adOpened');
      setStatus(ADMOB_STATUS.OPENED.description);
    });
    // videoStarted
    AdMobRewarded.addEventListener(ADMOB_STATUS.VIVEO_STARTED.status, () => {
      console.log('AdMobRewarded => videoStarted');
      setStatus(ADMOB_STATUS.VIVEO_STARTED.description);
    });
    // adClosed
    AdMobRewarded.addEventListener(ADMOB_STATUS.CLOSED.status, () => {
      console.log('AdMobRewarded => adClosed');
      setStatus(ADMOB_STATUS.CLOSED.description);
      setLoading(false);
      // Go to next page
      onGoBack();
    });
    // adLeftApplication
    AdMobRewarded.addEventListener(ADMOB_STATUS.LEFT_APPLICATION.status, () => {
      console.log('AdMobRewarded => adLeftApplication');
      setStatus(ADMOB_STATUS.LEFT_APPLICATION.description);
    });

    showRewarded();

    return () => {
      console.log('====== removeAllListeners');
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  const showRewarded = () => {
    console.log('===== loading: ', loading, status, error);
    AdMobRewarded.requestAd()
      .then(() => {
        AdMobRewarded.showAd();
      })
      .catch((err) => {
        console.warn('===== reward error: ', err);
        setLoading(false);
        setError(error);
      });
    // if (!loaded) await AdMobRewarded.requestAd(); //.catch(error => console.warn(error));
    // await AdMobRewarded.showAd(); //.catch((error) => console.warn('===== reward error: ', error));
  };

  const onGoBack = () => {
    // if (!loading) {
    Actions.pop();
    Actions[props.nextPage]();
    // }
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
          onPress={onGoBack}>
          {status && (
            <React.Fragment>
              <Text style={{fontSize: 18, textAlign: 'center', color: '#FFF'}}>
                {status}
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
