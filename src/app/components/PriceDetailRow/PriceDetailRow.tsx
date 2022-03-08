import { IPriceDetailRow } from "app/Interfaces/IPriceDetailRow";
import React from "react";
import styles from "./PriceDetailRow.module.scss";

const PriceDetailRow = React.memo(({ title, value }: IPriceDetailRow) => {
  return (
    <div className={styles.priceDetailRow}>
      <p className={styles.priceDetailRowContent}>{title}</p>
      <p className={styles.priceDetailRowContent}>{value}</p>
    </div>
  );
});

export default PriceDetailRow;
