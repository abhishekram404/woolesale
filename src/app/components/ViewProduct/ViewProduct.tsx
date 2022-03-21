import React from "react";
import styles from "./ViewProduct.module.scss";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
const ViewProduct = () => {
  return (
    <div className={styles.viewProduct}>
      <PageTitleRow>View Product</PageTitleRow>
    </div>
  );
};
export default ViewProduct;
