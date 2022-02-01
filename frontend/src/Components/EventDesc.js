import {React, useState, useEffect, Component} from 'react';
import './EventDesc.css';
import Fade from "react-reveal";


class Modal extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		};
	}



	render(){
		return(
			<div>
				<Fade duration={1000}>
				<div className="row">
					<div className="three columns">
					<img
						className="eventpicture"
						src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif"
						alt="EventImage"
					/>
					</div>
					<div className="nine columns main-col">
					<h2>About YouthFest</h2>

					<p>
					t is a long established fact that a r
					eader will be distracted by the readable 
					content of a page when looking at its layout. 
					The point of using Lorem Ipsum is that it has 
					a more-or-less normal distribution of letters,
					 as opposed to using 'Content here, content here
					 ', making it look like readable English. Many d
					 esktop publishing packages and web page editors now use Lore
					 m Ipsum as their default model text, and a search for 'lorem ips
					 um' will uncover many web sites still in their infancy. Various ver
					 sions have evolved over the years, 
					sometimes by accident, sometimes on purpose (injected humour and the like).

						Where does it come from?
						Contrary to popular belief, Lorem 
						Ipsum is not simply random text. It has r
						oots in a piece of classical Latin litera
						ture from 45 BC, making it over 2000 years
						old. Richard McClintock, a Latin professo
						r at Hampden-Sydney College in Virginia, loo
						ked up one of the more obscure Latin words, conse
						ctetur, from a Lorem Ipsum passage, and going thr
						ough the cites of the word in classical literature
						, discovered the undoubtable source. Lorem Ipsum co
						mes from sections 1.10.32 and 1.10.33 of "de Finibu
						s Bonorum et Malorum" (The Extremes of Good and Evil
						) by Cicero, written in 45 BC. This book is a treatis
						e on the theory of ethics, very popular during the Re
						naissance. The first line of Lorem Ipsum, "Lorem ipsu
						m dolor sit amet..", comes from a line in section 1.10
						.32.


						The standard chunk of Lorem Ipsum used since
						the 1500s is reproduced below for those int
						erested. Sections 1.10.32 and 1.10.33 from "
						de Finibus Bonorum et Malorum" by Cicero are 
						also reproduced in their exact original form,
						accompanied by English versions from the 191
						4 translation by H. Rackham.

						Where can I get some?
						There are many variations of p
						assages of Lorem Ipsum available, b
						ut the majority have suffered alteration in some form, by injected humour, or random

						ised words which don't look even slightly believable. If you are going to use a pass
						age of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in t
						he middle of text. All the Lorem Ipsum generators on the Internet tend to repeat pred
						efined chunks as necessary, making this the first true generator on the Internet. It 
						uses a dictionary of over 200 Latin words, combined with a handful of model sentence 
						structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
						is therefore always free from repetition, injected humour, or non-characteristic words etc.

						5
							paragraphs
							words
							bytes
							lists
							Start with 'Lorem
						ipsum dolor sit amet...'

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