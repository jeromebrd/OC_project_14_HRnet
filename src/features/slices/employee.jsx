import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      // Convertir les dates en chaînes de caractères au format ISO avant de les stocker
      const employeeWithSerializedDates = {
        ...action.payload,
        dateOfBirth: action.payload.dateOfBirth
          ? dayjs(action.payload.dateOfBirth).toISOString()
          : null,
        startDate: action.payload.startDate
          ? dayjs(action.payload.startDate).toISOString()
          : null,
      };

      state.push(employeeWithSerializedDates);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
