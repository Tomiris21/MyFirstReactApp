import React from "react";
import style from "./Mypost.module.css";
import Post from "./Post/Post";

const Mypost = (props) => {
  let postElements = props.postDate.map((el) => (
    <Post key={el.id} id={el.id} message={el.post} like={el.likesCount} />
  ));

  let Click = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = Click.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.Mypost}>
      <h2> My Post </h2>
      <div>
        <textarea onChange={onPostChange} ref={Click} value={props.newPost} />
      </div>
      <div>
        <button onClick={addPost}>Add</button>
      </div>
      <div className={style.post}>{postElements}</div>
    </div>
  );
};

export default Mypost;
