export const ADMOB_CONFIG = {
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
