import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
import { assets } from '../../assets/assets';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate()
  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }

  return (
    <div className="navbar">
      <h1 className="logo">
        <span className="greenToRed">Meal</span>
        <span className="redToGreen">Mate</span>
      </h1>
      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
      </ul>
      <div className="navbar-right">
        <i className="fas fa-search search-icon"></i>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <i className="fas fa-shopping-basket basket-icon"></i>
          </Link>
          
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_pic} alt='Profile' />
            <ul className='nav-profile-dropdown'>
              <li onClick={()=>navigate("/myOrders")}><img src={assets.shop_bag} alt=''/><p>Orders</p></li>
                <hr/>
                <li onClick={logout}><img src={assets.log_out} alt=''/><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
