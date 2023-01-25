import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>

        <li>Cart</li>
      </ul>
      <button className="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};
