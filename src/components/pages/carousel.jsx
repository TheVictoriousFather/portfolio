import React, { useState, useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Card } from "react-bootstrap";
import img from "../../img/Screenshot_2.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/translation";
import img3 from "../../img/placeholder-coming-soon.png";
import img2 from "../../img/card2image.png"
import { Link } from "react-router-dom";

function Slider() {
  const { t } = useTranslation();
  const [glideSlider, setGlideSlider] = useState(null);

  useEffect(() => {
    if (glideSlider) {
      glideSlider.destroy();
    }

    const newGlideSlider = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 3,
      focusAt: "center",
      gap: 30,
      breakpoints: {
        768: {
          perView: 2,
        },
        576: {
          perView: 1,
        },
      },
    });

    newGlideSlider.mount();
    setGlideSlider(newGlideSlider);
  }, [i18n.language]);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <Link
              to={"http://agv-games.eu5.org/"}
              style={{ textDecoration: "none" }}
            >
              <Card bg="black" className=" ">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{t("ProjTitle1")}</Card.Title>
                  <Card.Text>{t("ProjText1")}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </li>
          <li className="glide__slide">
          <Link
              to={"http://agv-gamess.eu5.org/"}
              style={{ textDecoration: "none" }}
            >
            <Card bg="black" className=" ">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>{t("ProjTitle2")}</Card.Title>
                <Card.Text>{t("ProjText2")}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </li>
          <li className="glide__slide">
            <Card bg="black" className=" ">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>{t("ProjTitle3")}</Card.Title>
                <Card.Text>{t("ProjText3")}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
