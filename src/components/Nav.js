import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

function Nav() {
  return(
    <div class="Nav">  
        <ul class="navbar-nav nav-pills">
          <li class="nav-item">
            <Link to="/page1" class="nav-link" tabindex="1">Page 1</Link>
          </li>
          <li class="nav-item">
            <Link to="/page2" class="nav-link" tabindex="1">Page 2</Link>
          </li>
          <li class="nav-item">
            <Link to="/page3" class="nav-link" tabindex="1">Page 3</Link>
          </li>
        </ul>
    </div>
  );
}

export default Nav;