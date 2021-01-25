import React, { useState } from "react";
import "./style.css";
import { motion, useViewportScroll } from "framer-motion";
import FactCheck from "../FactCheck";
import BurgerEater from "../BurgerEater";
import MemoryGame from "../MemoryGame";

function Projects({ scroll }) {
  const opacity = -Math.pow((scroll / window.innerHeight) * 2 - 0.2, 2) + 1;
  const style = {
    fade: {
      opacity: opacity,
    },
  };

  return (
    <div id="projects">
      <div
        id="cover"
        style={
          scroll / window.innerHeight < 1
            ? { display: "block", }
            : { display: "none", }
        }
      >
        <div className="background" id="coverBack" style={
          scroll / window.innerHeight < .5
            ? 
            { opacity: 1 } : { opacity: opacity + 1}
        }>
          <div className="projectsHead">
            <h1 className="header" style={style.fade}>
              Projects
            </h1>
            <h2 className="subHeader" style={style.fade}>
              These were completed while studying web development and design.
            </h2>
            <p className="text">Keep Scrolling...</p>
          </div>
        </div>
      </div>
      
      <FactCheck scroll={scroll}/>
      <BurgerEater scroll={scroll}/>
      <MemoryGame scroll={scroll}/>
      </div>
  
  );
}

export default Projects;