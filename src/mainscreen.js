import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Person from "./person";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles-js";

let information = [
  {
    divider: "birth",
  },
  {
    name: "Diana Tai",
    role: "mother",
    description: "insert description of what the person did here",
  },
  {
    name: "Jerry Hsiao",
    role: "father",
    description: "insert description of what the person did here",
  },
  {
    divider: "elementary school",
  },
  {
    name: "Norah Langton",
    role: "piano teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Linda Penrice",
    role: "first grade teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Amy Hall",
    role: "piano teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Sandy Grigsby",
    role: "fifth grade teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Jeremy Kuikman",
    role: "sixth grade teacher",
    description: "insert description of what the person did here",
  },
  {
    divider: "university",
  },
  {
    name: "Judy Zhong",
    role: "systems design mentor",
    description: "insert description of what the person did here",
  },
  {
    name: "Daniel Kwon",
    role: "systems design mentor",
    description: "insert description of what the person did here",
  },
  {
    name: "Sharon Zheng",
    role: "tech+ mentor",
    description: "insert description of what the person did here",
  },
];

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
          {information.map((value, index) => {
            if (information[index].hasOwnProperty("name")) {
              return <Person info={information[index]} />;
            } else {
              return <h2 class="divider">{information[index].divider}</h2>;
            }
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
