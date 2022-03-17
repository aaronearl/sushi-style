import React from "react";
// import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Sushi Style</h2>
        <p>
A rank and realistic depiction of the facts, devoid of politeness, a truthfully yet blunt point of view; that is the Blog "Sushi Style."   Discussing the obvious to the unknown with a flair for the provocative explanation of the facts.  

        </p>
        <div className="row">
          <div className="columns contact-details">
            {/* <h2>Contact Details</h2> */}
            <p className="address">
              <span>SushiStyle</span>
              <br />
              <span>
                {/* <br /> Los Angeles, CA 90044 US */}
              </span>
              <br />
              {/* <span>(323)816-6163</span> */}
              <br />
              {/* <span>74thstreet@gmail.com</span> */}
            </p>
          </div>
          {/* <div className="columns download">
            <p>
              <a href="candacecollins.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
