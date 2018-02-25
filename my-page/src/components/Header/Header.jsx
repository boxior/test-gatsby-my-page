import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header className="header">
      <div className="header__logo">
          <Link to="/" className="header__logo-link">
              <img className="header__logo-img" src="./img/logo.jpg" alt="" />
          </Link>
      </div>
      <div className="header__nav">
          <div className="nav">
              <div className="nav__item">
                  <Link to="/about-me/about-me/" className="nav__link">About me</Link>
              </div>
              <div className="nav__item">
                  <Link to="/portfolio/portfolio" className="nav__link">Portfolio</Link>
              </div>
          </div>
      </div>
  </header>
)

export default Header;
