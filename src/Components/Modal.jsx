import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "./ContactForm";

export default function Modal({ setShowModal }) {
  return (
    <div className="modal">
      <div className="modal__half modal__about">
        <h3 className="modal__title modal__title--about">
          Here's a bit more about me.
        </h3>
        <h4 className="modal__subtitle modal__subtitle--about">
          Full Stack Software Developer.
        </h4>
        <p className="modal__para">
          I trained at Revature as a{" "}
          <b className="blue">full stack Java developer</b> improving my
          proficiency in Spring Boot, Angular, and AWS.
          <br />
          In my spare time I recently completed a 6 week coding bootcamp,{" "}
          <b className="blue">Frontend Simplified</b>, to hone my knowledge in
          HTML5, CSS3, and React.
          <br />I am currently working on a personal project in the{" "}
          <b className="blue">.NET technology stack. </b>
        </p>
        <div className="modal__languages">
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-html5"
              className="modal__language--img"
            />
            <span class="modal__name">HTML 5</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-css3"
              className="modal__language--img"
            />
            <span class="modal__name">CSS 3</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-js"
              className="modal__language--img"
            />
            <span class="modal__name">JavaScript</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-java"
              className="modal__language--img"
            />
            <span class="modal__name">Java</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-angular"
              className="modal__language--img"
            />
            <span class="modal__name">Angular</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-react"
              className="modal__language--img"
            />
            <span class="modal__name">React</span>
          </figure>
          <figure className="modal__language">
            <FontAwesomeIcon
              icon="fab fa-microsoft"
              className="modal__language--img"
            />
            <span class="modal__name">.NET</span>
          </figure>
        </div>
      </div>
      <div class="modal__half modal__contact">
        <FontAwesomeIcon
          icon="fa-times"
          className="modal__exit click"
          onClick={() => setShowModal(false)}
        />
        <h3 class="modal__title modal__title--contact">Let's have a chat!</h3>
        <h3 class="modal__subtitle modal__sub-title--contact">
          I'm currently open to new opportunities.
        </h3>
        <ContactForm />
        <div class="modal__overlay modal__overlay--loading">
          <FontAwesomeIcon icon="fa-spinner" className="fa-spinner" />
        </div>
        <div class="modal__overlay modal__overlay--success">
          Thanks for the message! Looking forward to speaking to you soon.
        </div>
      </div>
    </div>
  );
}
