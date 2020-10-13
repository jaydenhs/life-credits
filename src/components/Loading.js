import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../styles/Loading.css";

// import { Redirect } from "react-router-dom";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // redirect: false,
      display: "flex",
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ display: "none" });
  //   }, 2000);
  // }

  render() {
    // if (this.state.redirect) {
    //   return <Redirect push to="/life-credits" />;
    // }
    return (
      <div className="d-flex align-items-center vh-100 p-4">
        <div
          className="reveal"
          // data-aos="fade-up"
          // data-aos-duration="1500"
          // data-aos-delay="0"
          // data-aos-once="true"
        >
          <h1 style={{ fontSize: "5rem", lineHeight: "100%" }}>LIFE CREDITS</h1>
          <div id="prbar" className="mt-4">
            <div id="prpos"></div>
          </div>
        </div>
      </div>
    );
  }
}
