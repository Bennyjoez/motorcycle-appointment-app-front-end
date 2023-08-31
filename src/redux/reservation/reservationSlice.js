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
      }));
  },
});

export const { createMsgAction, setRemoveReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
