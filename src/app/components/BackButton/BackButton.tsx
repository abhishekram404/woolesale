import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./BackButton.module.scss";

const BackButton = React.memo(() => {
  return (
    <Link to="/" className={styles.backBtn}>
      <MdArrowBackIosNew /> Go back
    </Link>
  );
});

export default BackButton;
