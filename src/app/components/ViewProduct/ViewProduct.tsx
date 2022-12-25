import React from "react";
import styles from "./ViewProduct.module.scss";
import PageTitleRow from "../PageTitleRow/PageTitleRow";

import { useParams } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import ImagePreview from "app/components/ImagePreview/ImagePreview";
import {useFetch} from 'app/hooks/useFetch'

 

const ViewProduct = React.memo(() => {
  const { id = "" } = useParams<{ id: string }>(); 
  const query = `*[_id=="${id}"]{
       _id,
       _createdAt,
        name,
        price,
        stockQuantity,
        description,
        images[]{"url":asset->url}
  }` 
  const  {response, isLoading} = useFetch(query)
  const product = response?.[0]

    if(!product || isLoading) return <h4>Loading...</h4>


  return (
    <div className={styles.viewProduct}>
      <PageTitleRow>View Product</PageTitleRow>
      <main className={styles.productArea}>
        <ImagePreview productImages={product.images.map((i: {url : string}) => i.url)} />
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
            {product.description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
});
export default ViewProduct;
