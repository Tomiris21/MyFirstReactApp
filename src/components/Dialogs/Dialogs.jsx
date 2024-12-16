import React, { useState } from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";
import {
  sendMesssageCreator,
  newMessageTextCreator,
} from "../Redux/dialog.reduce.js";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialogs) => (
    <DialogsItem name={dialogs.name} id={dialogs.id} />
  ));

  let Messages = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));
  let newMessage = props.state.newMessage;
  let onSendMessageClick = () => {
    props.stor.dispatch(sendMesssageCreator());
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(newMessageTextCreator(body));
  };
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        {Messages}
        <div>
          <div>
            {" "}
            <textarea
              value={newMessage}
              onChange={onNewMessageChange}
              placeholder="New message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
