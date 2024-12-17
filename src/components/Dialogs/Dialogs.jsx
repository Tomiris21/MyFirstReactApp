import React, { useState } from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";

const Dialogs = (props) => {
  console.log("Props in Dialogs:", props);
  let state = props.DialogPage;

  let dialogsElements = state.dialogsData.map((dialogs) => (
    <DialogsItem name={dialogs.name} id={dialogs.id} />
  ));

  let Messages = state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));
  let newMessage = props.newMessage;

  let onSendMessageClick = () => {
    props.sendMesssage();
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.newMessageTextCreator(body);
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
