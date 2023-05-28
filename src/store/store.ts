import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timerReducer from "./reducers/TimerSlice";

const rootReducers = combineReducers({
  timerReducer,
});

export const setupStore = () => {
  return configureStore({ reducer: rootReducers });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore["dispatch"];
