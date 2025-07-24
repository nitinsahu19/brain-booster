import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../questions/questionsMath";

const initialState = {
  questions: questions,
  currentIndex: 0,
  selectedAnswers: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
      }
    },
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
      }
    },
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
    },
    resetQuiz: (state) => {
      state.currentIndex = 0;
      state.selectedAnswers = {};
    }
  },
});


export const { nextQuestion, prevQuestion, selectAnswer , resetQuiz} = quizSlice.actions;
export default quizSlice.reducer;
