import React from "react";
import Header from "./Header";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.css";

import Quote from "../icons/quote.svg";

function LearnMore() {
  return (
    <>
      <div class="position-relative vh-100 text-white">
        <Header />
        <div className="pl-4 pr-4">
          <img src={Quote} />
          <div className="larger-margin">
            <span class="quote-text">
              "For I know the plans I have for you,” declares the Lord,
            </span>
            <span class="quote-text">
              "plans to prosper you and not to harm you, plans to give you hope
              and a future."
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

          <div className="larger-margin">
            {" "}
            <p>
              when I look at who I am today, I think of the countless
              individuals who have shaped my life.
            </p>
            <p>
              family, friends, teachers, mentors, and strangers - all placed in
              my life for a reason.
            </p>
            <p>
              <b>life credits</b> is a place where I can go back to remember my
              blessings.
            </p>
            <p>to be grateful for the people who I have met.</p>
            <p>and to be excited to meet those I have not met yet.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMore;
