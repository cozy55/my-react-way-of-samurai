import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
    return(
        <header className = {s.header}>
            <img src = 'https://i.pinimg.com/originals/e9/96/c7/e996c7d6815ea3129c9228647d7b5328.jpg'/>
            <div className = {s.loginBlock}>
                {props.isAuth
                    ? props.login
                    :<NavLink to = {'/login'}>Login</NavLink>}
            </div>
        
        </header>
    )
}

export default Header;