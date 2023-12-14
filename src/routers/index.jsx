// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routers;
