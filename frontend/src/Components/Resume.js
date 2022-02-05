import React, { Component } from "react";
import Slide from "react-reveal";
import Event from './Event';

import './components.css';
import './css/searchbar.css';
import Modal from './EventDesc';
import Axios from 'axios';



class Resume extends Component {
  constructor(props){
    super(props);
    this.state = {
      EventArray: [],
      EventPg: false,
      CurrentEventData: "",
      searchVal:"",
    }

    this.searchBoxRef = React.createRef();

    this.renderEvents = this.renderEvents.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  async componentDidMount(){
      try{
          const eventList = await Axios.get('http://youthfest.tk:8000/events');
          

          this.setState({
              EventArray: eventList.data
          })
      }catch(err){
          console.log(err);
          
      }

  }

  handleClick(currEvent){
    this.setState({
      EventPg: true,
      CurrentEventData: currEvent
    })
    console.log("function called", this.state.EventPg);
    
  }
  handleClose(){
    this.setState({
      EventPg: false,
      CurrentEventData: ""
    })
  }

  handleSearch(){
    this.setState({
        searchVal: this.searchBoxRef.current.value
    })
    
  }


  renderEvents(){
    const allevents = this.state.EventArray;

    const filteredEvents = this.state.EventArray.filter((event) => {
        return Object.values(event).join("").toLowerCase().includes(this.state.searchVal.toLowerCase());
        
    });

    return filteredEvents.map((currEvent) => (
        <div>
          <a href="#" onClick={(e) => {e.preventDefault(); console.log("clicked"); this.handleClick(currEvent)}} >
            <Event key={currEvent._id} eventData={currEvent} />
          </a>
        </div>
          

      
    ))
  }



 


  render() {
    
    return (
      
      <section id="resume">
        <Slide left duration={1300}>
        {/* {this.state.isModalOpen && <Modal onRequestClose={this.toggleModal} ModalData={this.state.ModalData} />} */}
        
        {this.state.EventPg === true ? (
          <Modal currEvent={this.state.CurrentEventData} handleClose={this.handleClose} />
        ):
        (
          <div>
            <div className="row education">
              <div className="twelve columns header-col">
                <h1>
                  <span style={{color:"white"}}>Events</span>
                </h1>
                <form id="searchBar">
                  <input ref={this.searchBoxRef} type="search" 
                  placeholder="Search" 
                  defaultValue={this.state.searchVal} 
                  onChange={this.handleSearch}/>
                </form>

              </div>

              <div className="eleven columns main-col">
                <div className="cards-list">
                  {this.renderEvents()}
                </div>
              </div>
            </div>
          
        </div>
        )
        }
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