import React from "react";
import style from "./Profile.module.css";
import Mypost from "./Mypostik/MyPost";
import ProfileInfo from "./Mypostik/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Mypost postDate={props.postDate} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
