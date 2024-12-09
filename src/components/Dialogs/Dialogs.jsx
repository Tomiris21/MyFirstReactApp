import React, { useState } from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialogs) => (
    <DialogsItem name={dialogs.name} id={dialogs.id} />
  ));

  let Messages = props.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{Messages}</div>
    </div>
  );
};

export default Dialogs;
