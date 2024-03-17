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
        <a className='nav-button' href='https://drive.google.com/file/d/1el2mpaV88w2287w87d5XaJdz4A-RLEMH/view?usp=sharing' target="_blank" rel="noopener noreferrer">Learn</a>
        <Link to='/try'><div className='nav-button'>Encrypt</div></Link>
        <Link to={'/quiz'}><div className='nav-button'>Play</div></Link>
        
        <a className='nav-button' href='https://github.com/71203mayank/codeint24' target="_blank" rel="noopener noreferrer">Contribute</a>
      </div>
    </nav>
  );
}

export default NavBar
