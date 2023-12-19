import React from "react";
import PageContainer from "../../../../components/ui/pagecontainer";
import styles from "./users.module.css";
import Button from "../../../../components/common/button";
import Pagination from "../../../../components/ui/pagination";

const Users = () => {
  return (
    <PageContainer>
      <div className={styles.topContainer}>
        <div className={styles.left}>
          <label>Users</label>
        </div>
        <div className={styles.right}>
          <img src="./images/scenario.png" />
          <div className={styles.buttonContainer}>
            <Button>Create New</Button>
          </div>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <table className={styles.table_content}>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>EmailId</th>
              <th>Designation</th>
              <th>Organistion</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>

            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
            <tr>
              <td>1</td>
              <td>User</td>
              <td>Email@gmail.com</td>
              <td>CFO</td>
              <td>PWC</td>
              <td>button</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.paginationContainer}>
          <Pagination totalCount={100} pageNumber={10} countPerPage={10} />
        </div>
      </div>
    </PageContainer>
  );
};

export default Users;
