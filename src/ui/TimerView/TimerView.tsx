import { FunctionComponent } from "react";
import { AppStatus } from "../../types/types";
import styles from "./TimerView.module.css";

// @cssOn
const mainStyle = "flex flex-col items-center justify-center";
// @cssOff

// @typesOn
interface TimerViewProps {
  state: string;
  time: {
    minutes: number;
    seconds: number;
  };
}
// @typesOff

// @renderOn
const TimerView: FunctionComponent<TimerViewProps> = ({ state, time }) => {
  const { minutes, seconds } = time;
  let numberColor;
  switch (state) {
    case AppStatus.FOCUS:
      numberColor = "text-focusItem";
      break;
  }

  return (
    <div className={mainStyle}>
      <div className={`${styles.number} ${mainStyle}`}>
        <div className={numberColor}>{minutes}</div>
        <div className={numberColor}>
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </div>
  );
};
// @renderOff

export default TimerView;
