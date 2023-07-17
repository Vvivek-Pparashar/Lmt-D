import React from 'react'
import "./Navbar.css"
import logo from "./companyLogo.png"
const Navbar = (props) => {
  return (
    <div>
  <header className='navbar'>
        <div className='navbar__title navbar__item'>LalJi MulJi Transport</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>  
              
    </header>
    </div>
  )
}

export default Navbar
