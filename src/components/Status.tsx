import { FunctionComponent } from "react";
import StatusBar, { StatusState } from "../ui/StatusBar/StatusBar";

interface StatusProps {}

const Status: FunctionComponent<StatusProps> = () => {
  return (
    <div>
      <StatusBar status={StatusState.FOCUS} />
      <StatusBar status={StatusState.SHORT_BREAK} />
      <StatusBar status={StatusState.LONG_BREAK} />
    </div>
  );
};

export default Status;
