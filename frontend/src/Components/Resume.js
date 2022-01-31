import React, { Component } from "react";
import Slide from "react-reveal";
import Event from './Event';
import {Container, Row, Col} from "react-bootstrap";
import './components.css';


class Resume extends Component {
  

  render() {
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Events</span>
              </h1>

            </div>

            <div className="eleven columns main-col">
              <div className="cards-list">
                <Event />
                <Event />
              </div>
            </div>
          </div>
        </Slide>

        
      </section>
    );
  }
}

export default Resume;



/* <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */