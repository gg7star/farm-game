import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'admob',
  initialState: {
    admobSettings: {},
    presentCount: 0,
    error: null,
  },
  reducers: {
    setAdmobSettings(state, action) {
      return {...state, admobSettings: action.payload, presentCount: 0, err: null};
    },
    increasePresentCount(state) {
      state.presentCount += 1;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setUser, logout } = actions;
export default reducer;
