import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
  status: 'idle',
};

export const applicationFromSlice = createSlice({
  name: 'applicationForm',
  initialState,
  reducers: {
    updateApplicationForm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateApplicationForm } = applicationFromSlice.actions;

export const selectApplicationForm = (state) => state.applicationForm.value;

export default applicationFromSlice.reducer;
