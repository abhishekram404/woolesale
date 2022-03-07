import React from "react";
import styles from "./CheckoutSection.module.scss";

const CheckoutSection = () => {
  return (
    <section className={styles.checkoutSection} id="checkoutSection">
      <h2 className={styles.grandTotalTitle}>Grand Total</h2>
      <h1 className={styles.grandTotal}>$9600</h1>
    </section>
  );
};

export default CheckoutSection;
