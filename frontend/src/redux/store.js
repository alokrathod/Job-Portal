import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    // slices
    auth: authSlice,
  },
});

export default store;
