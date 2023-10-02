import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, hideCounterRedux: false };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // cualquier parámetro que se mande
    },
    toogleCounter(state) {
      state.hideCounterRedux = !state.hideCounterRedux;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
