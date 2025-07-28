import { configureStore } from "@reduxjs/toolkit";
import quizeReducer from "../slice/quizeSlice"

export const store = configureStore({
    reducer:{
        quize:quizeReducer
    }
})