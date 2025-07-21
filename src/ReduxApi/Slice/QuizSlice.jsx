import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../questions/questionsMath";

const initialState = {
    questions: questions,
    currentIndex : 0,
    selectedAnswers : {},
}

