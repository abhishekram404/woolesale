import React from "react";
import styles from "./PrimaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";
import clsx from "clsx";
const PrimaryButton = React.memo(({ children, ...props }: IButton) => {
  return (
    <button
      className={clsx(styles.primaryButton, props.disabled && "disabled")}
      {...props}
    >
      {children}
    </button>
  );
});
export default PrimaryButton;
