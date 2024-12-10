import React, { component } from "react";
import style from "./Navbar.module.css";
import { NavLink, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.navLink
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.navLink
          }
        >
          Message
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? style.activeLink : style.navLink
          }
        >
          {" "}
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? style.activeLink : style.navLink
          }
        >
          Friends
        </NavLink>
      </div>
      <div className={style.itemSetting}>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? style.activeLink : style.navLink
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
