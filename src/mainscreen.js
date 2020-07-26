import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Person from "./person";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles-js";

import data from "./data.json";

export default class MainScreen extends React.Component {
  render() {
    return (
      <div class="position-relative h-100">
        <Header />
        <div id="particles-js">
          <Particles
            canvasClassName="full-page-container"
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 2000,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.03,
                },
                move: {
                  direction: "down",
                  speed: 0.1,
                },
                size: {
                  value: 6,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 2,
                    sync: false,
                  },
                },
                opacity: {
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.06,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>
        <div class="mr-4 ml-4">
          {/* use keys as dividers instead */}
          {Object.keys(data).map((section) => (
            <div>
              {" "}
              {/* you'll need some kind of wrapper element to not get yelled at */}
              <h2 class="divider">{section.replace(/-/g, " ")}</h2>
              {data[section].map((person) => (
                <Person info={person} /> //or whichever component
              ))}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
