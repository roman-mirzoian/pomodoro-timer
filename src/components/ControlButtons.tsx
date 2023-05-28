import { FunctionComponent } from "react";
import { AppState, ButtonName, StatusState } from "../types/types";
import CommonButton from "../ui/Buttons/CommonButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { timerSlice } from "../store/reducers/TimerSlice";

interface ControlButtonsProps {}

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

  return (
    <div className="flex items-center gap-x-4">
      <CommonButton
        state={StatusState.FOCUS}
        buttonName={ButtonName.SETTINGS}
      />
      <CommonButton
        appState={appState}
        state={StatusState.FOCUS}
        buttonName={ButtonName.PLAY}
        onClick={handlePlayButtonClick}
      />
      <CommonButton state={StatusState.FOCUS} buttonName={ButtonName.NEXT} />
    </div>
  );
};

export default ControlButtons;
