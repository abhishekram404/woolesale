import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./Navbar.module.scss";

const Navbar = React.memo(() => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarBrand}>
        woolesale
      </a>
      <div className={styles.navbarNav}>
        <a href="/cart" className={styles.cartButton} title="View cart">
          <MdOutlineShoppingCart />
        </a>
      </div>
    </nav>
  );
});

export default Navbar;
