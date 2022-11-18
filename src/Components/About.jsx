import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__img--container">
          <h1 className="about__title blue">
            About me{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/West_Virginia_Mountaineers_logo.svg"
              alt=""
              className="about__img"
            />
          </h1>
        </div>
        <p className="about__para">
          I graduated from <b className="blue">West Virginia University</b>{" "}
          in May 2022 with a Bachelor's Degree in{" "}
          <b className="blue">Computer Engineering. </b>
          <br />
          I'm a 25 year-old Full Stack Software Engineer with experience
          developing personal and professional websites with a diverse
          <a href="#tech" className="about__a">
          <b className="blue click"> technology stack.</b><FontAwesomeIcon icon="arrow-left" className="arrow"/>
          </a>
        </p>
      </div>
    </section>
  );
}
