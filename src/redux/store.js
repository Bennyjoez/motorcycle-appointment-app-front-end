import { configureStore } from '@reduxjs/toolkit';
import sessionsReducer from './sessions/sessionsSlice';
import reservationReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    reservations: reservationReducer,
  },
});

export default store;
