import { FunctionComponent } from "react";
import Status from "./Status";
import Timer from "./Times";
import ControlButtons from "./ControlButtons";
import "../index.css";

interface PomodoroProps {}

const Pomodoro: FunctionComponent<PomodoroProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-200">
      <Status />
      <Timer />
      <ControlButtons />
    </div>
  );
};

export default Pomodoro;
