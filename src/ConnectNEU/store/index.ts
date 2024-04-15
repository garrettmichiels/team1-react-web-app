import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Users/reducer"
export interface ConnectNEUState {

}

const store = configureStore({
    reducer: {
        users: usersReducer,
    }
});

export default store