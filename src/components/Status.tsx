import { FunctionComponent } from "react";
import StatusBar from "../ui/StatusBar/StatusBar";
import { AppStatus } from "../types/types";

interface StatusProps {}

const Status: FunctionComponent<StatusProps> = () => {
  return (
    <div>
      <StatusBar status={AppStatus.FOCUS} />
      {/* <StatusBar status={AppStatus.SHORT_BREAK} /> */}
      {/* <StatusBar status={AppStatus.LONG_BREAK} /> */}
    </div>
  );
};

export default Status;
