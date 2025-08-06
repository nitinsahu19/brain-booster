import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import quizeReducer from "../reducers/quizeSlice"



const store = configureStore({
    reducer:{
        user:userSlice,
        quize:quizeReducer
    }
})

export default store;