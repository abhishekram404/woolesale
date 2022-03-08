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
        <img src={mac} alt="" />
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
