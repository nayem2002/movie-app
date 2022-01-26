import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../components/api/callApi';

const apiKey = 'd45d76ad';

export const fatchMove = createAsyncThunk(
  'movies/fatchMove',
  async (search) => {
    const res = await axios.get(`?apiKey=${apiKey}&s=${search}&type="movie"`);
    const data = res.json();
    return data.data;
  }
);
//  Fatching Shwos
export const fatchShows = createAsyncThunk(
  'movie/fatchShows',
  async (search) => {
    const res = await axios.get(`?apiKey=${apiKey}&s=${search}&type="series"`);
     const data = res.json();
    return data.data;
  }
);

//  Fatching Movie And Shows Detels
export const fatchMovieAndShows = createAsyncThunk(
  'movisAndShows/fatchMovieAndShows',
  async (id) => {
    const res = await axios.get(`?apiKey=${apiKey}&i=${id}&plot=full`);
      const data = res.json();
    return data.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  slectMoveAndShow: {},
};

const MoveListSlice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    removeSlectedMoveAndShows: (state, action) => {
      state.slectMoveAndShow = {};
    },
  },
  extraReducers: {
    [fatchMove.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fatchMove.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.movies = action.payload;
    },
    [fatchMove.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [fatchShows.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.shows = action.payload;
    },
    [fatchMovieAndShows.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.slectMoveAndShow = action.payload;
    },
  },
});
export const { removeSlectedMoveAndShows } = MoveListSlice.actions;
export default MoveListSlice.reducer;
