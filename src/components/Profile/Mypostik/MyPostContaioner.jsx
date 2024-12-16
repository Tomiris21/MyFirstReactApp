import React from "react";
import { addPostActionCreator } from "../../Redux/profile.reduce";
import Mypost from "./MyPost";

const myPostContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return <Mypost addPost={addPost} postDate={state.ProfilePage.postDate} />;
};

export default myPostContainer;
