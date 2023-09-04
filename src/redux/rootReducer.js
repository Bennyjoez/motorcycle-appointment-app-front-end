// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import motorcycleReducer from './motorcycles/motorcycleSlice';
import sessionsReducer from './sessions/sessionsSlice';
import reservationReducer from './reservation/reservationSlice';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  motorcycles: motorcycleReducer,
  reservations: reservationReducer,
});

export default rootReducer;
