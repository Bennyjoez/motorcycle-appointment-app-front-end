import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const postRegister = createAsyncThunk('postRegister', async (data) => {
  const response = await fetch(`http://localhost:3000/api/${data.endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data.obj),
  });

  const responseData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    throw new Error(responseData.message);
  }
  return responseData;
});

const initialState = {
  user: {},
  reservation: [],
  message: '',
  loggedIn: false,
  createmsg: '',
};

const SessionsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: () => initialState,
    setUsername: (state, action) => {
      state.user.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRegister.pending, (state) => {
        state.createmsg = 'loading';
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        const responseData = action.payload;

        state.user = responseData;
        state.loggedIn = true;
        state.createmsg = 'success';
      })
      .addCase(postRegister.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        createmsg: action.error.message,
      }));
  },
});

export const { logOut, setUsername } = SessionsSlice.actions;
export default SessionsSlice.reducer;
