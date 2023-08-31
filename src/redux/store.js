import { configureStore } from '@reduxjs/toolkit';
import sessionsReducer from './sessions/sessionsSlice';
import motorcycleReducer from './motorcycles/motorcycleSlice';

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    motorcycles: motorcycleReducer,
  },
});

export default store;
