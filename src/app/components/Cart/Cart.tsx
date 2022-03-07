import React from "react";
import BackButton from "app/components/BackButton/BackButton";
import styles from "./Cart.module.scss";
import CartItem from "app/components/CartItem/CartItem";
import { Link } from "react-router-dom";
import CheckoutSection from "app/components/CheckoutSection/CheckoutSection";
const Cart = React.memo(() => {
  return (
    <div className={styles.cart}>
      <div className={styles.pageTitleRow}>
        <BackButton />
        <h2 className={styles.pageTitle}>Cart</h2>
      </div>
      <main className={styles.bodyColumn}>
        <section className={styles.cartSection}>
          <div className={styles.summaryRow}>
            <p className={styles.cartSummary}>You have 6 items in your cart.</p>
            <Link
              to="#checkoutSection"
              className={styles.scrollToCheckoutButton}
            >
              Checkout
            </Link>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </section>
        <CheckoutSection />
      </main>
    </div>
  );
});

export default Cart;
