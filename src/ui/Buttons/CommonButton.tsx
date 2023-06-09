import { FC } from "react";
import { AppState, ButtonName, AppStatus } from "../../types/types";
import styles from "./CommonButton.module.css";
import { ITEM_COLORS } from "../../constants";
import {
  NextButtonView,
  PauseButtonView,
  PlayButtonView,
  SettingsButtonView,
} from "./ButtonsView";

// @cssOn
const playBtnStyle =
  "w-[128px] h-[96px] flex justify-center items-center rounded-[32px]";
const mainBtnStyle =
  "w-[80px] h-[80px] flex justify-center items-center rounded-[24px]";
// @cssOff

// @typesOn
interface CommonButtonProps {
  appState?: AppState;
  appStatus: AppStatus;
  buttonName: ButtonName;
  onClick?: () => void;
}
// @typesOff

// @renderOn
const CommonButton: FC<CommonButtonProps> = ({
  appState,
  appStatus,
  buttonName,
  onClick,
}) => {
  const { buttonColor, backgroundColor } = getComponentColors(
    appStatus,
    buttonName
  );
  const { buttonComponent, componentStyle } = getComponentView({
    buttonName,
    appState,
    buttonColor,
    backgroundColor,
  });

  return (
    <button className={componentStyle} onClick={onClick}>
      {buttonComponent}
    </button>
  );
};
// renderOff

function getComponentColors(appStatus: AppStatus, buttonName: ButtonName) {
  let isButtonNamePlay: boolean = buttonName === ButtonName.PLAY;
  let buttonColor, backgroundColor;
  switch (appStatus) {
    case AppStatus.FOCUS:
      buttonColor = ITEM_COLORS.focus;
      backgroundColor = isButtonNamePlay
        ? styles.focusPlayBackground
        : "bg-focusBg";
      break;
    case AppStatus.SHORT_BREAK:
      buttonColor = ITEM_COLORS.shortBreak;
      backgroundColor = isButtonNamePlay
        ? styles.shortBreakPlayBackground
        : "bg-shortBreakBg";
      break;
    case AppStatus.LONG_BREAK:
      buttonColor = ITEM_COLORS.longBreak;
      backgroundColor = isButtonNamePlay
        ? styles.longBreakPlayBackground
        : "bg-longBreakBg";
      break;
  }
  return { buttonColor, backgroundColor };
}

function getComponentView({
  buttonName,
  appState,
  buttonColor,
  backgroundColor,
}: {
  buttonName: ButtonName;
  appState?: AppState;
  buttonColor: string;
  backgroundColor: string;
}) {
  let buttonComponent, componentStyle;
  switch (buttonName) {
    case ButtonName.PLAY:
      buttonComponent =
        appState === AppState.PLAY ? (
          <PauseButtonView color={buttonColor} />
        ) : (
          <PlayButtonView color={buttonColor} />
        );
      componentStyle = `${playBtnStyle} ${backgroundColor}`;
      break;
    case ButtonName.NEXT:
      buttonComponent = <NextButtonView color={buttonColor} />;
      componentStyle = `${mainBtnStyle} ${backgroundColor}`;
      break;
    case ButtonName.SETTINGS:
      buttonComponent = <SettingsButtonView color={buttonColor} />;
      componentStyle = `${mainBtnStyle} ${backgroundColor}`;
      break;
  }
  return { buttonComponent, componentStyle };
}

export default CommonButton;
