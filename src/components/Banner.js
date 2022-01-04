import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">SushiStyle</h1>
      <h3>
        <span></span>,
        <span>RAW discussions with extra Wasabi</span>  <span></span> 
        <a className="smoothscroll" href="#about">
          {" "}
          {/* start scrolling */}
        </a>{" "}
        {/* and learn more */}
        <a className="smoothscroll" href="#about">
          {" "}
          BLOG
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
