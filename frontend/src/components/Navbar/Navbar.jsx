import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <p className='navbar-option'>About</p>
        <div className='navbar-service-container'>
          <p className='navbar-option'>Services</p>
          <IoIosArrowDown className="navbar-down-icon" />
        </div>
    </div>
  )
}

export default Navbar