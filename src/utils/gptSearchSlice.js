import { createSlice } from "@reduxjs/toolkit";


const gptSearchSlice = createSlice({
    name:"gpt",
    initialState:{
        showSearchBar: false,
        searchedMovie: null,
        showSearchGpt: null,
    },
    reducers:{
        toggleSearchBar:(state) =>{
            state.showSearchBar = !state.showSearchBar;
        },
        toggleSearchGpt:(state) =>{
            state.showSearchGpt = !state.showSearchGpt;
        },
        addSearchMoive:(state, actions) =>{
            state.searchedMovie = actions.payload ;
        },

    }
});

export const {toggleSearchBar, addSearchMoive, toggleSearchGpt } = gptSearchSlice.actions; 

export default gptSearchSlice.reducer;

