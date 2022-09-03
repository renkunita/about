import React from "react";
import Header from "./Header";
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
      
      <div className="content">
      <h1>Blog</h1>
      
      </div> 
      </>
    );
  };
  