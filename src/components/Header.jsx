import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png'
const Header = () => {
    return(
        <header className="header">
            <div className='logoblack'>
                <img src={logo} alt="Logo" />
                </div>
            <div className='menu'>
                <img src={menu} alt="menu"  />
            </div>
            
            
        </header>
    )
}

export default Header