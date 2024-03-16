import React from 'react'
import 'tailwindcss/tailwind.css';
import NavBar from '../NavBar/NavBar';
import Encrypt from '../encryptionText/Encrypt';
import './Hero.css'

const WelcomeBox= () => {
    return(
        <div className="welcome-box">
            {/* <Encrypt target='Welcome to'/> */}
            {/* <Encrypt target='To'/> */}
            {/* <Encrypt target='This'/> */}
            {/* <Encrypt target='This demo'/> */}

            <Encrypt target='Decrypting a new'/>
            {/* <Encrypt target='To'/> */}
            {/* <Encrypt target='This'/> */}
            <Encrypt target='way of visualization'/>
            
            {/* <div className='hero-subheading'>
                Decrypting a new <br></br>
                way of visualisation
            </div> */}
        </div>
    );
}
const Hero = () => {
  return (

    <div className='hero'>
    <NavBar/>
    <div className='hero-container'>
        <div className='hero-text'>
            <WelcomeBox/>
        </div>
        <div className='hero-img'>
            <img src='./assets/nigga.svg' alt='nigga' className='hero-img-img'></img>
        </div>
    </div>
        
    </div>

  )
}

export default Hero
