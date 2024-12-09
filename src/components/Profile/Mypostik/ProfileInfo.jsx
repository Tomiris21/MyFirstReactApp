import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={style.profileImg}
          src="https://img.freepik.com/free-photo/river-modern-buildings-against-sky_1359-155.jpg"
          alt="city"
        />
      </div>
      <div className={style.description}>ava+descr</div>
    </div>
  );
};

export default ProfileInfo;
