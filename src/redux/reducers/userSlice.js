import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loggingIn: false,
    loggedIn: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      return {...state, user: action.payload, loggingIn: true, loggedIn: false};
    },
    logout(state, action) {
      return {...state, user: action.payload, loggedIn: false, err: null};
    },
  },
});

const {actions, reducer} = userSlice;
export const {setUser, logout} = actions;
export default reducer;
