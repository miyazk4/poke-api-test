import React from "react";
import pokeHeader from "../images/pokeapi_256.png"; // Img
import { NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navigationContainer">
          <div className="logoContainer">
            <h1>
              <img src={pokeHeader} alt="Pokemon logo" />
            </h1>
          </div>
          <div className="mainNavigation">
            <ul>
              <li>
                <NavLink to="/" activeClassName="fill" exact={true}>
                  Home
                </NavLink>
              </li>
              <li className="aboutNav">
                <NavLink
                  to="/about"
                  activeClassName="fill"
                  onClick={e => e.preventDefault()}
                >
                  About
                </NavLink>
                <div className="secondaryNav">
                  <ul>
                    <li>
                      <NavLink to={`/about/aboutUs`}>About Us</NavLink>
                    </li>
                    <li>
                      <NavLink to={`/about/contacts`}>Contacts</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
