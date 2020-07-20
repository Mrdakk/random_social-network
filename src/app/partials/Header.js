import React from "react";
import { Link } from "react-router-dom";

import "../../css/header.css";

export const Header = props => {
  return (
    <header>
      <nav className=" header">
        <div className=" header">
          <Link to="/register" className="brand-logo li">
            BITBOOK
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/feed" className="li">
                Feed
              </Link>
            </li>
            <li>
              <Link to="/people" className="li">
                People
              </Link>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
