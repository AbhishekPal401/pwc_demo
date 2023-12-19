import React from "react";
import styles from "./homepage.module.css";
import Button from "../../../../components/common/button";
import PageContainer from "../../../../components/ui/pagecontainer";

const Homepage = () => {
  return (
    <PageContainer>
      <div>
        <h2>
          Welcome Admin
        </h2>

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
        <div>
          Scenarios
        </div>
      </div>
    </PageContainer>

  );
};

export default Homepage;
