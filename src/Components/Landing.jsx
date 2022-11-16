import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mail from './Mail';

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__img--container">
            <h1 className="landing__title">
              Hello{" "}
              <img src="images/Chase.jpeg" alt="" className="header__img" />
            </h1>
          </div>
          <h1 className="landing__title red">I'm Chase.</h1>
          <p className="header__para">
            I'm a <b className="red">Full Stack Software Engineer</b> with a
            passion for building web applications and improving user experience.
            <br />
            Here's a bit more <b class="red click"> about me. </b>
          </p>
          <div class="social__list">
            <a
              href="https://github.com/Swicky97"
              target="_blank"
              rel="noreferrer"
              class="social__link click"
            >
              <FontAwesomeIcon icon="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/chase-swick-bb94ba233/"
              target="_blank"
              rel="noreferrer"
              class="social__link click"
            >
              <FontAwesomeIcon icon="fab fa-linkedin" />
            </a>
            <a
              href="images/My-Resume.pdf"
              target="_blank"
              class="social__link click"
            >
              <FontAwesomeIcon icon="fa-file-pdf" />
            </a>
          </div>
        </div>
      </header>
      <Mail />
    </section>
  );
}
