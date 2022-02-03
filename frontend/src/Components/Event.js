import React, { Component } from "react";
import {Card} from 'react-bootstrap'
import { ListGroup,ListGroupItem } from "react-bootstrap";
import './components.css';
import { Fade } from "react-reveal";
import Modal from "./EventDesc";

export default class Event extends Component{
    constructor(props){
        super(props);
        
        
    }





    render(){
        return(
            <div>
                <div className="card 1">
                  <div className="card_image"> 
                  <img 
                  src={this.props.eventData.imageLink ? 
                    (this.props.eventData.imageLink):
                    ("https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif")}
                     /> 
                  </div>
                  <div className="card_title title-white">
                  
                    <p>{this.props.eventData.eventName}</p>
                  
                  </div>
                </div>
            </div>
        );
    }
}


/*
https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg
https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif
https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif
https://i.redd.it/b3esnz5ra34y.jpg

*/