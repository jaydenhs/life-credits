import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import MainScreen from "./mainscreen";
import "./App.css";

import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: undefined,
      done: undefined,
    };
  }
  //keep loading bar (even if it's manually with timeouts)
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          this.setState({ loading: true });
        });
    }, 2000);
  }
  render() {
    return (
      <div>
        {!this.state.loading ? (
          <div className={"d-flex align-items-center background vh-100 p-4"}>
            <div>
              <h1 style={{ fontSize: "5rem", lineHeight: "100%" }}>
                LIFE CREDITS
              </h1>
              {/* {!this.state.loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )} */}
              <div id="prbar" className="mt-4">
                <div id="prpos"></div>
              </div>
            </div>
          </div>
        ) : (
          <MainScreen />
        )}
      </div>
    );
  }
}
