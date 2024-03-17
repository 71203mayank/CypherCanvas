import React from 'react'
import Encrypt from '../encryptionText/Encrypt'
// import NavBar from '../NavBar/NavBar'
import '../hero/Hero.css'
import Team from './Team'
const Contact = () => {
  return (
    <div className="contact">
        <div className="container flex items-center justify-around bg-[#1f1f1f] h-[500px] p-7">
            <Team/>
            
            <div className="c2 flex flex-col">
                <a className="name text-2xl text-white p-2 no-underline text-orange-300" href="">Mayank</a>
                <a className="name text-2xl text-white p-2 no-underline text-orange-400" href="">Abijith</a>
                <a className="name text-2xl text-white p-2 no-underline text-orange-300" href="">Shalin</a>
                <a className="name  text-2xl text-white p-2 no-underline text-orange-400" href="">Sanjay</a>
            </div>
        </div>

        <div className="footer text-white bg-gray-900 text-3xl h-[50px] flex items-center">
            CODEINIT'24
        </div>
    </div>
  )
}

export default Contact
