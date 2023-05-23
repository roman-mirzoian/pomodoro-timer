import { FC } from "react";
import brain from "../../assets/svg/brain.svg";
import shortCoffee from "../../assets/svg/short-coffee.svg";
import longCoffee from "../../assets/svg/long-coffee.svg";
import styles from "./StatusBar.module.css";

// @cssOn
const baseLabelStyle =
  "h-[48px] flex items-center gap-2 rounded-full border-2 px-4 py-2";
const focusLabelStyles = `${baseLabelStyle} bg-focusBg w-[136px]  border-focusItem`;
const shortBreakLabelStyles = `${baseLabelStyle} bg-shortBreakBg w-[195px]  border-shortBreakItem whitespace-nowrap`;
const longBreakStyles = `${baseLabelStyle} bg-longBreakBg w-[190px]  border-longBreakItem whitespace-nowrap`;
// @cssOff

// @typesOn
export enum StatusState {
  FOCUS = "FOCUS",
  SHORT_BREAK = "SHORT_BREAK",
  LONG_BREAK = "LONG_BREAK",
}

interface StatusBarProps {
  status: StatusState;
}
// @typesOff

// @renderOn
const StatusBar: FC<StatusBarProps> = ({ status }) => {
  let statusText, statusIcon, labelStyles;
  switch (status) {
    case StatusState.FOCUS:
      statusText = "Focus";
      statusIcon = <img src={brain} alt="focus" />;
      labelStyles = focusLabelStyles;
      break;
    case StatusState.SHORT_BREAK:
      statusText = "Short Break";
      statusIcon = <img src={shortCoffee} alt="short break" />;
      labelStyles = shortBreakLabelStyles;
      break;
    case StatusState.LONG_BREAK:
      statusText = "Long Break";
      statusIcon = <img src={longCoffee} alt="long break" />;
      labelStyles = longBreakStyles;
      break;
  }

  return (
    <div className={labelStyles}>
      <span className={styles.longBreakIcon}>{statusIcon}</span>{" "}
      <span className={styles.statusText}>{statusText}</span>
    </div>
  );
};
// @renderOff

export default StatusBar;
