import { FunctionComponent } from "react";
import { ButtonName, StatusState } from "../types/types";
import CommonButton from "../ui/Buttons/CommonButton";

interface ControlButtonsProps {}

const ControlButtons: FunctionComponent<ControlButtonsProps> = () => {
  return (
    <div className="flex items-center gap-x-4">
      <CommonButton
        state={StatusState.FOCUS}
        buttonName={ButtonName.SETTINGS}
      />
      <CommonButton state={StatusState.FOCUS} buttonName={ButtonName.PLAY} />
      <CommonButton state={StatusState.FOCUS} buttonName={ButtonName.NEXT} />
    </div>
  );
};

export default ControlButtons;
