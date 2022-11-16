import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Technologies() {
  return (
    <section id="tech">
      <div className="tech__container">
        <h1 className="tech__title blue">Tech Stack </h1>
        <p className="tech__para">I am currently proficient in the following technologies and am always expanding my knowledge base.</p>
        <div className="tech__languages">
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-html5" className="language__img"/>
                <span class="language__name">HTML 5</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-css3" className="language__img"/>
                <span class="language__name">CSS 3</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-js" className="language__img"/>
                <span class="language__name">JavaScript</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-java" className="language__img"/>
                <span class="language__name">Java</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-angular" className="language__img"/>
                <span class="language__name">Angular</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-react" className="language__img"/>
                <span class="language__name">React</span>
            </figure>
            <figure className="tech__language">
                <FontAwesomeIcon icon="fab fa-microsoft" className="language__img"/>
                <span class="language__name">.NET</span>
            </figure>
        </div>
      </div>
    </section>
  );
}
