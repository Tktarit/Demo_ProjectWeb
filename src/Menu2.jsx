import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Button2.css';

const SlideMenu2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      
      <button id="menuButton" onClick={toggleMenu}>
        <div className="icon">
          <span className="bar2"></span>
          <span className="bar2"></span>
          <span className="bar2"></span>
        </div>
        <span className="menuText2">Menu</span>
      </button>

      <div id="menu" className={isMenuOpen ? 'active' : ''}>
        <button id="closeButton" onClick={toggleMenu}>&times;</button>
        <ul className="menuTexts" onClick={toggleMenu}>
          <li><Link to="/Overview">Home</Link></li>
          <li><Link to="/hotel">Hotel</Link></li>
          <li><Link to="/cafe">Cafe</Link></li>
          <li><Link to="/spa">Spa</Link></li>
          <li><Link to="/club">Club</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default SlideMenu2;