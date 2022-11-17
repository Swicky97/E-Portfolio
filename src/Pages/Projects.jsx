import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Mail from "../Components/Mail";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects__container">
        <h1 className="projects__title blue">
          Here are some of my <b className="blue">projects</b>
        </h1>
        <ul>
          <li class="project">
            <div className="project__wrapper--side">
              <img
                src="images/MTGOutlet2.png"
                class="project__img--side"
                alt=""
              />
            </div>
            <div class="project__wrapper">
              <img src="images/MTGOutlet1.png" class="project__img" alt="" />
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">MTG Outlet</h3>
                <h4 class="project__description--sub-title">
                  Tech Stack: HTML5, CSS3, React
                </h4>
                <p class="project__description--para">
                  A Magic the Gathering E-Commerce site built with a focus on
                  responsive design.
                </p>
                <div className="project__description--links">
                  <a
                    href="https://github.com/Swicky97/MTG-Outlet"
                    target="_blank"
                    rel="noreferrer"
                    className="project__link click"
                  >
                    <FontAwesomeIcon icon="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project__wrapper--side">
              <img
                src="images/MTGOutlet3.png"
                className="project__img--side"
                alt=""
              />
            </div>
          </li>
          <div className="a__wrapper">
            <a
              href="https://mtg-outlet-react.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="website__link click"
            >
              Check it out here
            </a>
          </div>

          <li class="project">
            <div className="project__wrapper--side">
              <img
                src="images/placeholder.png"
                class="project__img--side"
                alt=""
              />
            </div>
            <div class="project__wrapper">
              <img src="images/placeholder.png" class="project__img" alt="" />
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">
                  Pokemon Team Builder
                </h3>
                <h4 class="project__description--sub-title">
                  Tech Stack: .NET
                </h4>
                <p class="project__description--para">
                  A team builder and organizer for the game Pokemon.
                </p>
                <div className="project__description--links">
                  <a
                    href="https://github.com/Swicky97"
                    target="_blank"
                    rel="noreferrer"
                    className="project__link click"
                  >
                    <FontAwesomeIcon icon="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project__wrapper--side">
              <img
                src="images/placeholder.png"
                className="project__img--side"
                alt=""
              />
            </div>
          </li>
          <div className="a__wrapper">
            <a
              href="https://github.com/Swicky97"
              target="_blank"
              rel="noreferrer"
              className="website__link click"
            >
              Check it out here
            </a>
          </div>
        </ul>
      </div>
      <Mail />
    </section>
  );
}
