import React from "react";
import styles from "./PrimaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";

const PrimaryButton = React.memo(({ children, ...props }: IButton) => {
  return (
    <button className={styles.primaryButton} {...props}>
      {children}
    </button>
  );
});
export default PrimaryButton;
