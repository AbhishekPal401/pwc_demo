import React, { useEffect, useState } from "react";
import PageContainer from "../../../../components/ui/pagecontainer";
import styles from "./users.module.css";
import Button from "../../../../components/common/button";
import Pagination from "../../../../components/ui/pagination";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsersbyPage,
  resetUserState,
} from "../../../../store/app/admin/users/users";
import { generateGUID } from "../../../../utils/common.js";
import { json } from "react-router-dom";

const Users = () => {
  const [pageCount, setPageCount] = useState(10);
  const [pageNumber, setageNumber] = useState(1);

  const dispatch = useDispatch();

  const { usersByPage, loading } = useSelector((state) => state.users);
  const { credentials } = useSelector((state) => state.login);

  console.log("usersByPage", usersByPage);

  useEffect(() => {
    if (credentials) {
      const data = {
        pageNumber: 1,
        pageCount: pageCount,
        requester: {
          requestID: generateGUID(),
          requesterID: credentials.data.userID,
          requesterName: credentials.data.userName,
          requesterType: credentials.data.role,
        },
      };

      dispatch(getUsersbyPage(data));
    }
  }, []);

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
                      <button onClick={() => {}}>Delete</button>
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
    </PageContainer>
  );
};

export default Users;
