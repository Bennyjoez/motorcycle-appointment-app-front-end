// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycleSlice';
import sessionsReducer from './sessions/sessionsSlice';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  motorcycles: motorcycleReducer,
  // Add other slice reducers here
});

export default rootReducer;
