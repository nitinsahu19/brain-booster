import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import quizReducer from '../reducers/QuizSlice'


const store = configureStore({
    reducer:{
        user:userSlice,
        quiz: quizReducer,
    }
})

export default store;