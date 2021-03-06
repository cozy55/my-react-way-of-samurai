import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className = 'app-wrapper-content'>
          <Route path = '/dialogs' render = { ()=> <DialogsContainer />}/>
          <Route path = '/profile/:userId?' render = { ()=> <ProfileContainer />}/>
          <Route path = '/users' render = { ()=> <UsersContainer />} />
          <Route path = '/news' component = {News}/>
          <Route path = '/music' component = {Music}/>
          <Route path = '/settings' component = {Settings}/>
          <Route path = '/login' render = {() => <LoginPage />}/>
        </div>
      </div>
  );
}

export default App;
