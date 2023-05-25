import React from "react";
import { useState,Suspense,lazy } from 'react'
import NavBar from "../NavBar/NavBar";
 import Home from "./Home/Home";
 import Skils from "./Skils/Skils";
 import Projects from "./Projects/Projects";
 import AboutMe from "./AboutMe/AboutMe";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
    <NavBar />
     <Home />
     <AboutMe /> 
     <Skils />
    <Projects />
    </div>
  );
}
export default HomePage;
