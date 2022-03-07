import React from "react";
import styles from "./Homepage.module.scss";
type Props = {};

export default function Homepage({}: Props) {
  return (
    <div className={styles.homepage}>
      <h2 className={styles.pageTitle}>Featured products</h2>
      <main className={styles.productsGrid}>
        <h3>Product</h3>
        <h3>Product</h3>
        <h3>Product</h3>
        <h3>Product</h3>
        <h3>Product</h3>
        <h3>Product</h3>
        <h3>Product</h3>
      </main>
    </div>
  );
}
