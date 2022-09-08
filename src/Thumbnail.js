import React from "react";
import "./Thumbnail.css";

export default (props) => {
  const {url, title, date} = props;
  return (
    <>
    <div className="thumbcontent">
      <a href={url}></a>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
    </>
  );
};
