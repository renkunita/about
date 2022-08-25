import React from "react";
import Header from "./Header";
import "./Home.css";
import topimage from "./image/mountains-190055.jpg";


export default (props) => {
    return (
      <>
      <Header />

      <div className="topimage">
          <img
            src={topimage}
            alt="フリー画像"
          />
      </div>

      <h1>Home</h1>
      
      </>
    );
  };
  