// src/redux/slices/counter/Counter.js
import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = Counter.actions;
export default Counter.reducer;
