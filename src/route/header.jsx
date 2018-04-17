/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <Link to="/" className="nav-item nav-link" >
          Home <span className="sr-only">(current)</span>
        </Link>
        <Link to="/personneList" className="nav-item nav-link" >
        liste de personne
        </Link>
        <Link to="/personne" className="nav-item nav-link" >
         ajouter personne
        </Link>
      </ul>
    </div>
  </nav>

);

export default Header;

