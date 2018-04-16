/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to="/personne" className="nav-item nav-link" >
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link to="/personneList" className="nav-item nav-link" >
          personne
        </Link>
        <Link to="/page2" className="nav-item active nav-link" >
          page2
        </Link>
      </ul>
    </div>
  </nav>

);

export default Header;

