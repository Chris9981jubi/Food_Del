import React from 'react'
import { assets } from '../../assets/assets.js'
import "./SideBar.css"
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
                <img src={assets.add_icon} alt=''/>
                <p>Add-items</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-option">
                <img src={assets.order_icon} alt=''/>
                <p>list-item</p>
            </NavLink>
            <NavLink to="/order" className="sidebar-option">
                <img src={assets.order_icon} alt=''/>
                <p>orders</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar;
