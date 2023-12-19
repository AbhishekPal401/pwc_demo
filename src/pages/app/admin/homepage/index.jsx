import React, { useEffect } from "react";
import styles from "./homepage.module.css";
import Button from "../../../../components/common/button";
import PageContainer from "../../../../components/ui/pagecontainer";
import Pagination from "../../../../components/ui/pagination";


const Homepage = () => {



  return (
    <PageContainer>
      <div className={styles.topContainer}>
        <div className={styles.left}>
          <label>Welcome Admin</label>
        </div>
        <div className={styles.right}>
          <img src="./images/home.png" alt="home background png" />
        </div>
      </div>
      <div className={styles.mainContainer}>
        {/* Session History:: start */}
        <div className={styles.sessionHistoryContainer}>
          <h3>Session History</h3>
          <div className={styles.sessionHistoryCardContainer}>
            <div className={styles.sessionHistoryCard}>
              <h4>Pwc Risk Session</h4>
              <p>Scenario:</p>
              <p>Status:</p>
              <div className={styles.butonFlexContainer}>
                <div className={styles.updatedDate}>
                  <p>Updated: </p>
                </div>
                <div>
                  <Button customClassName={styles.button}>
                    Start
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Session History:: end */}

        {/* Scenario Table:: start */}
        <div>
          <div className={styles.scenarioTopContainer}>
            <div className={styles.scenarioTopContainerRight}>
              <div><h3>Scenarios</h3></div>
              <div><a href="#">See All</a></div>
            </div>
            <div className={styles.scenarioTopContainerLeft}>
              <Button>Create New</Button>
            </div>
          </div>
          <div className={styles.mainTableContainer}>
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
        </div>

        {/* Scenario Table:: end */}
      </div>

    </PageContainer>

  );
};

export default Homepage;
