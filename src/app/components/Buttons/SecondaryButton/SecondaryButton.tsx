import React from "react";
import styles from "./SecondaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";
export default function SecondaryButton({ children }: IButton) {
  return <button className={styles.secondaryButton}>{children}</button>;
}
