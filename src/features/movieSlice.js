import {  createSlice } from '@reduxjs/toolkit';



export const movieSlice = createSlice({
  name: 'movie',
  initialState:{
    value:[],
  },
  reducers: {
    movieList: (state,action) => {
      state.value = action.payload;
    },
  },

});

export const { movieList } = movieSlice.actions;

export const selectMovie = (state) => state.movie.value;



export default movieSlice.reducer;
