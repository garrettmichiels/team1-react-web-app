import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Users/reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;