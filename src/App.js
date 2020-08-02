import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { ParallaxProvider } from "react-skrollr";

import Container from "./Container";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Container />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
