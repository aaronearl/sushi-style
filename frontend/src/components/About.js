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
        <h2>About Me</h2>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
              <span>74thstreet@gmail.com</span>
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
