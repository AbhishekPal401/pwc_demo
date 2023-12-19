import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({
  totalCount = 100,
  pageNumber = 1,
  countPerPage = 10,
}) => {
  const totalPages = Math.ceil(totalCount / countPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.previous}>Previous</div>
      <div className={styles.pages_status}>
        <input value={pageNumber} />
        <div>
          of <label>{totalPages}</label>
        </div>
      </div>
      <div className={styles.next}>Next </div>
    </div>
  );
};

export default Pagination;
