import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./redux/State";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
