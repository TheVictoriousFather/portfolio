import "./StyleModulesHome.css";
import React from "react";
import Rellax from "rellax";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";
import img from "../../../img/Untitled-2.png";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
function Home() {
  // var rellax = new Rellax(".rellax");
  return (
    <section className="section">
      <section id="home" className="parallax  align-itens-center">
        <div className="glow "> </div>

        <div className="overlay"></div>
        <div className="Container1">
          <Row className="mainrow ">
            <Col xs={12} lg={6} md={12} className="order-1 ">
              <div className="mainTitle aling-item-center my-3">
                <h1>
                  <span className="tagline ">Hello I`m vitor</span>
                </h1>
                <h1 className="typing-demo  ">Welcome to my Portfolio</h1>
                <h1>
                  <span className="tagline2">Front-End Developer</span>
                </h1>
                <Link
                  to={
                    "https://www.linkedin.com/in/vitor-oliveira-dos-santos-20a307245"
                  }
                >
                  <button className="cybr-btn1">
                    Linkedin<span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn1__glitch">
                      Linkedin
                    </span>
                    <span aria-hidden className="cybr-btn1__tag">
                      R25
                    </span>
                  </button>
                </Link>
              </div>
            </Col>
            <Col
              xs={12}
              lg={6}
              md={12}
              className="imageslidee mx auto order-sm-2"
            >
              <div className="imageboxsize">
                <div className="imageslide mx-auto"> </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </section>
  );
}
export default Home;
