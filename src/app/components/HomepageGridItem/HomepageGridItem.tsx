import React from "react";
import styles from "./HomepageGridItem.module.scss";
import productImage from "app/assets/mac2.jpg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "app/components/Buttons/SecondaryButton/SecondaryButton";
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
          <SecondaryButton> Instant buy </SecondaryButton>
          <PrimaryButton>
            <MdOutlineAddShoppingCart />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
