import React from "react";
import style from "./Mypost.module.css";
import Post from "./Post/Post";

let postData = [
  { id: 1, post: "Hi", likesCount: 12 },
  { id: 2, post: "Its my first post!", likesCount: 15 },
];

const Mypost = () => {
  return (
    <div className={style.Mypost}>
      <h2> My Post </h2>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>

      <div className={style.post}>
        <Post message={postData[0].post} like={postData[0].likesCount} />
        <Post message={postData[1].post} like={postData[1].likesCount} />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Mypost;
