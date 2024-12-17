import React from "react";
import { sendMesssageCreator } from "../Redux/dialog.reduce";
import { newMessageTextCreator } from "../Redux/dialog.reduce";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    dialogsData: state.DialogPage.dialogsData,
    messagesData: state.DialogPage.messagesData,
    newMessageText: state.DialogPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageTextCreator: () => {
      dispatch(sendMesssageCreator());
    },
    sendMesssage: (body) => {
      dispatch(newMessageTextCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
