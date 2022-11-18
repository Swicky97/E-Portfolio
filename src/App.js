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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav setShowModal={setShowModal}/>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer setShowModal={setShowModal}/>
      </Router>
      <Mail setShowModal={setShowModal}/>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>
  );
}

export default App;
