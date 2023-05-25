import "./StyleModulesSkils.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from "../../../img/Untitled-2.png";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";
import {Container} from "react-bootstrap";
import imgeu3 from "../../../img/imgeu3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import htmlIcon from "../../../img/icons8-html-5.svg";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { Card, Button, Stack } from "react-bootstrap";
import Carousel from "../carousel";

import Glide from "@glidejs/glide";
import "bootstrap/dist/css/bootstrap.min.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import { useTranslation } from "react-i18next";


function Skils() {
  const { t } = useTranslation();
  const [showTitle, setShowTitle] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleSkillhover = (skill) => {
    setSelectedSkill(skill);
  };

  //    const [loopNum, setloopNum]=useState(0);
  //    const[isDeleting, setIsDeleting]=useState(false);
  //    const toRotate=["web Developer","Web Designer","UI/UX Designer"];
  //    const [text, setText] = useState('');
  //    const[delta,setDelta]=useState(300 - Math.random ()*100);
  //     const period = 2000;

  //    useEffect(()=>{
  //     let ticker = setInterval(()=>{
  // tick();
  //     },delta)

  //     return () =>{clearInterval(ticker)};
  //    },[text])

  //    const tick = () =>{
  //     let i=loopNum % toRotate.length;
  //     let fullText = toRotate[i];
  //     let updatedText = isDeleting ? fullText.substring(0, text.length-1) :fullText.substring(0,text.length +1);

  //     setText(updatedText);

  //     if(isDeleting){
  //       setDelta(prevDelta =>prevDelta/2)
  //     }

  //     if(!isDeleting && updatedText === fullText){
  //       setIsDeleting (true);
  //       setDelta(period);
  //     } else if(isDeleting && updatedText ===  ''){
  //       setIsDeleting(false);
  //       setloopNum(loopNum + 1);
  //       setDelta(500);
  //     }
  //    }
  return (
    <section className="section ">
      <section className="parallax1">
        <div className="   glow   ">
          <div className="overlay"></div>
        </div>
      </section>

      <div id="skils" className="Container">
        <div className="row">
          <div className="col-m12 text-center">
            <h1 className="skilsSec">{t("skilstitle")}</h1>

            <Row>
              <Col align-items-center="true">
                <div className="my-3">
                  <table>
                    <tbody>
                      <tr>
                        <td className=" align-middle ">
                          <FaCss3Alt
                            className="d-inline-block"
                            onMouseOver={() => setShowTitle(false)}
                            id="css"
                            onMouseEnter={() =>
                              handleSkillhover(<p>{t("skilstextcss")}</p>)
                            }
                          />
                        </td>
                        <td className=" align-middle ">
                          <FaHtml5
                            className="d-inline-block"
                            onMouseOver={() => setShowTitle(false)}
                            id="html"
                            onMouseEnter={() =>
                              handleSkillhover(<p> {t("skilstexthtml")}</p>)
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className=" align-middle ">
                          <SiJavascript
                            className="d-inline-block"
                            onMouseOver={() => setShowTitle(false)}
                            id="js"
                            onMouseEnter={() =>
                              handleSkillhover(<p> {t("skilstextjs")}</p>)
                            }
                          />
                        </td>
                        <td className=" align-middle ">
                          <FaReact
                            className="d-inline-block"
                            onMouseOver={() => setShowTitle(false)}
                            id="react"
                            onMouseEnter={() =>
                              handleSkillhover(<p> {t("skilstextreact")}</p>)
                            }
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col>
                {showTitle && (
                  <h1 className="title">{t("skilsinstruction")}</h1>
                )}
                <p className="skilsinfo">{selectedSkill}</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <section className="parallax2">
        <div className="   glow   ">
          <div className="overlay"></div>
        </div>
      </section>
    </section>
  );
}
export default Skils;
