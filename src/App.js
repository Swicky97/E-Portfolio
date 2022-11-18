import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal";
import Mail from "./Components/Mail";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  let contrastToggle = false;
  const [showModal, setShowModal] = useState(false);

  function toggleContrast() {
    console.log('working');
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav setShowModal={setShowModal} toggleContrast={toggleContrast}/>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer setShowModal={setShowModal} />
      </Router>
      <Mail setShowModal={setShowModal} />
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
