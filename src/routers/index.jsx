// App.js
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "../routers/Auth";
import AdminRoutes from "../routers/admin";
import { useDispatch, useSelector } from "react-redux";

const Routers = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const { credentials } = useSelector((state) => state.login);

  useEffect(() => {
    if (credentials?.success) {
      if (credentials?.data?.token) {
        setIsAuthorised(true);
      } else {
        setIsAuthorised(false);
      }
    } else {
      setIsAuthorised(false);
    }
  }, [credentials]);

  return <Router>{isAuthorised ? <AdminRoutes /> : <AuthRoutes />}</Router>;
};

export default Routers;
