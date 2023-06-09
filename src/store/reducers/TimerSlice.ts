import { createSlice } from "@reduxjs/toolkit";
import { AppState, AppStatus, TimerState } from "../../types/types";

const initialState: TimerState = {
  appState: AppState.STOP,
  appStatus: AppStatus.FOCUS,
  isShortBreakCompleted: false,
  settings: {
    darkMode: false,
    focusLength: 1,
    shortBreakLength: 2,
    longBreakLength: 3,
    notifications: false,
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeAppState(state) {
      let appState;
      if (state.appState === AppState.PLAY) {
        appState = AppState.PAUSE;
      } else {
        appState = AppState.PLAY;
      }
      if (appState) {
        state.appState = appState;
      }
    },
    setNextAppStatus(state) {
      let appStatus, isShortBreakCompleted;
      if (state.appStatus === AppStatus.FOCUS && !state.isShortBreakCompleted) {
        appStatus = AppStatus.SHORT_BREAK;
        isShortBreakCompleted = true;
      }
      if (state.appStatus === AppStatus.FOCUS && state.isShortBreakCompleted) {
        appStatus = AppStatus.LONG_BREAK;
        isShortBreakCompleted = false;
      }
      if (
        state.appStatus === AppStatus.SHORT_BREAK ||
        state.appStatus === AppStatus.LONG_BREAK
      ) {
        appStatus = AppStatus.FOCUS;
      }

      if (appStatus) {
        state.appStatus = appStatus;
      }
      if (isShortBreakCompleted !== undefined) {
        state.isShortBreakCompleted = isShortBreakCompleted;
      }
    },
  },
});

export default timerSlice.reducer;
