import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import "../styles/Container.css";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import Loading from "./Loading";
import Home from "./Home";
import LearnMore from "./LearnMore";
import Particles from "react-tsparticles";

function Container({ location }) {
  return (
    <Wrapper>
      <div class="position-relative h-100 overflow-hidden">
        <TransitionGroup className="transition-group" component={null}>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 500, exit: 500 }}
            classNames="fade"
          >
            <div
              className="route-section"
              // style={{ backgroundColor: "#1a1a1a" }}
            >
              <Switch location={location}>
                {/* <Route exact path="/life-credits" component={Loading} /> */}
                <Route exact path="/life-credits" component={Home} />
                <Route path="/life-credits/learn_more" component={LearnMore} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>

        <div id="particles-js">
          <Particles
            canvasClassName="full-page-container"
            options={{
              fpsLimit: 30,
              particles: {
                color: {
                  value: "#cdcdcd",
                },
                move: {
                  direction: "none",
                  enable: true,
                  speed: 0.5,
                },
                number: {
                  value: 40,
                  // density: {
                  //   enable: true,
                  //   value_area: 2000,
                  // },
                },
                size: {
                  value: 6,
                  random: true,
                  // anim: {
                  //   enable: true,
                  //   speed: 2,
                  //   size_min: 2,
                  //   sync: false,
                  // },
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
