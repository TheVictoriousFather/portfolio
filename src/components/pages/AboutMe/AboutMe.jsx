import "./StyleModulesAboutMe.css";
import React from "react";
import Rellax from "rellax";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";
import imgeu3 from "../../../img/imgeu3.png";
import {Container} from "react-bootstrap";
import Es from "../../../img/Flags/Es";
import En from "../../../img/Flags/En";
import Pt from "../../../img/Flags/Pt";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  // var rellax = new Rellax(".rellax");
  return (
    <section id="aboutme" className="Container ">
      <Row>
        <Col className="order-1">
          <img
            className="imageAboutMe align-item-center my-3"
            src={imgeu3}
            width={400}
            height={650}
          />
        </Col>
        <Col className="order-sm-2">
          <div>
            <h2 className="titleAboutme">{t("aboutMeTitle")}</h2>
            <h1
              className="anim"
              animate={{ scale: 1 }}
              initial={{ scale: 3 }}
              transition={{ duration: 0.5 }}
              whilehover={{ scale: 3 }}
            >
              vitor O.Santos
            </h1>
            <h3 className="title2Aboutme">Front End Developer</h3>
            <p className="textAboutme ">{t("aboutMeText")}</p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
export default AboutMe;
