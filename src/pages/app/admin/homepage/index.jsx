import React, { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Button from "../../../../components/common/button";
import PageContainer from "../../../../components/ui/pagecontainer";
import Pagination from "../../../../components/ui/pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersbyPage,
  resetUserState,
} from "../../../../store/app/admin/users/users";
import { getSessionHistoryByType } from "../../../../store/app/admin/session/session.js";
import { generateGUID } from "../../../../utils/common.js";

const Homepage = () => {

  const [pageCount, setPageCount] = useState(10);
  const [pageNumber, setageNumber] = useState(1);

  const dispatch = useDispatch();

  const { usersByPage, loading } = useSelector((state) => state.users);
  const { credentials } = useSelector((state) => state.login);

  const sessionHistory = useSelector((state) => state.sessionHistory);


  // console.log("usersByPage", usersByPage);
  console.log("session history :", sessionHistory.sessionshistoryByType?.data);

  useEffect(() => {
    if (credentials) {
      const data = {
        pageNumber: 1,
        pageCount: pageCount,
        type: "recent",
        requester: {
          requestID: generateGUID(),
          requesterID: credentials.data.userID,
          requesterName: credentials.data.userName,
          requesterType: credentials.data.role,
        },
      };

      dispatch(getSessionHistoryByType(data));
    }
  }, [dispatch]);

  useEffect(() => {
    if (credentials) {
      const data = {
        pageNumber: 1,
        pageCount: pageCount,
        type: "",
        requester: {
          requestID: generateGUID(),
          requesterID: credentials.data.userID,
          requesterName: credentials.data.userName,
          requesterType: credentials.data.role,
        },
      };

      dispatch(getSessionHistoryByType(data));
    }
  }, [dispatch]);



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
            {sessionHistory.sessionshistoryByType &&
              sessionHistory.sessionshistoryByType.success &&
              sessionHistory.sessionshistoryByType.data &&
              JSON.parse(sessionHistory.sessionshistoryByType.data)?.ScenarioDetails.map((scenario, index) => {
                return (
                  <div key={index} className={styles.sessionHistoryCard}>
                    <h4>Pwc Risk Session</h4>
                    <p>Scenario:{scenario.ScenarioName}</p>
                    <p>Status: {scenario.Status}</p>
                    <div className={styles.butonFlexContainer}>
                      <div className={styles.updatedDate}>
                        <p>Updated: </p>
                      </div>
                      <div>
                        <Button>
                          Start
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}

          </div>

        </div>
        {/* Session History:: end */}

        {/* Scenario Table:: start */}
        <div className={styles.scenarioTopContainer}>
          <div className={styles.scenarioContainer}>
            <div className={styles.scenarioContainerLeft}>
              <div><h3>Scenarios</h3></div>
              <div><a href="#">See All</a></div>
            </div>
            <div className={styles.scenarioContainerRight}>
              <Button>Create New</Button>
            </div>
          </div>
          <div className={styles.mainTableContainer}>
            <table className={styles.table_content}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Scenario Name</th>
                  <th>Description</th>
                  <th>Date Created</th>
                  <th>Games Played</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sessionHistory.sessionshistoryByType &&
                  sessionHistory.sessionshistoryByType.success &&
                  sessionHistory.sessionshistoryByType.data &&
                  JSON.parse(sessionHistory.sessionshistoryByType.data)?.ScenarioDetails.map((scenario, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{scenario.ScenarioName}</td>
                        <td>{scenario.Desription}</td>
                        <td>Date created</td>
                        <td>Games Played</td>
                        <td>{scenario.Status}</td>
                      </tr>
                    );
                  })}
                {usersByPage &&
                  usersByPage.success &&
                  usersByPage.data &&
                  JSON.parse(usersByPage.data)?.UserDetails.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.UserName}</td>
                        <td>{user.Email}</td>
                        <td>{user.Designation}</td>
                        <td>{user.OrganizationName}</td>
                        <td>
                          <button onClick={() => { }}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {usersByPage && usersByPage.success && usersByPage.data && (
              <div className={styles.paginationContainer}>
                <Pagination
                  totalCount={JSON.parse(usersByPage.data)?.TotalCount}
                  pageNumber={pageNumber}
                  countPerPage={pageCount}
                />
              </div>
            )}
          </div>
        </div>

        {/* Scenario Table:: end */}
      </div>

    </PageContainer>

  );
};

export default Homepage;
