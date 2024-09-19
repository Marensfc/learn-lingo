import axios from 'axios';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const register = createAsyncThunk('auth/register', async (data, thunkApi) => {
//   try {
//   } catch (error) {
//     thunkApi.rejectWithValue(error.message);
//   }
// });

const login = createAsyncThunk('auth/login', async (data, thunkApi) => {
  try {
    // axios.get()
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});
