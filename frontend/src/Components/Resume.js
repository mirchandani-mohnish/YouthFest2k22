import React, { Component } from "react";
import Slide from "react-reveal";
import Event from './Event';
import {Container, Row, Col} from "react-bootstrap";
import './components.css';
import EventDesc from './EventDesc';
import Axios from 'axios';



class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {
      EventArray: [],
      EventPg: false,
      EventData: "",
      
    }
    
  }
  // constructor(props){
  //   this.state = {
  //     isModalOpen: false,
  //     ModalData: ""
  //   }
  // }


  // toggleModal(ModalData){
  //   const Modalstate = this.state.isModalOpen;
  //   this.setState({
  //     isModalOpen: !Modalstate,
  //     ModalData: ModalData
  //   })
  // }
  async componentDidMount(){
      try{
          const eventList = await Axios.get("http://localhost:8000/events");
          

          this.setState({
              EventArray: eventList
          })
      }catch(err){
          console.log(err);
          
      }

  }

  
  renderEvents(){
    const EventList = this.state.EventArray;
    return EventList.map((currEvent) => (
      <>
          
          <Event eventData={currEvent} />
          
      </>
      
    ))
  }


  render() {
    return (
      <section id="resume">
        {/* {this.state.isModalOpen && <Modal onRequestClose={this.toggleModal} ModalData={this.state.ModalData} />} */}
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