import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./BackButton.module.scss";
type Props = {};

const BackButton = (props: Props) => {
  return (
    <Link to="/" className={styles.backBtn}>
      <MdArrowBackIosNew /> Go back
    </Link>
  );
};

export default BackButton;
