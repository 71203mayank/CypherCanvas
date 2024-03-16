import React from 'react'
import './NavBar.css'
import BaseButton from '../baseButton/BaseButton';
import OutButton from '../baseButton/OutButton';

const NavBar = () => {
return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src='./assets/logo.svg'></img>
      </div>
      <div className='nav-buttons'>
        {/* <BaseButton name="Learn"/>
        <BaseButton name=""/>
        <BaseButton name=""/>
        <BaseButton name=""/> */}
        <div className='nav-button'>Learn</div>
        <div className='nav-button'>Encrypt</div>
        <div className='nav-button'>Play</div>
        <div className='nav-button'>Contact</div>
      </div>
    </nav>
  );
}

export default NavBar
