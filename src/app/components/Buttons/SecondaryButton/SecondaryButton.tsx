import React from "react";
import styles from "./SecondaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";

const SecondaryButton = React.memo(({ children, ...props }: IButton) => {
  return (
    <button className={styles.secondaryButton} {...props}>
      {children}
    </button>
  );
});

export default SecondaryButton;
