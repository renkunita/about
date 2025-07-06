import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

export default (props) => {
  const handleStateChange = (state) => {
    if (state.isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <Menu 
      right 
      onStateChange={handleStateChange}
      disableAutoFocus
    >
      <a className="menu-item" href="/about">
        Home
      </a>
      <a className="menu-item" href="/about/blog">
        Blog
      </a>
    </Menu>
  );
};
