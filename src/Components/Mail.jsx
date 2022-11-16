import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mail() {
  return (
    <a href="#top">
      <button class="mail__btn click" onclick="toggleModal()">
        <FontAwesomeIcon icon="fa-envelope" />
      </button>
    </a>
  )
}
