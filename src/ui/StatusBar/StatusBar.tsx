import { FC } from "react";
import styles from "./StatusBar.module.css";
import { AppColors, AppStatus } from "../../types/types";
import { Brain, Cup } from "./StatusView";

// @cssOn
const baseLabelStyle =
  "h-[48px] flex items-center gap-2 rounded-full border-2 px-4 py-2";
const focusLabelStyles = `${baseLabelStyle} bg-focusBg w-[136px]  border-focusItem`;
const shortBreakLabelStyles = `${baseLabelStyle} bg-shortBreakBg w-[195px]  border-shortBreakItem whitespace-nowrap`;
const longBreakStyles = `${baseLabelStyle} bg-longBreakBg w-[190px]  border-longBreakItem whitespace-nowrap`;
// @cssOff

// @typesOn
interface StatusBarProps {
  status: AppStatus;
}
// @typesOff

// @renderOn
const StatusBar: FC<StatusBarProps> = ({ status }) => {
  let statusText, statusIcon, labelStyles;
  switch (status) {
    case AppStatus.FOCUS:
      statusText = "Focus";
      statusIcon = <Brain color={AppColors.FOCUS} />;
      labelStyles = focusLabelStyles;
      break;
    case AppStatus.SHORT_BREAK:
      statusText = "Short Break";
      statusIcon = <Cup color={AppColors.SHORT_BREAK} />;
      labelStyles = shortBreakLabelStyles;
      break;
    case AppStatus.LONG_BREAK:
      statusText = "Long Break";
      statusIcon = <Cup color={AppColors.LONG_BREAK} />;
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
