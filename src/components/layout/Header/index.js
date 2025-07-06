import React from "react";
import Sidebar from "../Sidebar";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div className={styles.headerContainer}>
        <a href="/about" className={styles.headerBox}>renkunita</a>
      </div>

    </>
  );
};

export default Header;