import React from "react";
import styles from "./TopNavbar.module.scss";
import { MdEmail, MdPhone } from "react-icons/md";
type Props = {};

export default function TopNavbar({}: Props) {
  return (
    <div className={styles.topNavbar}>
      <div className={styles.left}>
        <MdEmail /> contact@woolesale.com.np
      </div>
      <div className={styles.right}>
        <MdPhone />
        +977 9801234560
      </div>
    </div>
  );
}
