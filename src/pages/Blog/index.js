import React from "react";
import styles from "../Home/Home.module.css";
import BlogList from "./BlogList";
import usePageTracking from "../../hooks/usePageTracking";

const Blog = (props) => {
    usePageTracking();

    return (
      <>
      <div className={styles.content}>
        <h1>Blog</h1>
        <p>Welcome to my blog where I share my thoughts and experiences about software development, technology, and more.</p>
        
        <BlogList />
      </div> 
      </>
    );
};

export default Blog;
  