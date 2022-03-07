import React from "react";
import BackButton from "app/components/BackButton/BackButton";
import styles from "./Cart.module.scss";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.pageTitleRow}>
        <BackButton />
        <h2 className={styles.pageTitle}>Cart</h2>
      </div>
      <main className={styles.bodyColumn}>
        <section className={styles.cartSection}>Cart Section</section>
        <section className={styles.checkoutSection}>Checkout Section</section>
      </main>
    </div>
  );
};

export default Cart;
