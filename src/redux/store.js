import { configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
