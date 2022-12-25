import React, { useState, useEffect } from "react";
import HomepageGridItem from "app/components/HomepageGridItem/HomepageGridItem";
import styles from "./Homepage.module.scss";
// import { products } from "app/productsData";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IProduct } from "app/Interfaces/IProduct";
import sanityClient from 'app/utils/sanity'
import {useFetch}  from 'app/hooks/useFetch'

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  const query = `
     *[_type=="product"]{
       _id,
        _createdAt,
        name,
        price,
        stockQuantity,
        description,
      images[]{"url":asset->url}}
      `
  const  {response: products, isLoading}: {response : IProduct[], isLoading : boolean} = useFetch(query)
  
  
  

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    debounce(() => console.log("Helo"), 500);
  };

  const debounce = (fn: Function, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...params: any) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(params);
      }, delay);
    };
  };
  
  if(!products || isLoading) return <h4>Loading...</h4>

  return (
    <AnimatePresence>
      <motion.div
        className={styles.homepage}
        // initial={{ x: "1000px" }}
        // animate={{ x: 0 }}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0 }}
      >
        <div className={styles.pageTitleAndSearchRow}>
          <h2 className={styles.pageTitle}>Featured products</h2>
          <input
            type="search"
            className={styles.searchBox}
            placeholder="Find  product"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <main className={styles.productsGrid}>
          <AnimatePresence>
            {products.map((product, index) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <HomepageGridItem
                  name={product.name}
                  price={product.price}
                  productImageUrl={product.images[0].url}
                  // initial={{ scale: 1.1, opacity: 0 }}
                  // animate={{ scale: 1, opacity: 1 }}
                  // // viewport={{ once: true }}
                  // style={{ originX: 0.5, originY: 0.5 }}
                  // transition={{ delay: index * 0.3 }}
                />
              </Link>
            ))}
          </AnimatePresence>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
