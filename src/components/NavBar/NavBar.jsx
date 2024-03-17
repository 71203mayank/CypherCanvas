import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import BaseButton from '../baseButton/BaseButton';
import OutButton from '../baseButton/OutButton';

const NavBar = () => {
return (
    <nav className='navbar sticky top-0 z-50'>
      <div className='logo-container'>
        <img src='./assets/logo.svg'></img>
      </div>
      <div className='nav-buttons'>
        <div className='nav-button'>Learn</div>
        <Link to='/try'><div className='nav-button'>Encrypt</div></Link>
        <Link to={'/'}><div className='nav-button'>Play</div></Link>
        
        <div className='nav-button'>Contact</div>
      </div>
    </nav>
  );
}

export default NavBar
