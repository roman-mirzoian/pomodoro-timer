import { FunctionComponent, useEffect, useState } from "react";
import TimerView from "../ui/TimerView/TimerView";
import { AppState, AppStatus } from "../types/types";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { timerSlice } from "../store/reducers/TimerSlice";

interface TimerProps {}

// @renderOn
const Timer: FunctionComponent<TimerProps> = () => {
  const { appState, appStatus, settings } = useAppSelector(
    (state) => state.timerReducer
  );
  const { setNextAppStatus } = timerSlice.actions;
  const dispatch = useAppDispatch();

  const [currentTime, setCurrentTime] = useState({
    minutes: 1,
    seconds: 0,
  });
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  useEffect(() => {
    const starterTime = getTimeByStatus({ appStatus, settings });
    setCurrentTime({
      minutes: starterTime,
      seconds: 0,
    });
    setTimeInSeconds(starterTime * 60);
  }, [appStatus]);

  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  function restartTimer() {
    dispatch(setNextAppStatus());
    const newTime = getTimeByStatus({ appStatus, settings });
    setCurrentTime({
      minutes: newTime,
      seconds: 0,
    });
    setTimeInSeconds(newTime * 60);
  }

  useEffect(() => {
    function timerAction() {
      if (timerId) {
        clearInterval(timerId);
      }
      if (appState === AppState.PLAY) {
        const interval = setInterval(() => {
          setTimeInSeconds((prevTime) => {
            const updatedTime = prevTime - 1;
            const minutes = Math.floor(updatedTime / 60);
            const seconds = updatedTime % 60;
            setCurrentTime({ minutes, seconds });
            return updatedTime;
          });
        }, 1000);

        setTimerId(interval);
        return;
      }
    }
    timerAction();

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [appState, appStatus]);

  return (
    <TimerView
      status={appStatus}
      time={currentTime}
      restartTimer={restartTimer}
    />
  );
};
// @renderOff

// @helpersOn
function getTimeByStatus({
  appStatus,
  settings,
}: {
  appStatus: AppStatus;
  settings: {
    focusLength: number;
    shortBreakLength: number;
    longBreakLength: number;
  };
}) {
  let newTime;
  switch (appStatus) {
    case AppStatus.FOCUS:
      newTime = settings.focusLength;
      break;
    case AppStatus.SHORT_BREAK:
      newTime = settings.shortBreakLength;
      break;
    case AppStatus.LONG_BREAK:
      newTime = settings.longBreakLength;
      break;
  }
  return newTime;
}
// @helpersOff

export default Timer;
