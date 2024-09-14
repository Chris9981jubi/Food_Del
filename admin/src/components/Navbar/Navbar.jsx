import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="admin-section">
        <h2 className="admin-title">ADMIN PANEL</h2>
    <h1 className="logo">
      <span className="meal">Meal</span>
      <span className="mate">Mate</span>
    </h1>
    </div>
    <div className="profile-pic">
        <img className="profile" src={assets.profile_pic} alt="Profile" />
      </div>
  </div>
  )
}

export default Navbar
