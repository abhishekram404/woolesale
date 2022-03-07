import React from "react";
import styles from "./PrimaryButton.module.scss";
import { IButton } from "app/Interfaces/IButton";
export default function PrimaryButton({ children }: IButton) {
  return <button className={styles.primaryButton}>{children}</button>;
}
