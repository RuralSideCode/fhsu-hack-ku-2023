import { configureStore } from '@reduxjs/toolkit';

import problemReducer from '../features/problem/problem';
import codenumberReducer from '../features/codenumber/codenumber';
import playerReducer from "../features/player/player";

export default configureStore({
  reducer: {
    problem: problemReducer,
    codenumber: codenumberReducer,
    player: playerReducer
  },
})