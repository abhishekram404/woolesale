import React, { useState } from "react";
import styles from "./CartItem.module.scss";
import mac from "app/assets/mac.jpg";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { FiPlus } from "react-icons/fi";
import { HiMinus } from "react-icons/hi";

const CartItem = React.memo(() => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((quantity) => quantity + 1);

  const decrement = () => {
    if (quantity <= 0) {
      return;
    }
    setQuantity((quantity) => quantity - 1);
  };
  return (
    <div className={styles.cartItem}>
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
        <h3 className={styles.productPrice}>$ 1499 per item</h3>
      </div>
      <div className={styles.quantityColumn}>
        <h4 className={styles.title}>Quantity</h4>
        <div className={styles.quantitySetter}>
          <SecondaryButton onClick={decrement}>
            <HiMinus />
          </SecondaryButton>
          {quantity}
          <PrimaryButton onClick={increment}>
            <FiPlus />
          </PrimaryButton>
        </div>
      </div>
      <div className={styles.totalColumn}>
        <h4 className={styles.title}>Total</h4>
        <h3 className={styles.total}>$3600</h3>
      </div>
    </div>
  );
});

export default CartItem;
