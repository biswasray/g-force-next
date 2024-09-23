import { SignInMutation } from "@/services/generated";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";
import { resetAllState } from "../actions";
// import { initializeSystem } from '@src/utils';

export interface AuthState {
  data: SignInMutation["signIn"] | null;
  loading: boolean;
  error: SerializedError | null;
}
const initialState: AuthState = {
  data: null,
  loading: false,
  error: null,
};

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch }) => {
    await dispatch(resetAllState());
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<SignInMutation["signIn"]>) {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(signOut.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
      state.data = null;
    });
  },
});

export const {} = authSlice.actions;
