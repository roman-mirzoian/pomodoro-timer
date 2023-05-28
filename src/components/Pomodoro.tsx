import { FunctionComponent } from "react";
import Status from "./Status";
import Timer from "./Times";
import ControlButtons from "./ControlButtons";
import "../index.css";
import { appBackground } from "../constants";

// @cssOn
const mainStyle =
  "w-full h-full flex flex-col gap-8 justify-center items-center";
// @cssOff

interface PomodoroProps {}

// @renderOn
const Pomodoro: FunctionComponent<PomodoroProps> = () => {
  const state = "focus";
  let appBackgroundStyle;
  switch (state) {
    case "focus":
      appBackgroundStyle = `${mainStyle} ${appBackground}`;
      break;
  }
  return (
    <div className={appBackgroundStyle}>
      <Status />
      <Timer />
      <ControlButtons />
    </div>
  );
};
// @renderOff

export default Pomodoro;
