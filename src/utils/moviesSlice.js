import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        NowplayingMovies: null,
    },
    reducers:{
        addNowplayingMovies: (state, action)=>{
            state.NowplayingMovies = action.payload;
        },
        EmptyStore:(state)=>{
             state.NowplayingMovies =null;
        },
    }
});

export  const {addNowplayingMovies, EmptyStore} = moviesSlice.actions;
export default moviesSlice.reducer ;