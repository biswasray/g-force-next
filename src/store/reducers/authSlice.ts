import { createSlice, SerializedError } from "@reduxjs/toolkit";
// import { initializeSystem } from '@src/utils';

export interface AuthState {
  data: unknown | null;
  loading: boolean;
  error: SerializedError | null;
}
const initialState: AuthState = {
  data: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers() {},
});

export const {} = authSlice.actions;
