import React from "react";
import styles from "./ImagePreview.module.scss";
const ImagePreview = ({ productImages }: { productImages: string[] }) => {
  return (
    <section className={styles.productImagesSection}>
      {productImages[0] ? (
        <img
          src={productImages[0]}
          alt="product"
          className={styles.productImageActive}
        />
      ) : (
        <svg
          width="512"
          height="512"
          className={styles.productImageActive}
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
      )}

      <div className={styles.productImagesOptions}>
        {productImages.map((image, index) => (
          <span key={index} className={styles.productImagesItem}>
            <img src={image} alt="product" />
          </span>
        ))}
      </div>
    </section>
  );
};
export default ImagePreview;
