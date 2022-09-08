import React from "react";
import topimage from "./image/mountains-190055.jpg";
import Thumbnail from "./Thumbnail"


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
      <Thumbnail 
      url="/about/blog/1"
      title="GitHub PagesにReactをデプロイする"
      date="2022/09/08"
      />
      
      </div> 
      </>
    );
  };
  