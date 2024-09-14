import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    
    <div className="footer" id='footer'>
    <div className='footer-content'>
      <div className='footer-content-left'>
        <h2>
        <span className='meal'>Meal</span>
        <span className='mate'>Mate</span>
        </h2>
        <p>"We've loved serving you and bringing delicious flavors to your table. Our commitment to quality and passion for great food are at the heart of everything we do. Thank you for choosing us, and we look forward to continuing to serve you with the best culinary experiences."</p>
      </div>
      <div className="footer-social">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Delivery</li>
            <li>Privacy-Policy</li>
        </ul>

      </div>
      <div className="footer-content-right">
        <h2>Get in touch with us</h2>
        <ul>
            <li>+91 6232334554</li>
            <li>contact@mealmate.com</li>
        </ul>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ mealmate.com</p>
    </div>
    </div>
  );
};
export default Footer;