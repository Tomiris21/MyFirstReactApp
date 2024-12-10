import React from "react";
import style from "./Profile.module.css";
import Mypost from "./Mypostik/Mypost";
import ProfileInfo from "./Mypostik/ProfileInfo";
import state from "../Redux/State";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Mypost postDate={props.state.postDate} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
