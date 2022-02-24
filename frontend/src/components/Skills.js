import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">


      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Payroll</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Training</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Marketing</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>Customer Service</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Communication</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Career Development</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
