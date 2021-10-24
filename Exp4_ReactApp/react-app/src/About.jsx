import React from "react";
import Web from './images/business.png';
import {NavLink} from 'react-router-dom';
import Common from "./Common"

const About = () => {
  return (
    <>
      <Common 
        name="Visualizer Comming Soon"
        img={Web}
        btnName="Contact Us"
        visited="./contact"
      />
    </>
  );
};

export default About;
