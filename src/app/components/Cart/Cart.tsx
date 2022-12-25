import React from "react";
import styles from "./Cart.module.scss";
import CartItem from "app/components/CartItem/CartItem";
import { Link } from "react-router-dom";
import CheckoutSection from "app/components/CheckoutSection/CheckoutSection";
import { motion, AnimatePresence } from "framer-motion";
import PageTitleRow from "app/components/PageTitleRow/PageTitleRow";
import { cart } from "app/cartData";
import {useFetch} from 'app/hooks/useFetch'

const Cart = React.memo(() => {
  const query = `
  *[_type=="cart" && owner=="ramabishek40@gmail.com"][0]{
  owner,
  cartItems[]{
    quantity,
    "product" : {
      ...product-> {
        name,
        price,
        images[]{
          "url" : asset->url 
        } 
      }  
    }  
  }
}`
  
  let {response, isLoading} = useFetch(query)
  
  response = response?.cartItems.map((item:any) => ({
    ...item.product, quantity : item.quantity
  }))
  
  if(isLoading) return <h3>Loading...</h3>
  
  
  console.log(response)
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
                You have {response.length} items in your cart.
              </p>
              <Link
                to="#checkoutSection"
                className={styles.scrollToCheckoutButton}
              >
                Checkout
              </Link>
            </div>
            {response?.map((item:any, index: number) => (
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
