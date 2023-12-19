import React, { useState } from "react";
import styles from "./adminsidebar.module.css";
import ButtonLink from "../../common/ButtonLink";

const AdminSidebar = () => {
  const [currentActive, setCurrentActive] = useState("home");

  return (
    <div className={styles.container}>
      <ButtonLink
        style={{
          marginTop: "2rem",
        }}
        linkTo="/"
        isActive={currentActive === "home"}
        svgSrc="sprite.svg#homepage"
        onClick={() => {
          setCurrentActive("home");
        }}
      />

      <ButtonLink
        linkTo="/users"
        isActive={currentActive === "users"}
        svgSrc="sprite.svg#homepage"
        onClick={() => {
          setCurrentActive("users");
        }}
      />

      <ButtonLink
        linkTo="/scenario"
        isActive={currentActive === "scenario"}
        svgSrc="sprite.svg#scenario"
        onClick={() => {
          setCurrentActive("scenario");
        }}
      />
      <ButtonLink
        linkTo="/questionbuilder"
        isActive={currentActive === "questionbuilder"}
        svgSrc="sprite.svg#questionBuilder"
        onClick={() => {
          setCurrentActive("questionbuilder");
        }}
      />
      <ButtonLink
        linkTo="/decisiontree"
        isActive={currentActive === "decisiontree"}
        svgSrc="sprite.svg#decisionTree"
        onClick={() => {
          setCurrentActive("decisiontree");
        }}
      />

      <div className={styles.bottomContainer}>
        <ButtonLink
          disabled={true}
          isActive={currentActive === "logout"}
          svgSrc="sprite.svg#logout"
          onClick={() => {
            setCurrentActive("logout");
          }}
        />
      </div>
    </div>
  );
};

export default AdminSidebar;
