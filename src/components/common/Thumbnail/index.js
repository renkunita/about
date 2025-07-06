import React from "react";
import styles from "./Thumbnail.module.css";

export default (props) => {
  const {url, title, date} = props;
  return (
    <>
    <div className={styles.thumbcontent}>
      <a href={url}></a>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
    </>
  );
};
