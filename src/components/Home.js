import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Person from "./person";
import Header from "./Header";
import Footer from "./Footer";
import Particles from "react-particles-js";

import data from "../data.json";

let curr_num = 0;

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
                <h2
                  class="divider"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={curr_num <= 2 ? curr_num * 200 : 0}
                  data-aos-once="true"
                >
                  {section}
                </h2>
                {data[section].map((person) => {
                  curr_num++;
                  return (
                    <Person
                      info={person}
                      delay={curr_num <= 4 ? curr_num * 200 : 200}
                    />
                  );
                })}
              </>
            ))}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
