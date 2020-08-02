import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Person from "./person";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles-js";

import data from "./data.json";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div class="overlay"></div>
        <div class="position-relative h-100 text-white">
          <Header />
          <div class="mr-4 ml-4">
            {Object.keys(data).map((section) => (
              <>
                {" "}
                <h2 class="divider">{section}</h2>
                {data[section].map((person) => (
                  <Person info={person} />
                ))}
              </>
            ))}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
