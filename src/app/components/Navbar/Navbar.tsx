import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "app/context/AuthContext";
import useSignOut from "app/hooks/useSignOut";
const Navbar = React.memo(() => {
  const { user } = useContext(AuthContext);
  const { signOutUser } = useSignOut();

  const logoutHandler = () => {
    signOutUser();
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        <span className={styles.mainLogo}>woolesale</span>
        <span className={styles.secLogo}>w</span>
      </Link>
      <div className={styles.navbarNav}>
        {user ? (
          <>
            <button
              className={styles.navItem}
              title="Logout"
              onClick={logoutHandler}
            >
              Logout
            </button>
            <Link to="/cart" className={styles.cartButton} title="View cart">
              <MdOutlineShoppingCart />
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.navItem} title="Login">
              Login
            </Link>
            <Link to="/register" className={styles.navItem} title="Register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
});

export default Navbar;
