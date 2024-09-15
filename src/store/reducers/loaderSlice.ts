import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    startLoader: state => {
      state.loading = true;
    },
    stopLoader: state => {
      state.loading = false;
    },
  },
});

export const { startLoader, stopLoader } = loaderSlice.actions;
