import React from "react";
import styles from "./SecondaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";
const SecondaryButton = React.memo(({ children }: IButton) => {
  return <button className={styles.secondaryButton}>{children}</button>;
});

export default SecondaryButton;
