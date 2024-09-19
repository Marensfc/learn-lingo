import { createSlice } from '@reduxjs/toolkit';

const AUTH_INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  //   extraReducers: builder => builder.addCase(),
});

export const authReducer = authSlice.reducer;
