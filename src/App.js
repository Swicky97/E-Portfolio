import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Landing />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
