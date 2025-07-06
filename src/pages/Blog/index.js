import React from "react";
import "../../pages/Home/Home.module.css";
import BlogList from "./BlogList";
import usePageTracking from "../../hooks/usePageTracking";

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
  