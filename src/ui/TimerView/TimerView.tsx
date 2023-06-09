import { FC, useEffect } from "react";
import { AppStatus } from "../../types/types";
import styles from "./TimerView.module.css";

// @cssOn
const mainStyle = "flex flex-col items-center justify-center";
// @cssOff

// @typesOn
interface TimerViewProps {
  status: AppStatus;
  time: {
    minutes: number;
    seconds: number;
  };
  restartTimer: () => void;
}
// @typesOff

// @renderOn
const TimerView: FC<TimerViewProps> = ({ status, time, restartTimer }) => {
  const { minutes, seconds } = time;

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      restartTimer();
    }
  }, [minutes, seconds]);

  let numberColor;
  switch (status) {
    case AppStatus.FOCUS:
      numberColor = "text-focusItem";
      break;
    case AppStatus.SHORT_BREAK:
      numberColor = "text-shortBreakItem";
      break;
    case AppStatus.LONG_BREAK:
      numberColor = "text-longBreakItem";
      break;
  }

  return (
    <div className={mainStyle}>
      <div className={`${styles.number} ${mainStyle}`}>
        <div className={numberColor}>{getChangedTime(minutes)}</div>
        <div className={numberColor}>{getChangedTime(seconds)}</div>
      </div>
    </div>
  );
};
// @renderOff

// @helpersOn
function getChangedTime(time: number) {
  return time < 10 ? `0${time}` : time;
}
// @helpersOff

export default TimerView;
