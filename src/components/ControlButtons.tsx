import { FunctionComponent } from "react";
import { AppState, ButtonName, AppStatus } from "../types/types";
import CommonButton from "../ui/Buttons/CommonButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { timerSlice } from "../store/reducers/TimerSlice";

interface ControlButtonsProps {}

// @renderOn
const ControlButtons: FunctionComponent<ControlButtonsProps> = () => {
  const { appState } = useAppSelector((state) => state.timerReducer);
  const { changeAppState } = timerSlice.actions;
  const dispatch = useAppDispatch();

  function handlePlayButtonClick() {
    if (appState === AppState.PAUSE || appState === AppState.STOP) {
      dispatch(changeAppState(AppState.PLAY));
    }
    if (appState === AppState.PLAY) {
      dispatch(changeAppState(AppState.PAUSE));
    }
  }

  function handleNextButtonClick() {

  }

  return (
    <div className="flex items-center gap-x-4">
      <CommonButton
        state={AppStatus.FOCUS}
        buttonName={ButtonName.SETTINGS}
      />
      <CommonButton
        appState={appState}
        state={AppStatus.FOCUS}
        buttonName={ButtonName.PLAY}
        onClick={handlePlayButtonClick}
      />
      <CommonButton state={AppStatus.FOCUS} buttonName={ButtonName.NEXT} />
    </div>
  );
};
// @renderOff

export default ControlButtons;
