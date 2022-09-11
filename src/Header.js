import React from "react";
import Sidebar from "./Sidebar";
import "./Header.css";

export default (props) => {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />

      <div class="headerContainer">
        <div class="headerBox">renkunita</div>
      </div>

    </>
  );
};