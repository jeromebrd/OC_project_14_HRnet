import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/slices/employee';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
