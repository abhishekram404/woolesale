import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = React.memo(() => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        woolesale
      </Link>
      <div className={styles.navbarNav}>
        <Link to="/cart" className={styles.cartButton} title="View cart">
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
});

export default Navbar;
