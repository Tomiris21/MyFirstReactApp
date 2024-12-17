import React from "react";
import style from "./Profile.module.css";
import MyPostContainer from "./Mypostik/MyPostContainer";
import ProfileInfo from "./Mypostik/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <MyPostContainer store={props.store} />
    </div>
  );
};

export default Profile;
