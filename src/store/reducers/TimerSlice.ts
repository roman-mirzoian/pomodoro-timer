import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState, AppStatus } from "../../types/types";

interface TimerState {
  appState: AppState;
  status: AppStatus;
  settings: {
    darkMode: boolean;
    focusLength: number;
    shortBreakLength: number;
    longBreakLength: number;
    notifications: boolean;
  };
}

const initialState: TimerState = {
  appState: AppState.STOP,
  status: AppStatus.FOCUS,
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
    changeAppState(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case AppState.PAUSE:
          state.appState = AppState.PAUSE;
          break;
        case AppState.PLAY:
          state.appState = AppState.PLAY;
          break;
        case AppState.STOP:
          state.appState = AppState.STOP;
          break;
      }
    },
  },
});

export default timerSlice.reducer;
