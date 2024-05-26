import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "../reducer/memo.reducer";

const store = configureStore({
  reducer: {
    memo: memoReducer,
  },
});

export default store;
