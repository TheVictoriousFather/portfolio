import"./StyleModulesProjects.css";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";
import Carousel from "../carousel";
import Glide from "@glidejs/glide";
import "bootstrap/dist/css/bootstrap.min.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Projects() {
  const { t } = useTranslation();
  return (
    <section className="section">
      <div id="Projects" className="Container">
        <div className="Row">
          <div className=" text-center">
            <h1 className="projSec">{t("Projects")}</h1>

            <div>
              <div className="text-center">
                <Row className="mx-auto my-auto">
                  <Col className="mx-auto">
                    <Carousel />
                  </Col>
                </Row>
                <h2 className="projSec">{t("Swipe to the side")}</h2>
                <Link to={`/FullProjects`}>
                  {" "}
                  <button className="cybr-btn1 aling-item-center my-3">
                    {t("see more")}
                    <span aria-hidden>_</span>
                    <span aria-hidden className="cybr-btn1__glitch">
                      {t("see more")}
                    </span>
                    <span aria-hidden className="cybr-btn1__tag">
                      R25
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projects;
