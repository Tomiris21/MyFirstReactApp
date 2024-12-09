import React from "react";
import style from "./Profile.module.css";
import Mypost from "./Mypostik/Mypost";
import ProfileInfo from "./Mypostik/ProfileInfo";

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <Mypost />
    </div>
  );
};

export default Profile;
