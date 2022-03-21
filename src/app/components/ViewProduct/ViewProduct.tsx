import React from "react";
import styles from "./ViewProduct.module.scss";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
import { products } from "app/productsData";
import { useParams } from "react-router-dom";
const ViewProduct = () => {
  const { id = "0" } = useParams<{ id: string }>();
  console.log(id);
  const product = products[+id];
  console.log(product);
  return (
    <div className={styles.viewProduct}>
      <PageTitleRow>View Product</PageTitleRow>
      <main className={styles.productArea}>
        <section className={styles.productImagesSection}>
          <img
            src={product.productImages[0]}
            alt="product"
            className={styles.productImageActive}
          />
          <div className={styles.productImagesOptions}>
            {product.productImages.map((image, index) => (
              <span key={index} className={styles.productImagesItem}>
                <img src={image} alt="product" />
              </span>
            ))}
          </div>
        </section>
        <section className={styles.productDetailsSection}>
          <h2 className={styles.productName}>{product.name}</h2>
          <h3 className={styles.productPrice}>Nrs. {product.price}</h3>
        </section>
      </main>
    </div>
  );
};
export default ViewProduct;
