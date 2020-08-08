import React, { useState, useRef } from "react";
import Chevron from "../icons/Chevron";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../styles/Person.css";

import Heart from "../icons/Heart";

function Person(props) {
  const { name, description, role, icon } = props.info;
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

  let heart_icon = (
    <Heart className="position-absolute icon_right" height={30} />
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${props.delay}`}
      data-aos-once="true"
    >
      <div className="accordion__section text-center mb-5">
        <button
          className={`accordion ${setActive} mb-2`}
          onClick={toggleAccordion}
        >
          <h1>{name}</h1>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h2 className="accordion__h2">{role}</h2>
            <Chevron className={`${setRotate}`} height={18} fill={"#cdcdcd"} />
          </div>
          {/* <Heart className="position-absolute icon_right" height={30} /> */}
          {icon === "heart" && heart_icon}
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content d-flex justify-content-center"
        >
          <p style={{ transition: "height 0.25s linear" }} className="w-75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Person;
