import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import usesmoviesReducer from './moviesSlice';
import useGpt from './gptSearchSlice'
import ConfigReducer from './configSlice'

const appStore = configureStore({
    reducer:{
        user : userReducer,
        moviesList : usesmoviesReducer,
        gpt : useGpt,
        config: ConfigReducer,
    }
});

export default appStore;