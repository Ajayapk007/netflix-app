import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        NowplayingMovies: null,
        PopularMovies: null,
        TrendingMovies: null,
        UpcomingMovies: null,
    },
    reducers:{
        addNowplayingMovies: (state, action)=>{
            state.NowplayingMovies = action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.UpcomingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.PopularMovies = action.payload;
        },
        adduseTrendingMovies: (state, action)=>{
            state.TrendingMovies = action.payload;
        },
        EmptyStore:(state)=>{
             state.NowplayingMovies =null;
             state.PopularMovies = null;
             state.TrendingMovies = null;
             state.UpcomingMovies = null;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
    }
});

export  const {addNowplayingMovies, EmptyStore, addUpcomingMovies, addPopularMovies, adduseTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer ;