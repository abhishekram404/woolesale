import React from "react";
import CartItem from "../CartItem/CartItem";
import OrdersListItem from "../OrdersListItem/OrdersListItem";
import styles from "./OrdersSection.module.scss";
const OrdersSection = () => {
  return (
    <section className={styles.ordersSection}>
      <h1 className={styles.sectionTitle}>Your orders</h1>
      <p className={styles.sectionDescription}>
        All your orders are shown here
      </p>
      <div className={styles.ordersListSection}>
        {/* <p className={styles.noOrder}>
          Uh oh! <br />
          <strong>Looks like you haven't ordered anything yet.</strong>
        </p> */}

        <ul className={styles.ordersList}>
          <OrdersListItem />
          <OrdersListItem />
          <OrdersListItem />
          <OrdersListItem />
          <OrdersListItem />
        </ul>
      </div>
    </section>
  );
};
export default OrdersSection;
