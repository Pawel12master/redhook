import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
const jokeSlice = createSlice({
  name: "jokes",
  initialState: [],
  reducers: {
    addJoke(state, action) {
      state.push(action.payload);
    },
    removeJoke(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});
export const { addJoke, removeJoke } = jokeSlice.actions;
export const jokesReducer = jokeSlice.reducer;
