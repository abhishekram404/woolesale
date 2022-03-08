import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import styles from "./CheckoutSection.module.scss";
import PriceDetailRow from "app/components/PriceDetailRow/PriceDetailRow";

const CheckoutSection = React.memo(() => {
  return (
    <section className={styles.checkoutSection} id="checkoutSection">
      <h2 className={styles.grandTotalTitle}>Grand Total</h2>
      <h1 className={styles.grandTotal}>$9600</h1>
      <div className={styles.priceDetailsSection}>
        <PriceDetailRow title="Price details" />
        <PriceDetailRow title="Total price" value="$9600" />
        <PriceDetailRow title="Delivery charge" value="Free" />
        <PriceDetailRow title="Estimated delivery time" value="~18h" />
      </div>
      <Link to="/checkout" className={styles.proceedToCheckoutBtn}>
        <PrimaryButton>Proceed to Checkout</PrimaryButton>
      </Link>
    </section>
  );
});

export default CheckoutSection;
