import React, { useState } from "react";
import style from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dItem}>
      <NavLink to={path} className={style.dialogLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogsItem;
