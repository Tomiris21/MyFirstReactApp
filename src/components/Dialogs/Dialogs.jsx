import React, { useState } from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";

let dialogsData = [
  { id: 1, name: "Alexandr" },
  { id: 2, name: "Inna" },
  { id: 3, name: "Olga" },
  { id: 4, name: "Olga" },
  { id: 5, name: "Oxana" },
];

let dialogsElements = dialogsData.map((dialogs) => (
  <DialogsItem name={dialogs.name} id={dialogs.id} />
));

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Hello" },
  { id: 4, message: "" },
  { id: 5, message: "" },
];

let Messages = messagesData.map((message) => (
  <Message message={message.message} id={message.id} />
));

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{Messages}</div>
    </div>
  );
};

export default Dialogs;
