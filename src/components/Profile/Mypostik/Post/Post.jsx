import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjLXCC5vBtWS3mM7jZ-dGDFXlN4euQiNOMQ&s"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
