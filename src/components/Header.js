import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

function Header() {
  return(
    <div class="Header">  
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link to="/" class="nav-link header-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link header-link">About</Link>
          </li>
          <li class="nav-item">
            <Link to="/test" class="nav-link header-link">Test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;