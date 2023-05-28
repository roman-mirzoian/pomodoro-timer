import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState, AppStatus, TimerState } from "../../types/types";

const initialState: TimerState = {
  appState: AppState.STOP,
  appStatus: AppStatus.FOCUS,
  isShortBreakCompleted: false,
  settings: {
    darkMode: false,
    focusLength: 25,
    shortBreakLength: 25,
    longBreakLength: 25,
    notifications: false,
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeAppState(state, action: PayloadAction<AppState>) {
      state.appState = action.payload;
    },
    changeAppStatus(state, action: PayloadAction<AppStatus>) {
      state.appStatus = action.payload;
      if (
        !state.isShortBreakCompleted &&
        action.payload === AppStatus.SHORT_BREAK
      ) {
        state.isShortBreakCompleted = true;
      }
      if (
        state.isShortBreakCompleted &&
        action.payload === AppStatus.LONG_BREAK
      ) {
        state.isShortBreakCompleted = false;
      }
    },
  },
});

export default timerSlice.reducer;
