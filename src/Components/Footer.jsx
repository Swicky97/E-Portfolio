import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ setShowModal }) {
  return (
    <footer>
      <div className="footer__container">
        <div className="row row__column">
          <a href="#top">
            <figure className="footer__logo">
              <img src="images/CS-logo.jpeg" className="logo" alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <Link to="/projects" className="footer__link">
              Projects
            </Link>
            <a href="#" className="footer__link" onClick={() => setShowModal(true)}>
              Contact
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Chase Swick
          </div>
        </div>
      </div>
    </footer>
  );
}
