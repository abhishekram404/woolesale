import React from "react";
import styles from "./OrdersListItem.module.scss";
const OrdersListItem = () => {
  return (
    <div className={styles.ordersListItem}>
      <div className={styles.imgCont}>
        {/* <img src={mac} alt="" /> */}
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="512" height="512" rx="18" fill="white" />
          <path
            d="M386.825 206.576L334.329 354H284.281L256.537 273.76L227.705 354H177.657L125.161 206.576H174.121L204.313 295.792L235.593 206.576H279.657L310.121 296.608L341.401 206.576H386.825Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={styles.detailsColumn}>
        <h4 className={styles.productName}>Macbook Pro 2021</h4>
      </div>
      <div className={styles.quantityColumn}>
        <h4 className={styles.title}>Total Quantity</h4>1
      </div>
      <div className={styles.totalColumn}>
        <h4 className={styles.title}>Worth of</h4>
        <h3 className={styles.total}>$3600</h3>
      </div>
    </div>
  );
};
export default OrdersListItem;
