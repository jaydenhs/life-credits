import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Loading from "./components/Loading";
import Home from "./components/Home";
import LearnMore from "./components/LearnMore";

import Particles from "react-particles-js";

function Container({ location }) {
  return (
    <Wrapper>
      <div class="position-relative">
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 500, exit: 500 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/life-credits" component={Loading} />
                <Route path="/life-credits/home" component={Home} />
                <Route path="/life-credits/learn_more" component={LearnMore} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>

        <div id="particles-js">
          <Particles
            canvasClassName="full-page-container"
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 2000,
                  },
                },
                line_linked: {
                  enable: true,
                  opacity: 0.03,
                },
                move: {
                  direction: "down",
                  speed: 0.1,
                },
                size: {
                  value: 6,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 2,
                    sync: false,
                  },
                },
                opacity: {
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.06,
                  },
                },
              },
              retina_detect: true,
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);
