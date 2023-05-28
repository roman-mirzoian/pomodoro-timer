export interface TimerState {
  appState: AppState;
  appStatus: AppStatus;
  isShortBreakCompleted: boolean;
  settings: {
    darkMode: boolean;
    focusLength: number;
    shortBreakLength: number;
    longBreakLength: number;
    notifications: boolean;
  };
}

export enum AppState {
  STOP = "STOP",
  PLAY = "PLAY",
  PAUSE = "PAUSE",
}

export enum AppStatus {
  FOCUS = "FOCUS",
  SHORT_BREAK = "SHORT_BREAK",
  LONG_BREAK = "LONG_BREAK",
}

export enum ButtonName {
  PLAY = "PLAY",
  NEXT = "NEXT",
  SETTINGS = "SETTINGS",
}
