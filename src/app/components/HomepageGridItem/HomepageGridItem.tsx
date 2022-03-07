import React from "react";
import styles from "./HomepageGridItem.module.scss";
import productImage from "app/assets/mac2.jpg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function HomepageGridItem() {
  return (
    <div className={styles.homepageGridItem}>
      <div className={styles.productImageContainer}>
        <img src={productImage} className={styles.productImage} alt="product" />
      </div>
      <div className={styles.details}>
        <h2 className={styles.productName}>Macbook pro </h2>
        <h3 className={styles.productPrice}>$1499</h3>

        <div className={styles.actionButtonsGroup}>
          <button>Instant buy</button>
          <button>
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
