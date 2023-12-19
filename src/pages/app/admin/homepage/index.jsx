import React, {useEffect} from "react";
import styles from "./homepage.module.css";
import Button from "../../../../components/common/button";
import PageContainer from "../../../../components/ui/pagecontainer";


const Homepage = () => {



  return (
    <PageContainer>
      <div className={styles.topContainer}>
        <div className={styles.left}>
          <label>Welcome Admin</label>
        </div>
        <div className={styles.right}>
          <img src="./images/home.png" alt="home background png"/>
        </div>
      </div>

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

    </PageContainer>

  );
};

export default Homepage;
