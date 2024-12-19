import React, { component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/usersContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper-content">
        <Routes>
          {" "}
          debugger
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dialogs" element={<DialogsContainer />} />
          <Route path="/Users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
