import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = React.memo(() => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        <span className={styles.mainLogo}>woolesale</span>
        <span className={styles.secLogo}>w</span>
      </Link>
      <div className={styles.navbarNav}>
        <Link to="/login" className={styles.navItem} title="Login">
          Login
        </Link>
        <Link to="/register" className={styles.navItem} title="Register">
          Register
        </Link>
        <Link to="/cart" className={styles.cartButton} title="View cart">
          <MdOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
});

export default Navbar;
