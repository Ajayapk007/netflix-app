import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import usesmoviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer:{
        user : userReducer,
        moviesList : usesmoviesReducer,
    }
});

export default appStore;