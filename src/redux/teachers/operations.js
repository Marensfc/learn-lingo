import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchAll',
  async (paginationParams, thunkApi) => {
    const url =
      'https://learn-lingo-1f89d-default-rtdb.europe-west1.firebasedatabase.app/teachers.json';
    try {
      if (paginationParams.isFirstPage) {
        const allTeachers = await axios.get(url);
        const response = await axios.get(
          `${url}?orderBy="$key"&startAt="${paginationParams.startAt}"&endAt="${paginationParams.endAt}"`
        );

        return {
          items: Object.keys(response.data).map(key => response.data[key]),
          totalPages:
            Math.ceil(allTeachers.data.length / paginationParams.perPage) - 1,
          isFirstPage: paginationParams.isFirstPage,
        };
      } else {
        const response = await axios.get(
          `${url}?orderBy="$key"&startAt="${paginationParams.startAt}"&endAt="${paginationParams.endAt}"`
        );

        return {
          items: Object.keys(response.data).map(key => response.data[key]),
          isFirstPage: false,
        };
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
