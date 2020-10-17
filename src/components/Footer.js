import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <div class="background pb-5">
      <p class="text-center pb-2">
        A project by{" "}
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
      <p class="text-center">
        Special thanks to my mentor{" "}
        <a
          href="https://sharonzheng.club/"
          class="text-white"
          style={{ textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sharon Zheng
        </a>{" "}
        for helping me bring this project to life!
      </p>
    </div>
  );
}

export default Footer;
