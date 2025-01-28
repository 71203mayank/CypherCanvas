import React from 'react'
import 'tailwindcss/tailwind.css';
import NavBar from '../NavBar/NavBar';
import Encrypt from '../encryptionText/Encrypt';
import './Hero.css'

const Hero = () => {
  return (

    <div className='hero'>

    <div className='hero-container'>
        <div className='hero-text'>
            <div className="welcome-box">
                <Encrypt target='Decrypting a new'/>
                <Encrypt target='way of visualization'/>
            </div>
        </div>
        <div className='hero-img'>
            <img src='./assets/nigga.svg' alt='image' className='hero-img-img'></img>
        </div>
    </div>
    <div style={{position:'absolute',top:'0'}}><NavBar/></div>
    </div>

  )
}

export default Hero
