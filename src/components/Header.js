import React from "react";
import "../App.css";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.css";
import Help from "../icons/Help";
import BackArrow from "../icons/BackArrow";
import { Link, Switch, Route, withRouter } from "react-router-dom";

function Header({ location }) {
  return (
    <>
      <div class="d-flex flex-row p-4 background" style={{ zIndex: 15 }}>
        <Switch location={location}>
          <Route
            path="/life-credits/home"
            component={() => (
              // <a href="https://jaydenhsiao.me/" className="top-icon">
              //   <BackArrow height="23px" />
              // </a>
              <>
                <Link to="/life-credits/" className="top-icon">
                  <BackArrow height="23px" />
                </Link>
                <Link
                  to="/life-credits/learn_more"
                  className="ml-auto top-icon"
                >
                  <Help height="29px" />
                </Link>
              </>
            )}
          />
          <Route
            path="/life-credits/learn_more"
            component={() => (
              <Link to="/life-credits/home" className="top-icon">
                <BackArrow height="23px" />
              </Link>
            )}
          />
        </Switch>
      </div>
    </>
  );
}

export default withRouter(Header);
