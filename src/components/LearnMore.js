import React from "react";
import Header from "./Header";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.css";

import Quote from "../icons/quote.svg";

let description = [
  "when I look at who I am today, I think of the countless individuals who have shaped my life.",
  "family, friends, teachers, mentors, and strangers - all placed in my life for a reason.",
  "<b>life credits</b> is a place where I can go back to remember my blessings.",
  "to be grateful for the people who I have met.",
  "and to be excited to meet those I have not met yet.",
];

function LearnMore() {
  return (
    <>
      <div class="position-relative vh-100 text-white">
        <Header />
        <div className="pl-4 pr-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <img src={Quote} />
            <div className="larger-margin">
              <span class="quote-text">
                "For I know the plans I have for you,” declares the Lord,
              </span>
              <span class="quote-text">
                "plans to prosper you and not to harm you, plans to give you
                hope and a future."
              </span>
            </div>
            <span className="w-100">
              <img
                src={Quote}
                className="d-block ml-auto"
                style={{ transform: "rotate(180deg)", marginTop: "-1.25rem" }}
              />
            </span>
            <div className="larger-margin mb-5">
              <span class="quote-text">- Jeremiah 29:11</span>
            </div>
          </div>

          <div className="larger-margin">
            {description.map((data, index) => {
              function render_data() {
                return { __html: data };
              }
              return (
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={700 + 150 * index}
                  data-aos-once="true"
                  dangerouslySetInnerHTML={render_data()}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
