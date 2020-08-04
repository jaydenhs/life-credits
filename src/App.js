import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { ParallaxProvider } from "react-skrollr";

import Container from "./Container";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <ParallaxProvider>
      <Router>
        <Container />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
