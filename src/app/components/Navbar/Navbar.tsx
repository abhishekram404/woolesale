import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = React.memo(() => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarBrand}>
        woolesale
      </a>
    </nav>
  );
});

export default Navbar;
