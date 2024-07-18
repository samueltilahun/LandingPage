import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div class="logo">
            <img src={logo} alt="" /> 
            <div className="title">
                <div className='vertical'></div>
                
                <h1>Nesters financial Technology Solutions</h1>
                <span>We thrive to be the best</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar