import { useState } from 'react';
import Logo from '../images/logo.png';
import React from 'react';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
        <h1>
          <i>Good Food</i>
        </h1>
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};
