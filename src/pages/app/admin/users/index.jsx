import React from "react";
import PageContainer from "../../../../components/ui/pagecontainer";
import styles from "./users.module.css";
import Button from "../../../../components/common/button";

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
    </PageContainer>
  );
};

export default Users;
