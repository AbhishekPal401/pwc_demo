// App.js
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "../routers/Auth";
import AdminRoutes from "../routers/admin";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Routers = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const { credentials } = useSelector((state) => state.login);

  useEffect(() => {
    if (credentials?.success) {
      if (credentials?.data?.token) {
        setIsAuthorised(true);
        if (credentials?.message) {
          toast.success(credentials?.message);
        }
      } else {
        setIsAuthorised(false);
      }
    } else if (!credentials?.success && credentials?.message) {
      toast.error(credentials?.message);

      setIsAuthorised(false);
    }
  }, [credentials]);

  return <Router>{isAuthorised ? <AdminRoutes /> : <AuthRoutes />}</Router>;
};

export default Routers;
