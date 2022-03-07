import React from "react";
import HomepageGridItem from "app/components/HomepageGridItem/HomepageGridItem";
import styles from "./Homepage.module.scss";
import { products } from "app/productsData";
type Props = {};

export default function Homepage({}: Props) {
  return (
    <div className={styles.homepage}>
      <h2 className={styles.pageTitle}>Featured products</h2>
      <main className={styles.productsGrid}>
        {products.map((product, index) => (
          <HomepageGridItem
            name={product.name}
            price={product.price}
            productImages={product.productImages}
            key={index}
          />
        ))}
        {products.map((product, index) => (
          <HomepageGridItem
            name={product.name}
            price={product.price}
            productImages={product.productImages}
            key={index}
          />
        ))}
      </main>
    </div>
  );
}
