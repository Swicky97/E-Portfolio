import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ setShowModal, toggleContrast }) {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

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
            <a href="#" className="nav__a" onClick={() => setShowModal(true)}>
              Contact
            </a>
          </li>
          <li className="nav__link">
            <a href="#" className="nav__a" onClick={() => toggleContrast()}>
              <FontAwesomeIcon icon="circle-half-stroke" />
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FontAwesomeIcon icon="fa-times" onClick={closeMenu}/>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/projects" className="menu__link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link" onClick={() => { setShowModal(true); closeMenu(); }}>
                Contact
              </a>
            </li>
            <li className="menu__list">
              <a href="#" className="menu__link" onClick={() => { toggleContrast(); closeMenu(); }}>
                Toggle Dark Mode
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
