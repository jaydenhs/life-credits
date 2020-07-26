import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Help from "./icons/Help";
import BackArrow from "./icons/BackArrow";

function Header() {
  return (
    <div class="background pb-5">
      <p class="text-center">
        Template by{" "}
        <a
          href="https://github.com/JaydenHsiao/life-credits"
          class="text-white"
          target="_blank"
        >
          Jayden Hsiao
        </a>
      </p>
    </div>
  );
}

export default Header;
