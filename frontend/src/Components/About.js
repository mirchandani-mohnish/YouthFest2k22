import React, { Component } from "react";
import Fade from "react-reveal";
import './css/About.css';


class About extends Component {
  render() {
    

    

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row wrapperBox">
            <div className="three columns">
              {/*<a href="https://www.fontspace.com/category/traditional"><img src="https://see.fontimg.com/api/renderfont4/4ByZp/eyJyIjoiZnMiLCJoIjoxNDMsInciOjEyOTcsImZzIjoxMTAsImZnYyI6IiNFODAxMDEiLCJiZ2MiOiIjMzkwMzAzIn0/WUY/mahaputra.png" alt="Traditional fonts"></a> */}
              <img
                className="profile-pic"
                src="/images/AUlogo.png"
                alt="Youth Fest 2k22"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About YouthFest</h2>

              <p>
              Every year, The Youthfest celebrates the student community, allowing us to 
              express and showcase their talents and take part in a joyous 
              celebration of creative expression. We are back with a bang this year, and we have exciting news!<br />
              We are delighted to announce the theme of the Youth Festival 2022, which is: <br />
              India Recalled <br />
              With this theme, we at Ahmedabad University wish to go back to our roots, 
              our traditions and recall our culture. There is a lot to learn from our own history, 
              from ancient civilisations to post-independence. Our diverse cultures give us the opportunity 
              to explore the numerous traditional knowledge systems. Delving deep into our roots will allow 
              us to reinvent and redefine what culture and history mean to us, the youth, now.
              </p>
              <div className="row">
                {/* <div className="columns contact-details">
                   <h2>Contact Details</h2>
                   <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p> 
                </div> */}
                <div className="columns download">
                  <p>
                    {/* <a href="#" className="button">
                      <i className="fa fa-archive"></i>Archives
                    </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
