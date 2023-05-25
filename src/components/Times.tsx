import { FunctionComponent, useEffect, useState } from "react";
import TimerView from "../ui/TimerView/TimerView";
import { StatusState } from "../types/types";

interface TimerProps {}

const Timer: FunctionComponent<TimerProps> = () => {
  const startingMinutes = 25;
  const [currentTime, setCurrentTime] = useState({
    minutes: startingMinutes,
    seconds: 0,
  });
  const [timeInSeconds, setTimeInSeconds] = useState(startingMinutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        const updatedTime = prevTime - 1;
        const minutes = Math.floor(updatedTime / 60);
        const seconds = updatedTime % 60;
        setCurrentTime({ minutes, seconds });
        return updatedTime;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <TimerView state={StatusState.FOCUS} time={currentTime} />;
};

export default Timer;
