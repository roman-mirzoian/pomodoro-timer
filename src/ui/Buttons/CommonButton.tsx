import { FunctionComponent } from "react";
import { AppState, ButtonName, AppStatus } from "../../types/types";
import styles from "./CommonButton.module.css";
import { ITEM_COLORS } from "../../constants";

// @cssOn
const playBtnStyle = "w-[128px] h-[96px] flex justify-center items-center";
const mainBtnStyle = "w-[80px] h-[80px] flex justify-center items-center";
// @cssOff

// @typesOn
interface CommonButtonProps {
  appState?: AppState;
  state: AppStatus.FOCUS;
  buttonName: ButtonName;
  onClick?: () => void;
}
// @typesOff

// @renderOn
const CommonButton: FunctionComponent<CommonButtonProps> = ({
  appState,
  state,
  buttonName,
  onClick,
}) => {
  let buttonColor, btnStyle, buttonComponent;
  console.log(appState);

  switch (state) {
    case AppStatus.FOCUS:
      buttonColor = ITEM_COLORS.focus;
      btnStyle = styles.focusBackground;
      break;
  }
  switch (buttonName) {
    case ButtonName.PLAY:
      buttonComponent =
        appState === AppState.PLAY ? (
          <PauseButtonView color={buttonColor} />
        ) : (
          <PlayButtonView color={buttonColor} />
        );
      btnStyle = `${styles.focusPlayBackground} ${playBtnStyle}`;
      break;
    case ButtonName.NEXT:
      buttonComponent = <NextButtonView color={buttonColor} />;
      btnStyle = `${styles.focusMainBackground} ${mainBtnStyle}`;
      break;
    case ButtonName.SETTINGS:
      buttonComponent = <SettingsButtonView color={buttonColor} />;
      btnStyle = `${styles.focusMainBackground} ${mainBtnStyle}`;
      break;
  }

  return (
    <button className={btnStyle} onClick={onClick}>
      {buttonComponent}
    </button>
  );
};
// renderOff

function PlayButtonView({ color }: { color: string }) {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 13C21.9992 13.3439 21.9104 13.6818 21.7419 13.9816C21.5734 14.2814 21.3309 14.533 21.0375 14.7125L3.03749 25.7C2.73766 25.89 2.3914 25.9939 2.0365 26.0006C1.68159 26.0072 1.33169 25.9162 1.02499 25.7375C0.713758 25.5667 0.454302 25.3152 0.273924 25.0095C0.093547 24.7037 -0.00108208 24.355 -6.18584e-06 24V1.99996C-0.00108208 1.64496 0.093547 1.29623 0.273924 0.990471C0.454302 0.684709 0.713758 0.433218 1.02499 0.26246C1.33169 0.0837584 1.68159 -0.00725329 2.0365 -0.000640198C2.3914 0.00597289 2.73766 0.109956 3.03749 0.29996L21.0375 11.2875C21.3309 11.4669 21.5734 11.7185 21.7419 12.0183C21.9104 12.3181 21.9992 12.6561 22 13Z"
        fill={color}
      />
    </svg>
  );
}

function PauseButtonView({ color }: { color: string }) {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 2V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H15.5C14.9696 24 14.4609 23.7893 14.0858 23.4142C13.7107 23.0391 13.5 22.5304 13.5 22V2C13.5 1.46957 13.7107 0.960859 14.0858 0.585786C14.4609 0.210714 14.9696 0 15.5 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2ZM6.5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H6.5C7.03043 24 7.53914 23.7893 7.91421 23.4142C8.28929 23.0391 8.5 22.5304 8.5 22V2C8.5 1.46957 8.28929 0.960859 7.91421 0.585786C7.53914 0.210714 7.03043 0 6.5 0Z"
        fill={color}
      />
    </svg>
  );
}

function NextButtonView({ color }: { color: string }) {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.65 10.0001C29.6515 10.3353 29.5687 10.6656 29.4093 10.9604C29.2498 11.2553 29.0188 11.5054 28.7375 11.6876L17.5875 18.8501C17.2849 19.0462 16.935 19.1568 16.5747 19.1703C16.2144 19.1837 15.8571 19.0995 15.5408 18.9266C15.2244 18.7537 14.9607 18.4985 14.7774 18.188C14.5942 17.8774 14.4984 17.5232 14.5 17.1626V11.8376L3.58749 18.8501C3.28491 19.0462 2.93496 19.1568 2.57467 19.1703C2.21438 19.1837 1.85714 19.0995 1.54077 18.9266C1.2244 18.7537 0.960655 18.4985 0.777442 18.188C0.594229 17.8774 0.498364 17.5232 0.49999 17.1626V2.83763C0.498364 2.47709 0.594229 2.12282 0.777442 1.8123C0.960655 1.50177 1.2244 1.24655 1.54077 1.07364C1.85714 0.900722 2.21438 0.816543 2.57467 0.830009C2.93496 0.843475 3.28491 0.954083 3.58749 1.15013L14.5 8.16263V2.83763C14.4984 2.47709 14.5942 2.12282 14.7774 1.8123C14.9607 1.50177 15.2244 1.24655 15.5408 1.07364C15.8571 0.900722 16.2144 0.816543 16.5747 0.830009C16.935 0.843475 17.2849 0.954083 17.5875 1.15013L28.7375 8.31263C29.0188 8.4949 29.2498 8.74496 29.4093 9.03983C29.5687 9.3347 29.6515 9.66492 29.65 10.0001Z"
        fill={color}
      />
    </svg>
  );
}

function SettingsButtonView({ color }: { color: string }) {
  return (
    <svg
      width="28"
      height="8"
      viewBox="0 0 28 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 4C17.5 4.69223 17.2947 5.36892 16.9101 5.94449C16.5256 6.52007 15.9789 6.96867 15.3394 7.23357C14.6999 7.49848 13.9961 7.56779 13.3172 7.43275C12.6383 7.2977 12.0146 6.96435 11.5251 6.47487C11.0356 5.98539 10.7023 5.36175 10.5673 4.68281C10.4322 4.00388 10.5015 3.30015 10.7664 2.66061C11.0313 2.02107 11.4799 1.47444 12.0555 1.08986C12.6311 0.705271 13.3078 0.5 14 0.5C14.9272 0.503294 15.8156 0.873101 16.4712 1.52877C17.1269 2.18443 17.4967 3.07275 17.5 4ZM4 0.5C3.30777 0.5 2.63108 0.705271 2.0555 1.08986C1.47993 1.47444 1.03133 2.02107 0.766421 2.66061C0.501515 3.30015 0.432203 4.00388 0.567251 4.68281C0.702299 5.36175 1.03564 5.98539 1.52513 6.47487C2.01461 6.96435 2.63825 7.2977 3.31718 7.43275C3.99612 7.56779 4.69985 7.49848 5.33939 7.23357C5.97893 6.96867 6.52556 6.52007 6.91014 5.94449C7.29473 5.36892 7.5 4.69223 7.5 4C7.49671 3.07275 7.1269 2.18443 6.47123 1.52877C5.81557 0.873101 4.92724 0.503294 4 0.5ZM24 0.5C23.3078 0.5 22.6311 0.705271 22.0555 1.08986C21.4799 1.47444 21.0313 2.02107 20.7664 2.66061C20.5015 3.30015 20.4322 4.00388 20.5673 4.68281C20.7023 5.36175 21.0356 5.98539 21.5251 6.47487C22.0146 6.96435 22.6383 7.2977 23.3172 7.43275C23.9961 7.56779 24.6999 7.49848 25.3394 7.23357C25.9789 6.96867 26.5256 6.52007 26.9101 5.94449C27.2947 5.36892 27.5 4.69223 27.5 4C27.4967 3.07275 27.1269 2.18443 26.4712 1.52877C25.8156 0.873101 24.9272 0.503294 24 0.5Z"
        fill={color}
      />
    </svg>
  );
}

export default CommonButton;
