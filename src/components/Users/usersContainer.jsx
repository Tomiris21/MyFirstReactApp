import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../Redux/users.reduce";

let mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followed: (usersId) => {
      dispatch(followAC(usersId));
    },
    unfollowed: (usersId) => {
      dispatch(unfollowAC(usersId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
