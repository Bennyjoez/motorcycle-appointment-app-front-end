import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://motorcycle-appointment.onrender.com/';

export const postReservation = createAsyncThunk(
  'postReservation',
  async (data) => {
    const RESERVATION_URL = `${url}api/users/${data.user_id}/reservations`;
    const response = await axios.post(RESERVATION_URL, data);
    return response.data;
  },
);

export const getReservations = createAsyncThunk(
  'getReservations',
  async (id) => {
    const RESERVATION_URL = `${url}api/users/${id}/reservations`;
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
  },
);

const initialState = {
  reservation: [],
  creationMsg: '',
  loading: false,
  error: '',
  reservationsFetched: false,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    createMsgAction: (state, action) => {
      state.creationMsg = action.payload;
    },

    markReservationsAsFetched: (state) => {
      state.reservationsFetched = true;
    },

    updateReservations: (state, action) => {
      const motorcycleIdToRemove = action.payload;

      const arr = state.reservation.filter((item) => item.motorcycle_id !== motorcycleIdToRemove);

      state.reservation = arr;
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

export const {
  createMsgAction, markReservationsAsFetched, updateReservations,
} = reservationSlice.actions;
export default reservationSlice.reducer;
