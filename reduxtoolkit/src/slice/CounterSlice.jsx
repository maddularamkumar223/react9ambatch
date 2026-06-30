import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

let CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state, action) {
      state.count = state.count + 1;
    },
    sub(state, action) {
      state.count = state.count - 1;
    },
  },
});

export let { add, sub } = CounterSlice.actions;
export default CounterSlice.reducer;
