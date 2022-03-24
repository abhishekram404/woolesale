import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
const Footer = React.memo(() => {
  return (
    <div className={styles.footer}>
      <section>
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.woolesaleLogo}
        >
          <rect width="512" height="512" rx="18" fill="white" />
          <path
            d="M386.825 206.576L334.329 354H284.281L256.537 273.76L227.705 354H177.657L125.161 206.576H174.121L204.313 295.792L235.593 206.576H279.657L310.121 296.608L341.401 206.576H386.825Z"
            fill="black"
          />
        </svg>
        <span className={styles.woolesaleBrandName}>woolesale</span>
      </section>
      <section>
        <Link to="/sell" className={styles.sellLink}>
          List your product
        </Link>
      </section>
    </div>
  );
});
export default Footer;
