import {combineReducers} from 'redux';
import userReducer from './userSlice';
import admobReducer from './admobSlice';
import admobCounterReducer from './admobCounterSlice';

export default combineReducers({
  user: userReducer,
  admob: admobReducer,
  admobCounter: admobCounterReducer,
});
