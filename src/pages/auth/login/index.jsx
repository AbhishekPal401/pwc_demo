import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/auth/login.js";

const Login = () => {
  const store = useSelector((state) => state.login);

  const dispatch = useDispatch();

  console.log(store);

  return (
    <div className={styles.container}>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
