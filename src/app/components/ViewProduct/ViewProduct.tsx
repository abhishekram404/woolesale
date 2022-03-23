import React from "react";
import styles from "./ViewProduct.module.scss";
import PageTitleRow from "../PageTitleRow/PageTitleRow";
import { products } from "app/productsData";
import { useParams } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
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
          <p className={styles.stock}>Currently in stock</p>
          <h3 className={styles.productPrice}>Nrs. {product.price}</h3>
          <div className={styles.actionButtons}>
            <PrimaryButton>Add to Cart</PrimaryButton>
            <SecondaryButton>Buy Now</SecondaryButton>
          </div>
          <hr className={styles.hr} />
          <div className={styles.aboutSection}>
            <h4>About this product</h4>
            <p>
              Compatible with iPad mini (6th generation), iPad Air (5th and 4th
              generation), iPad Pro 12.9-inch (3rd, 4th, and 5th generations),
              iPad Pro 11-inch (3rd, 2nd, and 1st generations) Apple Pencil (2nd
              generation) brings your work to life. With imperceptible lag,
              pixel-perfect precision, and tilt and pressure sensitivity, it
              transforms into your favorite creative instrument, your paint
              brush, your charcoal, or your pencil. It makes painting,
              sketching, doodling, and even note-taking better than ever. It
              magnetically attaches to iPad mini (6th generation), iPad Pro and
              iPad Air, charges wirelessly, and lets you change tools with a
              simple double tap.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ViewProduct;
