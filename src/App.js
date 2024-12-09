
import React, {component} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className ='wrapper'>
      <Header/>
      <Navbar/>
      <div class='wrapper-content'>
        <Routes>
        <Route path='/Profile' Component={Profile}/>
        <Route path='/Dialogs' Component={Dialogs}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    );
}



export default App;
