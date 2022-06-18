import React, { Component } from "react";
import Fade from "react-reveal";
import "./css/About.css";

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
                The Youth Fest is a vibrant platform for students of the
                University to showcase their talent, to sharpen their skills, to
                creatively express themselves, to mingle, to collaborate and of
                course to build lifelong memories. The Youth Fest is back with a
                bang this year, and we have some very exciting news!
                <br />
                We are delighted to announce the theme of Youth Fest 2022, which
                is: "India Recalled" With this theme, we at Ahmedabad University
                wish to go back to our roots, our traditions and revisit our
                culture. There is a lot to learn from our own history; from
                ancient civilisations to post- independence era. The diversity
                in our culture gives us the opportunity to explore both;
                traditional and contemporary knowledge systems.
                <br />
                Delving deep into our roots will allow us to reinvent and
                redefine what culture and history mean to us.We invite you on
                board to experience an exciting mix of events, competitions and
                performances!
                <br />
                <b>
                  Watch out for our emails and follow our Instagram for more
                  updates!
                </b>
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
