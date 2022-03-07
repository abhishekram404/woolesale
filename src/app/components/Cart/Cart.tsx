import React from "react";
import BackButton from "app/components/BackButton/BackButton";
import styles from "./Cart.module.scss";
import CartItem from "app/components/CartItem/CartItem";
import { Link } from "react-router-dom";
import CheckoutSection from "app/components/CheckoutSection/CheckoutSection";
import { motion, AnimatePresence } from "framer-motion";
const Cart = React.memo(() => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.cart}
        // style={{ originY: 0, originX: 0, zIndex: 1 }}
        // initial={{ rotate: -90 }}
        // animate={{ rotate: 0 }}
        initial={{ x: "1000px" }}
        animate={{ x: 0 }}
        exit={{ x: "1000px" }}
      >
        <div className={styles.pageTitleRow}>
          <BackButton />
          <h2 className={styles.pageTitle}>Cart</h2>
        </div>
        <main className={styles.bodyColumn}>
          <section className={styles.cartSection}>
            <div className={styles.summaryRow}>
              <p className={styles.cartSummary}>
                You have 6 items in your cart.
              </p>
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
      </motion.div>
    </AnimatePresence>
  );
});

export default Cart;
