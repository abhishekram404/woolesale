import React from "react";
import styles from "./HomepageGridItem.module.scss";
import PrimaryButton from "app/components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "app/components/Buttons/SecondaryButton/SecondaryButton";
import { IHomepageGridItem } from "app/Interfaces/IHomepageGridItem";
import { motion } from "framer-motion";
const HomepageGridItem = React.memo(
  ({ name, price, productImages, ...props }: IHomepageGridItem) => {
    return (
      <motion.div className={styles.homepageGridItem} {...props}>
        <div className={styles.productImageContainer}>
          {productImages[0] ? (
            <img
              src={productImages[0]}
              className={styles.productImage}
              alt="product"
            />
          ) : (
            <svg
              width="512"
              height="512"
              viewBox="0 0 512 512"
              className={styles.productImage}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="512" height="512" rx="18" fill="white" />
              <path
                d="M386.825 206.576L334.329 354H284.281L256.537 273.76L227.705 354H177.657L125.161 206.576H174.121L204.313 295.792L235.593 206.576H279.657L310.121 296.608L341.401 206.576H386.825Z"
                fill="black"
              />
            </svg>
          )}
        </div>
        <div className={styles.details}>
          <h2 className={styles.productName}>
            {name.slice(0, 25)}
            {name.length > 25 && "..."}
          </h2>
          <h3 className={styles.productPrice}>$ {price}</h3>
          <div className={styles.actionButtonsGroup}>
            <SecondaryButton> Instant buy </SecondaryButton>
            <PrimaryButton>Add to cart</PrimaryButton>
          </div>
        </div>
      </motion.div>
    );
  }
);
export default HomepageGridItem;
