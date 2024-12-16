import React from "react";
import style from "./Mypost.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../Redux/profile.reduce";

const Mypost = (props) => {
  let postElements = props.postDate.map((el) => (
    <Post key={el.id} id={el.id} message={el.post} like={el.likesCount} />
  ));

  let Click = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={style.Mypost}>
      <h2> My Post </h2>
      <div>
        <textarea ref={Click} />
      </div>
      <div>
        <button onClick={addPost}>Add</button>
      </div>

      <div className={style.post}>{postElements}</div>
    </div>
  );
};

export default Mypost;
