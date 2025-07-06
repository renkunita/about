import React from "react";
import "./Home.css";
import BlogList from "./BlogList";
import usePageTracking from "./usePageTracking";

export default (props) => {
    usePageTracking();

    return (
      <>
      <div className="content">
        <h1>Blog</h1>
        <p>Welcome to my blog where I share my thoughts and experiences about software development, technology, and more.</p>
        
        <BlogList />
      </div> 
      </>
    );
  };
  