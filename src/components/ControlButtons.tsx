import { FunctionComponent } from "react";
import { AppState, ButtonName, AppStatus } from "../types/types";
import CommonButton from "../ui/Buttons/CommonButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { timerSlice } from "../store/reducers/TimerSlice";

interface ControlButtonsProps {}

// @renderOn
const ControlButtons: FunctionComponent<ControlButtonsProps> = () => {
  const { appState, appStatus, isShortBreakCompleted } = useAppSelector(
    (state) => state.timerReducer
  );
  const { changeAppState, changeAppStatus } = timerSlice.actions;
  const dispatch = useAppDispatch();
  console.log({ appStatus, isShortBreakCompleted });

  function handlePlayButtonClick() {
    if (appState === AppState.PAUSE || appState === AppState.STOP) {
      dispatch(changeAppState(AppState.PLAY));
    }
    if (appState === AppState.PLAY) {
      dispatch(changeAppState(AppState.PAUSE));
    }
  }

  function handleNextButtonClick() {
    if (appStatus === AppStatus.FOCUS && isShortBreakCompleted) {
      dispatch(changeAppStatus(AppStatus.LONG_BREAK));
    }
    if (appStatus === AppStatus.FOCUS && !isShortBreakCompleted) {
      dispatch(changeAppStatus(AppStatus.SHORT_BREAK));
    }
    if (
      appStatus === AppStatus.SHORT_BREAK ||
      appStatus === AppStatus.LONG_BREAK
    ) {
      dispatch(changeAppStatus(AppStatus.FOCUS));
    }
  }

  function handleSettingButtonClick() {}

  return (
    <div className="flex items-center gap-x-4">
      <CommonButton
        appStatus={appStatus}
        buttonName={ButtonName.SETTINGS}
        onClick={handleSettingButtonClick}
      />
      <CommonButton
        appState={appState}
        appStatus={appStatus}
        buttonName={ButtonName.PLAY}
        onClick={handlePlayButtonClick}
      />
      <CommonButton
        appStatus={appStatus}
        buttonName={ButtonName.NEXT}
        onClick={handleNextButtonClick}
      />
    </div>
  );
};
// @renderOff

export default ControlButtons;
