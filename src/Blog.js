import React from "react";
import topimage from "./image/mountains-190055.jpg";


export default (props) => {
    return (
      <>
      <div className="topimage">
          <img
            src={topimage}
            alt="フリー画像"
          />
      </div>
      
      <div className="content">
      <h1>Blog</h1>
      <a href="/about/blog/1">blog1</a>
      
      </div> 
      </>
    );
  };
  