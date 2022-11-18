import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mail({ setShowModal }) {
  return (
    <a href="#top">
      <button class="mail__btn click" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon="fa-envelope" />
      </button>
    </a>
  )
}
