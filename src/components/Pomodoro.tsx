import { FC, useState } from "react";
import Timer from "./Times";
import ControlButtons from "./ControlButtons";
import "../index.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { AppStatus } from "../types/types";
import StatusBar from "../ui/StatusBar/StatusBar";
import SettingsView from "../ui/Modals/Settings/Settings";
import { timerSlice } from "../store/reducers/TimerSlice";

// @cssOn
const mainStyle =
  "w-full h-full flex flex-col gap-8 justify-center items-center";
// @cssOff

// @renderOn
const Pomodoro: FC = () => {
  const { appStatus, appState } = useAppSelector((state) => state.timerReducer);
  const dispatch = useAppDispatch();
  const { stopTimer } = timerSlice.actions;
  const [showSettings, setShowSettings] = useState<boolean>(false);

  let appBackgroundStyle;
  switch (appStatus) {
    case AppStatus.FOCUS:
      appBackgroundStyle = `${mainStyle} bg-focusBg`;
      break;
    case AppStatus.SHORT_BREAK:
      appBackgroundStyle = `${mainStyle} bg-shortBreakBg`;
      break;
    case AppStatus.LONG_BREAK:
      appBackgroundStyle = `${mainStyle} bg-longBreakBg`;
      break;
  }

  function handleOpenSettings() {
    setShowSettings((prevViewState) => !prevViewState);
    dispatch(stopTimer());
  }
  function handleCloseSettings() {
    setShowSettings(false);
  }

  return (
    <div className={appBackgroundStyle}>
      <StatusBar status={appStatus} />
      <Timer />
      <ControlButtons handleOpenSettings={handleOpenSettings} />
      {showSettings && <SettingsView onClose={handleCloseSettings} />}
    </div>
  );
};
// @renderOff

export default Pomodoro;
