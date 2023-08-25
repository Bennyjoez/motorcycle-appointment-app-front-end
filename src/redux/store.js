import { configureStore } from '@reduxjs/toolkit';
import sessionsReducer from './sessions/sessionsSlice';

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
  },
});

export default store;
