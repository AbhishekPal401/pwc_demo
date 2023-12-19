import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/app/admin/homepage";
import Navbar from "../../components/ui/navbar";
import Sidebar from "../../components/ui/sidebar/AdminSidebar";
import styles from "./admin.module.css";

const Admin = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.layoutContainer}>
        <div className={styles.leftContainer}>
          <Sidebar />
        </div>
        <div className={styles.rightContainer}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
