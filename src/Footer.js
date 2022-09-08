import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { IconContext } from 'react-icons'



export default (props) => {
  return (
    <>
      <div class="footerContainer">
      <div class="footerBoxIcon">
        <IconContext.Provider value={{ color: '#000', size: '40px' }}>
        <div><a href="mailto:renkunita0018@gmail.com"><FiMail /></a></div>
        <div><a href="https://github.com/renkunita"><FaGithub /></a></div>
        <div><a href="https://www.linkedin.com/in/ren-kunita-b1544b248/"><FaLinkedin /></a></div>
        </IconContext.Provider>
      </div>
      <div class="footerBox">&copy; 2022 Ren Kunita</div>
      </div>
      
    </>
  );
};