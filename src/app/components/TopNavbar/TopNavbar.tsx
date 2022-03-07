import React from "react";
import styles from "./TopNavbar.module.scss";
import { MdEmail, MdPhone } from "react-icons/md";

const TopNavbar = React.memo(() => {
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
});

export default TopNavbar;
