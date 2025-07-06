import React from "react";
import Sidebar from "../Sidebar";
import styles from "./Header.module.css";

export default (props) => {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div className={styles.headerContainer}>
        <a href="/about" className={styles.headerBox}>renkunita</a>
      </div>

    </>
  );
};