import React from 'react';
import { Link } from 'react-router-dom';
import Theme from "../Theme/Theme";


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Головна</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
        <li><Link to="/about">Про мене</Link></li>
      </ul>
    </nav>
    <Theme />
  </header>
);

export default Header;