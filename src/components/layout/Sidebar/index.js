import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu right>
      <a className="menu-item" href="/about">
        Home
      </a>
      <a className="menu-item" href="/about/blog">
        Blog
      </a>
    </Menu>
  );
};
