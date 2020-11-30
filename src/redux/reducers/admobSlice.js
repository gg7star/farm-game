import { createSlice } from '@reduxjs/toolkit';

const admobSlice = createSlice({
  name: 'admob',
  initialState: {
    settings: [],
    error: null,
  },
  reducers: {
    setAdmobSettings(state, action) {
      return {settings: action.payload, err: null};
    },
  },
});

const { actions, reducer } = admobSlice;
export const { setAdmobSettings } = actions;


export default reducer;
