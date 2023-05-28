import { FunctionComponent, useEffect, useState } from "react";
import TimerView from "../ui/TimerView/TimerView";
import { AppState, AppStatus } from "../types/types";
import { useAppSelector } from "../hooks/redux";

interface TimerProps {}

// @renderOn
const Timer: FunctionComponent<TimerProps> = () => {
  const { appState, settings } = useAppSelector((state) => state.timerReducer);

  const startingMinutes = 25;
  const [currentTime, setCurrentTime] = useState({
    minutes: startingMinutes,
    seconds: 0,
  });
  const [timeInSeconds, setTimeInSeconds] = useState(startingMinutes * 60);
  const [timerId, setTimerId] = useState<NodeJS.Timer>();

  function timerAction(action: AppState) {
    if (action === AppState.PLAY) {
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
    if (timerId) {
      clearInterval(timerId);
    }
  }

  useEffect(() => {
    timerAction(appState);
    return () => {
      clearInterval(timerId);
    };
  }, [appState]);

  return <TimerView state={AppStatus.FOCUS} time={currentTime} />;
};
// @renderOff

export default Timer;
