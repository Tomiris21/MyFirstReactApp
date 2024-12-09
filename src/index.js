import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postDate = [
  { id: 1, post: "Hi", likesCount: 12 },
  { id: 2, post: "Its my first post!", likesCount: 15 },
];

let dialogsData = [
  { id: 1, name: "Alexandr" },
  { id: 2, name: "Inna" },
  { id: 3, name: "Olga" },
  { id: 4, name: "Olga" },
  { id: 5, name: "Oxana" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Hello" },
  { id: 4, message: "" },
  { id: 5, message: "" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postDate={postDate} dialogsData={dialogsData}  messagesData={ messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
