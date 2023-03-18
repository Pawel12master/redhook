import { configureStore } from "@reduxjs/toolkit";
import { jokesReducer } from "./slices/jokeSlice";
import { addJoke, removeJoke } from "./slices/jokeSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});
export { store, reset, addJoke, removeJoke };
