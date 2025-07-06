import React, { useState } from "react";
import Sidebar from "../Sidebar";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSidebarStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  return (
    <>
      <Sidebar 
        pageWrapId={"page-wrap"} 
        outerContainerId={"outer-container"}
        isOpen={isMenuOpen}
        onStateChange={handleSidebarStateChange}
      />

      <div className={styles.headerContainer}>
        <a href="/about" className={styles.headerBox}>renkunita</a>
        
        <button className={styles.hamburgerMenu} onClick={toggleMenu}>
          <span className={`${styles.line} ${isMenuOpen ? styles.line1Active : ''}`}></span>
          <span className={`${styles.line} ${isMenuOpen ? styles.line2Active : ''}`}></span>
          <span className={`${styles.line} ${isMenuOpen ? styles.line3Active : ''}`}></span>
        </button>
      </div>

    </>
  );
};

export default Header;