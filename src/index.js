import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCircleHalfStroke, faFilePdf, faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faHtml5, faCss3, faJs, faJava, faAngular, faReact, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faCircleHalfStroke, faFilePdf, faGithub, faLinkedin, faEnvelope, faHtml5, faCss3, faJs, faJava, faAngular, faReact, faMicrosoft, faArrowLeft)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
