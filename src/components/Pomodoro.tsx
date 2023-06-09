import { FC } from "react";
import Timer from "./Times";
import ControlButtons from "./ControlButtons";
import "../index.css";
import { useAppSelector } from "../hooks/redux";
import { AppStatus } from "../types/types";
import StatusBar from "../ui/StatusBar/StatusBar";

// @cssOn
const mainStyle =
  "w-full h-full flex flex-col gap-8 justify-center items-center";
// @cssOff

interface PomodoroProps {}

// @renderOn
const Pomodoro: FC<PomodoroProps> = () => {
  const { appStatus } = useAppSelector((state) => state.timerReducer);

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

  return (
    <div className={appBackgroundStyle}>
      <StatusBar status={appStatus} />
      <Timer />
      <ControlButtons />
    </div>
  );
};
// @renderOff

export default Pomodoro;
