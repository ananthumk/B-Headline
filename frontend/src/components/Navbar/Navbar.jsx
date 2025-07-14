import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import './Navbar.css'

const Navbar = ({setCms}) => {
  return (
    <div className='navbar-container'>
        <p className='navbar-option'>About</p>
        <div className='navbar-service-container'>
          <p className='navbar-option'>Services</p>
          <IoIosArrowDown className="navbar-down-icon" />
        </div>
        <CiEdit onClick={() => setCms(true)} className='edit-icon' />
    </div>
  )
}

export default Navbar