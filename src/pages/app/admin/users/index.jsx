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

const Users = () => {
  const [pageCount, setPageCount] = useState(10);

  const dispatch = useDispatch();

  const { usersByPage, loading } = useSelector((state) => state.users);
  const { credentials } = useSelector((state) => state.login);

  console.log("usersByPage", usersByPage);

  useEffect(() => {
    if (!usersByPage && credentials) {
      const data = {
        pageNumber: 0,
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
