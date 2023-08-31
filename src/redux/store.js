import { configureStore } from '@reduxjs/toolkit';
import sessionsReducer from './sessions/sessionsSlice';
import reservationReducer from './reservation/reservationSlice';
import motorcycleReducer from './motorcycles/motorcycleSlice';

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    reservations: reservationReducer,
    motorcycles: motorcycleReducer,
  },
});

export default store;
