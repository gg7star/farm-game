import { createSlice } from '@reduxjs/toolkit';

const admoCounterbSlice = createSlice({
  name: 'admobCounter',
  initialState: {
    counter: 0
  },
  reducers: {
    increasePresentCount(state) {
      return {counter: state.counter + 1};
    },
    resetPresentCount(state) {
      return {counter: 0};
    }
  },
});

const { actions, reducer } = admoCounterbSlice;
export const { resetPresentCount, increasePresentCount } = actions;


export default reducer;
