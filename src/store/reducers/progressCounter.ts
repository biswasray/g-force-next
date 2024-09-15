import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressCounterState {
  currentProgress: number;
  totalProgress: number;
  isProgressing: boolean;
  progressNames?: string[];
}

const initialState: ProgressCounterState = {
  currentProgress: 0,
  totalProgress: 0,
  isProgressing: false,
};

export const progressCounterSlice = createSlice({
  name: 'progressCounter',
  initialState,
  reducers: {
    startProgress: (
      state,
      action: PayloadAction<{
        totalProgress: number;
        progressNames?: string[];
      }>,
    ) => {
      state.currentProgress = 0;
      state.totalProgress = action.payload.totalProgress;
      state.progressNames = action.payload.progressNames;
      state.isProgressing = state.currentProgress < state.totalProgress;
    },
    increaseProgress(state, action: PayloadAction<number | undefined>) {
      state.currentProgress = action.payload ?? state.currentProgress + 1;
      state.isProgressing = state.currentProgress < state.totalProgress;
    },
    resetProgress() {
      return initialState;
    },
  },
});

export const { startProgress, increaseProgress, resetProgress } =
  progressCounterSlice.actions;
