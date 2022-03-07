import React from "react";
import styles from "./HomepageGridItem.module.scss";
import productImage from "app/assets/mac2.jpg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "app/components/Buttons/SecondaryButton/SecondaryButton";
import { IHomepageGridItem } from "app/Interfaces/IHomepageGridItem";
export default function HomepageGridItem({
  name,
  price,
  productImages,
}: IHomepageGridItem) {
  return (
    <div className={styles.homepageGridItem}>
      <div className={styles.productImageContainer}>
        <img
          src={productImages[0]}
          className={styles.productImage}
          alt="product"
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.productName}>
          {name.slice(0, 25)}
          {name.length > 25 && "..."}
        </h2>
        <h3 className={styles.productPrice}>$ {price}</h3>
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
