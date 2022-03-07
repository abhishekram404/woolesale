import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  console.log(styles);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarBrand}>
        woolesale
      </a>
    </nav>
  );
}
