import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import './css/About.css';

class Contact extends Component {
  render() {
    

    

    return (
      <section id="contact">
        <div className="contactWrapper">
          <Fade bottom duration={1000}>
          
            <div className="row section-head">
              <div className="two columns header-col">
                <h1>
                  Contact Us
                </h1>
              </div>

              
            </div>
          </Fade>

          <div className="row">
            <Slide left duration={1000}>
              <div className="eight columns">
                <form action="" method="post" id="contactForm" name="contactForm">
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                      ></textarea>
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning"> Error</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
                </div>
              </div>
            </Slide>

            <Slide right duration={1000}>
              <aside className="four columns footer-widgets">
                
                <div className="widget widget_tweets">
                  <h4 className="widget-title">Youth Fest</h4>
                  <ul id="twitter">
                    <li>
                      <span>
                        <a href="/">Home</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="/#about">About</a>
                      </span>
                      
                    </li>
                    <li>
                      <span>
                        <a href="/">Events</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="/">Archives</a>
                      </span>
                    </li>
                  </ul>

                  <h4 className="widget-title">Contact</h4>
                  <ul id="twitter">
                    <li>
                      <span>
                        <a href="https://wa.link/f67tba">Palak Binaykia</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <a href="https://wa.me/qr/HL3PHGNU747BO1">Akanksha Tated</a>
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <div className="widget widget_contact">
                  <h4>Site Resources</h4>
                  <p className="address">
                    If you find some issues or bugs with the site please open an issue here. 
                  </p>
                </div> */}
              </aside>
            </Slide>
          </div>
        </div>  
      </section>
    );
  }
}

export default Contact;
