import React from "react";
import BackButton from "app/components/BackButton/BackButton";
import styles from "./Cart.module.scss";
import CartItem from "app/components/CartItem/CartItem";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.pageTitleRow}>
        <BackButton />
        <h2 className={styles.pageTitle}>Cart</h2>
      </div>
      <main className={styles.bodyColumn}>
        <section className={styles.cartSection}>
          <p className={styles.cartSummary}>You have 6 items in your cart.</p>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <section className={styles.checkoutSection}>Checkout Section</section>
      </main>
    </div>
  );
};

export default Cart;
