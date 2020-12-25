export const ADMOB_CONFIG = {
  name: 'ポチくる',
  ios: {
    id: 'ca-app-pub-2840293697277448~4828394508',
    reward: {
      live_id: 'ca-app-pub-2840293697277448/8209277877',
      test_id: 'ca-app-pub-3940256099942544/5224354917',
      unitName: 'Potikuru_Rewards',
    },
    interstitial: {
      live_id: 'ca-app-pub-2840293697277448/5854577278',
      test_id: 'ca-app-pub-3940256099942544/1033173712',
      unitName: 'Potikuru_Interstitial',
    },
    banner: {
      live_id: 'ca-app-pub-2840293697277448/3092682561',
      test_id: 'ca-app-pub-3940256099942544/2934735716',
      unitName: 'Potikuru_Banner',
    },
  },
  android: {
    id: 'ca-app-pub-2840293697277448~1227033178',
    reward: {
      live_id: 'ca-app-pub-4866324751233603/3086490898',
      test_id: 'ca-app-pub-3940256099942544/5224354917',
      unitName: 'Potikuru_Rewards',
    },
    interstitial: {
      live_id: 'ca-app-pub-2840293697277448/7111818620',
      test_id: 'ca-app-pub-3940256099942544/1033173712',
      unitName: 'Potikuru_Interstitial',
    },
    banner: {
      live_id: 'ca-app-pub-2840293697277448/2681619027',
      test_id: 'ca-app-pub-3940256099942544/2934735716',
      unitName: 'Potikuru_Banner',
    },
  },
};

export const ADMOB_STATUS = {
  LOADING: { status: 'adLoading', description: 'Loading advertising...' },
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

export const ADMOB_TYPE_ENUM = {
  Interstitial: 'Interstitial',
  Reward: 'Reward',
  Banner: 'Banner',
}