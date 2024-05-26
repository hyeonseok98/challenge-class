import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";

const store = configureStore({
  reducer: {
    // auth 자리는 아무거나 적합한 명칭 사용하면 됨
    auth: authReducer,
  },
});

export default store;
