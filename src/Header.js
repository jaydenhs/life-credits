import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Help from "./icons/Help";
import BackArrow from "./icons/BackArrow";

function Header() {
  return (
    <div class="d-flex flex-row p-4 background">
      <BackArrow height="23px" />
      <Help className="ml-auto" height="29px" />
    </div>
  );
}

export default Header;
