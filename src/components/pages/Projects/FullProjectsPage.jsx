import { Link } from "react-router-dom";
import React from "react";
import NavBar2 from "../../NavBar/NavBar2";
import  "./StyleModulesProjects.css";
import { useTranslation } from "react-i18next";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Card, Col, Row } from "react-bootstrap";
import img from "../../../img/Screenshot_2.png";
// import  Translation  from "react-i18next";
import img3 from "../../../img/placeholder-coming-soon.png";
import img2 from "../../../img/card2image.png"
const FullProjects = () => {
  const { t } = useTranslation();
  const cardData = [
    {
      title: t("Card1.title"),
      image: img,
      text: t("Card1.text"),
      Url: "http://agv-games.eu5.org/",
      i18nKey: "Card1",
    },
    {
      title: t("Card2.title"),
      image: img2,
      Url: "http://agv-gamess.eu5.org/",
      text: t("Card2.text"),
      i18nKey: "Card2",
    },
    {
      title: t("Card3.title"),
      image: img3,
      text: t("Card3.text"),
      i18nKey: "Card3",
    },
    {
      title: t("Card4.title"),
      image: img3,
      text: t("Card4.text"),
      i18nKey: "Card4",
    },
    {
      title: t("Card5.title"),
      image: img3,
      text: t("Card5.text"),
      i18nKey: "Card5",
    },
    {
      title: t("Card6.title"),
      image: img3,
      text: t("Card6.text"),
      i18nKey: "Card6",
    },
    {
      title: t("Card7.title"),
      image: img3,
      text: t("Card7.text"),
      i18nKey: "Card7",
    },
    {
      title: t("Card8.title"),
      image: img3,
      text: t("Card8.text"),
      i18nKey: "Card8",
    },
    // Adicione quantos objetos quiser para criar mais cards
  ];

  return (
    <section className="section">
      <NavBar2 />
      <div className="Container2">
        <div className="Row">
          <div className=" text-center">
            <h1 className="projSec">{t("Projects")}</h1>

            <div>
              <div className="text-center ">
                <Row
                  xs={1}
                  sm={2}
                  md={3}
                  lg={4}
                  className="mx-auto my-auto g-4 my-3"
                >
                  {cardData.map((card, index) => (
                    <Col key={index}>
                      <Link to={card.Url} style={{ textDecoration: "none" }}>
                        <Card className="c1">
                          <Card.Img variant="top" src={card.image} />
                          <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.text}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullProjects;
