import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "../actions/translateActions";



const initialState = {
    isLoading: true,
    isError: false,
    languages: [],
    // çevrilen yazı için
    isAnswerLoading: false,
    isAnswerError: false,
    answer: "",
};

const translateSlice = createSlice({
    name:'translate',
    initialState,
    extraReducers: {
        [getLanguages.pending]: (state) => {
            state.isLoading = true;
        },

        [getLanguages.fulfilled]: (state, action) => {
            state.languages = action.payload;
            state.isLoading = false;
            state.isError = false;
        },

        [getLanguages.rejected]:  (state) => {
            state.isLoading = false;
            state.isError = true;
        },

        [translateText.pending]: (state) => {
            state.isAnswerLoading = true;
        },

        [translateText.fulfilled]: (state, action) => {
            state.isAnswerLoading = false;
            state.answer = action.payload;
        },

        [translateText.rejected]: (state) => {
            state.isAnswerLoading = false;
            state.isAnswerError = true;
        },
    },
});

export default translateSlice.reducer;