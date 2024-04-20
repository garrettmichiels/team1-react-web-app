import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../Users/reducer";
import reviewsReducer from "../Reviews/reducer"

const store = configureStore({
  reducer: {
    user: userReducer,
    reviews: reviewsReducer,
  },
});

export default store;