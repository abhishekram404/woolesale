import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import styles from "./BackButton.module.scss";
import { useNavigate } from "react-router-dom";

const BackButton = React.memo(() => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div role="button" onClick={goBack} className={styles.backBtn}>
      <MdArrowBackIosNew /> Go back
    </div>
  );
});

export default BackButton;
