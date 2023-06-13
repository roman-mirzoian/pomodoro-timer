import { FC, ReactNode } from "react";
import { Switch } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { timerSlice } from "../../../store/reducers/TimerSlice";

interface SettingsViewProps {
  onClose: () => void;
}

const SettingsView: FC<SettingsViewProps> = ({ onClose }) => {
  const { settings } = useAppSelector((state) => state.timerReducer);
  const {
    darkMode,
    focusLength,
    shortBreakLength,
    longBreakLength,
    notifications,
  } = settings;
  const dispatch = useAppDispatch();
  const {
    setDarkMode,
    setNotifications,
    setFocusLength,
    setShortBreakLength,
    setLongBreakLength,
  } = timerSlice.actions;

  function handleSetDarkMode() {
    dispatch(setDarkMode());
  }
  function handleSetNotifications() {
    dispatch(setNotifications());
  }
  function handleSetFocuslength(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setFocusLength(+event.target.value));
  }
  function handleSetShortBreaklength(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    dispatch(setShortBreakLength(+event.target.value));
  }
  function handleSetLongBreaklength(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    dispatch(setLongBreakLength(+event.target.value));
  }

  return (
    <ModalView onClose={onClose}>
      <ModalHeader onClose={onClose} />
      <div className="flex flex-col">
        <ModalItem name="Dark mode">
          <SwitchButton enabled={darkMode} setEnabled={handleSetDarkMode} />
        </ModalItem>
        <ModalItem name="Focus length">
          <NumberInput value={focusLength} onChange={handleSetFocuslength} />
        </ModalItem>
        <ModalItem name="Short break length">
          <NumberInput
            value={shortBreakLength}
            onChange={handleSetShortBreaklength}
          />
        </ModalItem>
        <ModalItem name="Long break length">
          <NumberInput
            value={longBreakLength}
            onChange={handleSetLongBreaklength}
          />
        </ModalItem>
        <ModalItem name="Notifications">
          <SwitchButton
            enabled={notifications}
            setEnabled={handleSetNotifications}
          />
        </ModalItem>
      </div>
    </ModalView>
  );
};

interface ModalViewProps {
  children: ReactNode;
  onClose: () => void;
}

function ModalView({ children, onClose }: ModalViewProps) {
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleOverlayClick}
          ></div>
        </div>
        <span
          className="inline-block align-middle bg-white rounded-lg p-8 text-center z-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {children}
        </span>
      </div>
    </div>
  );
}

function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex justify-between w-[448px]">
      <h2 id="modal-title" className="text-xl font-bold mb-4">
        Settings
      </h2>
      <XMarkIcon onClick={onClose} />
    </div>
  );
}

function ModalItem({ children, name }: { children: ReactNode; name: string }) {
  return (
    <div className="flex justify-between">
      <div>{name}</div>
      {children}
    </div>
  );
}

function XMarkIcon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

interface SwitchButtonProps {
  enabled: boolean;
  setEnabled: () => void;
}

function SwitchButton({ enabled, setEnabled }: SwitchButtonProps) {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

interface NumberInpurProps {
  value: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NumberInput({ value, onChange }: NumberInpurProps) {
  return (
    <input
      type="number"
      min={1}
      max={60}
      className="w-[96px] h-[40px] border-[1px] border-black/[.15] rounded-lg"
      value={value}
      onChange={onChange}
    />
  );
}

export default SettingsView;
