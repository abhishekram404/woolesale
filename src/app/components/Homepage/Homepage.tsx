import React from "react";
import HomepageGridItem from "app/components/HomepageGridItem/HomepageGridItem";
import styles from "./Homepage.module.scss";
type Props = {};

export default function Homepage({}: Props) {
  return (
    <div className={styles.homepage}>
      <h2 className={styles.pageTitle}>Featured products</h2>
      <main className={styles.productsGrid}>
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
        <HomepageGridItem />
      </main>
    </div>
  );
}
