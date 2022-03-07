import React from "react";
import styles from "./PageNotFound.module.scss";
import notFoundSvg from "app/assets/404.svg";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.left}>
        <h1>Sorry!</h1>
        <h2>The page you requested was not found.</h2>
        <Link to="/">
          <PrimaryButton>Go back to homepage</PrimaryButton>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={notFoundSvg} alt="404 svg" />
      </div>
    </div>
  );
};

export default PageNotFound;
