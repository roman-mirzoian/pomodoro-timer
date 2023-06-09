import { FC } from "react";
import { ButtonName } from "../types/types";
import CommonButton from "../ui/Buttons/CommonButton";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { timerSlice } from "../store/reducers/TimerSlice";

// @renderOn
const ControlButtons: FC = () => {
  const { appState, appStatus } = useAppSelector((state) => state.timerReducer);
  const { changeAppState, setNextAppStatus } = timerSlice.actions;
  const dispatch = useAppDispatch();

  function handlePlayButtonClick() {
    dispatch(changeAppState());
  }

  function handleNextButtonClick() {
    dispatch(setNextAppStatus());
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
