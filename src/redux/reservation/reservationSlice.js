import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const userId = JSON.parse(localStorage.getItem('userId'));
// const RESERVATION_URL = `http://localhost:3000/api/users/${userId}/reservations`;

export const postReservation = createAsyncThunk('postReservation', async (data) => {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const RESERVATION_URL = `http://localhost:3000/api/users/${userId}/reservations`;
  const response = await axios.post(RESERVATION_URL, data);
  // console.log('This is your response!');
  return response.data;
  // const responseData = await response.json();
  // if (response.status < 200 || response.status >= 300) {
  //   throw new Error('Failed to add reservation');
  // }
  // return responseData;
});

export const getReservations = createAsyncThunk('getReservations', async () => {
  const userId = JSON.parse(localStorage.getItem('user')).id;
  const RESERVATION_URL = `http://localhost:3000/api/users/${userId}/reservations`;
  const response = await axios.get(RESERVATION_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(response.data);
  // return response.data;
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
  // reservationList: [],
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
      state.reservation = state.reservation
        .filter((reservation) => reservation.motorcycle_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        console.log(action.payload);
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
        // state.reservationList = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }));
  },
});

export const { createMsgAction, setRemoveReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
