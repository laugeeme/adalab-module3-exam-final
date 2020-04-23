/* eslint-disable no-useless-constructor */
import React from 'react';
import Logo from '../images/rick-and-morty.png';

const Header = () => {
  return (
    <header className="header-container">
      <div class="space">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <h1>Browse your Rick and Morty character</h1>
        <img src={Logo} alt="Logo" />
        <div className="goLink-container">
          <a href="#main" className="goLink">
            Go !
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
