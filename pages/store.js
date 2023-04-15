import { configureStore } from '@reduxjs/toolkit';

import problemReducer from '../features/problem/problem';

export default configureStore({
  reducer: {
    problem: problemReducer
  },
})