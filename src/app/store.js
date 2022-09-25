import { configureStore } from "@reduxjs/toolkit";
import readDataslice from "../features.js/quoteslice";

export const store = configureStore({
  reducer: {
    app: readDataslice,
  },
});