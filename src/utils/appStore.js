import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import usesmoviesReducer from './moviesSlice';
import useGpt from './gptSearchSlice'

const appStore = configureStore({
    reducer:{
        user : userReducer,
        moviesList : usesmoviesReducer,
        gpt : useGpt,
    }
});

export default appStore;