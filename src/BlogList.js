import React from "react";
import { getPublishedPosts } from "./BlogData";
import Thumbnail from "./Thumbnail";
import "./Home.css";

const BlogList = () => {
  const posts = getPublishedPosts();

  return (
    <div className="blog-posts">
      {posts.length === 0 ? (
        <div className="no-posts">
          <p>まだ記事がありません。</p>
        </div>
      ) : (
        posts.map(post => (
          <Thumbnail
            key={post.id}
            url={post.url}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            tags={post.tags}
          />
        ))
      )}
    </div>
  );
};

export default BlogList;