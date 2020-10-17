import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../styles/Home.css";
import Person from "./Person";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "./Loading";

import data from "../data.json";

let curr_num = 0;
let icon_pos = "br";
let loaded = false;

export default class Home extends React.Component {
  state = {
    isTop: true,
    loading: true,
  };

  componentDidMount() {
    // console.log(`loading = ${this.state.loading} and loaded = ${loaded}`);
    document.addEventListener("scroll", () => {
      //remove bottom of black gradient if at the bottom of the page (document height minus viewport height minus a bit of buffer)
      const atBottom =
        window.scrollY <
        window.document.body.offsetHeight - window.innerHeight - 100;
      if (atBottom !== this.state.atBottom) {
        this.setState({ atBottom });
      }
    });
    setTimeout(() => {
      this.setState({ loading: false });
      loaded = true;
      // console.log(`loading = ${this.state.loading} and loaded = ${loaded}`);
    }, 2000);
  }

  render() {
    // console.log(
    //   `this.state.loading && !loaded is ${this.state.loading && !loaded}`
    // );
    if (this.state.loading && !loaded) return <Loading />;
    return (
      <>
        <div
          class="overlay"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 15%, rgba(0, 0, 0, 0) 66%, rgba(0, 0, 0, ${
              this.state.atBottom ? "1" : "0"
            }) 100%)`,
          }}
        ></div>
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
                  data-aos-delay={curr_num <= 4 ? curr_num * 200 : 0}
                  data-aos-once="true"
                >
                  {section}
                </h2>
                {data[section].map((person) => {
                  icon_pos =
                    icon_pos === "br" ? (icon_pos = "bl") : (icon_pos = "br");
                  curr_num++;
                  return (
                    <Person
                      info={person}
                      icon_pos={icon_pos}
                      delay={curr_num <= 4 ? curr_num * 200 : 200}
                      margin={randomFloatFromInterval(5, 9, 1)}
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

function randomFloatFromInterval(min, max, fractionDigits) {
  const fractionMultiplier = Math.pow(10, fractionDigits);
  return (
    Math.round((Math.random() * (max - min) + min) * fractionMultiplier) /
    fractionMultiplier
  );
}
