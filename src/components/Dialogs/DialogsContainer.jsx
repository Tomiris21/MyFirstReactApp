import React from "react";
import { sendMesssageCreator } from "../Redux/dialog.reduce";
import { newMessageTextCreator } from "../Redux/dialog.reduce";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    DialogPage: state.DialogPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (body) => {
      dispatch(newMessageTextCreator(body));
    },

    sendMesssage: () => {
      dispatch(sendMesssageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
