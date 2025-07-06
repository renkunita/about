import React from "react";
import Sidebar from "./Sidebar";
import "./Header.css";

export default (props) => {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div className="headerContainer">
        <a href="/about" className="headerBox">renkunita</a>
      </div>

    </>
  );
};