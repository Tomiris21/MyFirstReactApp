import React from "react";
import style from "./Profile.module.css";
import myPostContainer from "./Mypostik/MyPostContaioner";
import ProfileInfo from "./Mypostik/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <mypostContainer store={props.store} />
    </div>
  );
};

export default Profile;
