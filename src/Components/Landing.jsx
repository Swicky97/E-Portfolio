import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Landing() {
  return (
    <section id="landing">
      <div className="landing__container">
        <div className="landing__img--container">
          <h1 className="landing__title--intro">
            Hello <img src="images/Chase.jpeg" alt="" className="landing__img" />
          </h1>
        </div>
        <h1 className="landing__title blue">I'm Chase.</h1>
        <p className="landing__para">
          I'm a <b className="blue">Full Stack Software Engineer</b> with a
          passion for building web applications and improving user experience.
          <br />
          Here's a bit more{" "}
          <a href="#about" className="landing__a">
            <b class="blue click">about me.</b>{" "}<FontAwesomeIcon icon="arrow-left" className="arrow"/>
          </a>
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
    </section>
  );
}
