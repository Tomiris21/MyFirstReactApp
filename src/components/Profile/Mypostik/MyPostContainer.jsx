import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../Redux/profile.reduce";
import MyPost from "./MyPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postDate: state.ProfilePage.postDate,
    newPost: state.ProfilePage.newPost,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action);
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
