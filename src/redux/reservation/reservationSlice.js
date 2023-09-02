import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postReservation = createAsyncThunk(
  'postReservation',
  async (data) => {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const RESERVATION_URL = `http://localhost:3000/api/users/${userId}/reservations`;
    const response = await axios.post(RESERVATION_URL, data);
    return response.data;
  },
);

export const getReservations = createAsyncThunk('getReservations', async () => {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const RESERVATION_URL = `http://localhost:3000/api/users/${userId}/reservations`;
  const response = await axios.get(RESERVATION_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { data } = response;
  const reservation = data.map((reservation) => ({
    id: reservation.id,
    motorcycle_id: reservation.motorcycle_id,
    user_id: reservation.user_id,
    date: reservation.date,
    city: reservation.city,
    status: reservation.status,
  }));
  return reservation;
});

const initialState = {
  reservation: [],
  creationMsg: '',
  loading: false,
  error: '',
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    createMsgAction: (state, action) => {
      state.creationMsg = action.payload;
    },
    setRemoveReservation: (state, action) => {
      state.reservation = state.reservation.filter(
        (reservation) => reservation.motorcycle_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        state.reservation.push(action.payload);
        state.loading = false;
        state.creationMsg = 'success';
      })
      .addCase(postReservation.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        creationMsg: action.error.message,
      }))
      .addCase(getReservations.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.loading = false;
      })
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { createMsgAction, setRemoveReservation } = reservationSlice.actions;
export default reservationSlice.reducer;