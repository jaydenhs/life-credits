import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <div class="background pb-5">
      <p class="text-center">
        Template by{" "}
        <a
          href="https://github.com/JaydenHsiao/life-credits"
          class="text-white"
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Jayden Hsiao
        </a>
      </p>
    </div>
  );
}

export default Header;
