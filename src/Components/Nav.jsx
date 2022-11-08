import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="title__container">
          <div className="title">
            <img src="images/CS-logo.jpeg" alt="" className="logo" />
          </div>
        </Link>
        <ul className="nav__links">
          <li className="nav__link">
            <Link to="/" className="nav__a">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/projects" className="nav__a">
              Projects
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/about" className="nav__a">
              About
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__a">
              Personal Life
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__a">
              Contact
            </Link>
          </li>
          <li className="nav__link">
            <Link to="/" className="nav__a">
              <FontAwesomeIcon icon="circle-half-stroke" />
            </Link>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
      </div>
    </nav>
  );
}
