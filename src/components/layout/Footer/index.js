import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { IconContext } from 'react-icons'



const Footer = (props) => {
  return (
    <>
      <div className={styles.footerContainer}>
      <div className={styles.footerBoxIcon}>
        <IconContext.Provider value={{ color: 'rgba(255, 255, 255, 0.9)', size: '40px' }}>
        <div><a href="mailto:renkunita0018@gmail.com"><FiMail /></a></div>
        <div><a href="https://github.com/renkunita"><FaGithub /></a></div>
        <div><a href="https://www.linkedin.com/in/ren-kunita-b1544b248/"><FaLinkedin /></a></div>
        </IconContext.Provider>
      </div>
      <div className={styles.footerBox}>&copy; 2025 Ren Kunita</div>
      </div>
      
    </>
  );
};

export default Footer;