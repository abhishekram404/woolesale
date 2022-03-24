import React from "react";
import styles from "./Cart.module.scss";
import CartItem from "app/components/CartItem/CartItem";
import { Link } from "react-router-dom";
import CheckoutSection from "app/components/CheckoutSection/CheckoutSection";
import { motion, AnimatePresence } from "framer-motion";
import PageTitleRow from "app/components/PageTitleRow/PageTitleRow";
import { cart } from "app/cartData";

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
        transition={{ stiffness: 0 }}
      >
        <PageTitleRow>Cart</PageTitleRow>
        <main className={styles.bodyColumn}>
          <section className={styles.cartSection}>
            <div className={styles.summaryRow}>
              <p className={styles.cartSummary}>
                You have {cart.length} items in your cart.
              </p>
              <Link
                to="#checkoutSection"
                className={styles.scrollToCheckoutButton}
              >
                Checkout
              </Link>
            </div>
            {cart.map((item, index) => (
              <CartItem {...item} key={index} />
            ))}
          </section>
          <CheckoutSection />
        </main>
      </motion.div>
    </AnimatePresence>
  );
});

export default Cart;
