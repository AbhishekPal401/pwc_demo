import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/app/admin/homepage";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Admin;
