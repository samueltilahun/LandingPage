import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
import twitter from '../../assets/Twitter.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/Facebook.png' 

const Footer = () => {
  return ( 
    <div className="footer">
        <p>Copyright © 2023  | All Rights Reserved </p>
        <div className="navLinks">
            <div className="links">
              <Link to={'/'}  onClick={window.scrollTo(0, 0)}><a href="#">Home</a></Link>
              <Link to={'/about'} onClick={window.scrollTo(0, 0)}><a href="#">About</a></Link>
              <Link to={'/'} onClick={window.scrollTo(0, 0)}><a href="#">Pricing</a></Link>
              <Link to={'/'} onClick={window.scrollTo(0, 0)}><a href="#">Contact</a></Link>
            </div>

            <div className="socials">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer