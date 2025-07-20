import { createSlice, current } from "@reduxjs/toolkit";
import { scienceQuestions } from "../data/Question";
import { act } from "react";



const quizeSlice = createSlice({
    name: "quize",
    initialState: {
        question: scienceQuestions,
        currentIndex: 0,
        score: 0,
        selectedOptions: {},
         isFinished: false 
    },
    reducers: {
        nextQuestion: (state) => {
            if (state.currentIndex < state.question.length - 1) {
                state.currentIndex += 1
            }else{
                state.isFinished = true;
            }

        },
        preQuestion: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1
            }
        },
        checkAnswer: (state, action) => {
            const selected = action.payload;
            const cuurentQ = state.question[state.currentIndex]
            const correct = cuurentQ.correctAnswer


            const prevSelected = state.selectedOptions[state.currentIndex];


            if (prevSelected === correct) {
                state.score -= 1;
            }
            state.selectedOptions[state.currentIndex] = selected;

            if (selected === correct) {
                state.score +=1;

            }
        },
        resetquize: (state) => {
            state.currentIndex = 0;
            state.score = 0;
            state.selectedOptions = {};
             state.isFinished = false;
        },
        resetIsFinished : (state)=>{
            state.isFinished = true
        }
    }
})

export const { nextQuestion, preQuestion, checkAnswer, resetquize,resetIsFinished } = quizeSlice.actions;

export default quizeSlice.reducer;
