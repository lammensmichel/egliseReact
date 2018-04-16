/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  
  <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to='/'> <a class="nav-item nav-link active">Home <span class="sr-only">(current)</span></a> </Link>
      <Link to='/personneList'><a class="nav-item nav-link" >Personne</a></Link>
      <Link to='/page2'><a class="nav-item nav-link">page2</a></Link>
    </div>
  </div>
  </nav>
);

export default Header;

