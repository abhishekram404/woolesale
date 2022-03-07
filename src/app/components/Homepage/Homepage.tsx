import React from "react";
import HomepageGridItem from "app/components/HomepageGridItem/HomepageGridItem";
import styles from "./Homepage.module.scss";
import { products } from "app/productsData";
import { motion, AnimatePresence } from "framer-motion";

export default function Homepage() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.homepage}
        initial={{ x: "1000px" }}
        animate={{ x: 0 }}
        exit={{ opacity: 0 }}
      >
        <h2 className={styles.pageTitle}>Featured products</h2>
        <main className={styles.productsGrid}>
          <AnimatePresence>
            {products.map((product, index) => (
              <HomepageGridItem
                name={product.name}
                price={product.price}
                productImages={product.productImages}
                key={index}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ originX: 0.5, originY: 0.5 }}
                transition={{ delay: index * 0.3 }}
              />
            ))}
          </AnimatePresence>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
