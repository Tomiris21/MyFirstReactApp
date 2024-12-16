
import React, {component} from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <div className ='wrapper'>
      <Header/>
      <Navbar/>
      <div className='wrapper-content'>
        <Routes>
        <Route path = "/Profile" element={<Profile state={props.state.ProfilePage} dispatch={props.dispatch} />}/>
        <Route path='/Dialogs' element={<Dialogs state={props.state.MessagePage} />}/>
        </Routes>
      </div>
    </div>
    );
}



export default App;
