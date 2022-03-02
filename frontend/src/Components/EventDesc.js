import {React, useState, useEffect, Component} from 'react';
import './EventDesc.css';
import Fade from "react-reveal";


class Modal extends Component{
	constructor(props){
		super(props);
		this.state = {
			eventDate: new Date(this.props.currEvent.date)
		};
		this.convertMonth = this.convertMonth.bind(this);
	}

	convertMonth(monthval){
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return months[monthval - 1];
	}
	

	render(){
		return(
			<div>
				<Fade duration={1000}>
				<div className="row">
					<div className="three columns">
					<img
						className="eventpicture"
						src={this.props.currEvent.imageLink ? 
							(this.props.currEvent.imageLink):
							("https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif")}
						alt="EventImage"
					/>
					</div>
					<div className="nine columns main-col" style={{color:"white"}}>
					<h2 style={{color:"white"}}>{this.props.currEvent.eventName}</h2>
					<h4 style={{color:"white"}}>Date and Time: {this.props.currEvent.date}</h4>
					<p>
					{this.props.currEvent.eventDescription}

					</p>

					<div className="row">
						
						<div className="columns download">
						<p>
							<a href="#" onClick={(e) => {e.preventDefault(); this.props.handleClose(); console.log("closed")}} className="button">
							<i className="fa fa-close"></i>Close
							</a>
						</p>
						</div>
					</div>
					</div>

				</div>
				<div className="row">

				
				<div className="twelve columns main-col">
					<p>If the form is not visible for some reason please <a href={this.props.currEvent.eventForm}>click here</a></p>
					<div className="googleFormData">
						<iframe src={this.props.currEvent.eventForm} width={(window.innerWidth) <= 700 ? (toString(window.innerWidth)):("700")} height="5000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
					</div>
					{/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyJQc2oFAU5OWWABwRXE72zLp7DMmhlNAJ3j2c7jQev_PTWA/viewform?embedded=true" width="640" height="986" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
				</div> 
				</div>
				</Fade>

			</div>
		);
	}
}


export default Modal;



// <div>
// 					<h1>Simple Responsive Modal</h1>
// 						<button>Click For Modal</button>
// 						{/* modal */}
// 						<div className="modal-overlay">
// 							<div className="modal">
// 							<a className="close-modal">
// 								<svg viewBox="0 0 20 20">
// 								<path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
// 								</svg>
// 							</a>{/* close modal */}
// 							<div className="modal-content">
								
// 							</div>{/* content */}
// 							</div>{/* modal */}
// 						</div>{/* overlay */}
// 					</div>
