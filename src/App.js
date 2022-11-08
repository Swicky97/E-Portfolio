import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Landing />
      </Router>
    </div>
  );
}

export default App;
