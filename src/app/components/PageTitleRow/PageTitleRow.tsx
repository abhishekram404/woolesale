import React from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./PageTitleRow.module.scss";
import { IPageTitleRow } from "app/Interfaces/IPageTitleRow";
const PageTitleRow = React.memo(({ children }: IPageTitleRow) => {
  return (
    <div className={styles.pageTitleRow}>
      <BackButton /> <h2 className={styles.pageTitle}>{children}</h2>
    </div>
  );
});
export default PageTitleRow;
