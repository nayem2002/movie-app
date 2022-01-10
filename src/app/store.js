import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../feature/MoveListSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
