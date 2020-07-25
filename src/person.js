import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./Accordion.css";

// export default class Person extends React.Component {
//   const [setActive, setActiveState] = useState("");
//   const [setHeight, setHeightState] = useState("0px");

//   const content = useRef(null);

//   function toggleAccordion() {
//     setActiveState(setActive === "" ? "active" : "");
//     setHeightState(
//       setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
//     );
//   }
//   render() {
//     const { name, description, role } = this.props.info;
//     return (
//       <div class="text-center mb-5 accordion-content">
//         <div onClick={(e) => this.togglePanel(e)} className="header">
//           <h1>{name}</h1>
//           <h2>{role}</h2>
//         </div>
//         {this.state.open ? (
//           <p style={{ transition: "height 0.25s linear" }}>{description}</p>
//         ) : null}
//       </div>
//     );
//   }
// }

function Person(props) {
  const { name, description, role } = props.info;
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section text-center mb-5">
      <button
        className={`accordion ${setActive} mb-2`}
        onClick={toggleAccordion}
      >
        <h1>{name}</h1>
        <div className="d-flex flex-row justify-content-center">
          <h2>{role}</h2>
          <Chevron className={`${setRotate}`} width={10} fill={"#cdcdcd"} />
        </div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <p style={{ transition: "height 0.25s linear" }}>{description}</p>
      </div>
    </div>
  );
}

export default Person;
