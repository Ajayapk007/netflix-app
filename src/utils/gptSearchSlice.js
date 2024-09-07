import { createSlice } from "@reduxjs/toolkit";


const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        searchedMovie: null,
    },
    reducers:{
        toggleGptSearchView:(state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchMoive:(state, actions) =>{
            state.searchedMovie = actions.payload ;
        },

    }
});

export const {toggleGptSearchView, addSearchMoive } = gptSearchSlice.actions; 

export default gptSearchSlice.reducer;

