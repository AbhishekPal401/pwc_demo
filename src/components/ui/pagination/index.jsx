import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  totalCount = 100,
  pageNumber = 1,
  countPerPage = 10,
}) => {
  return (
    <div className={styles.container}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Pagination;
