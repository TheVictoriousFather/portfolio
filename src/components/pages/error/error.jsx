import { Row, Col } from "react-bootstrap";
import "./error.css"
import LanguageSelector from "../../languageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Error() {
    const { t } = useTranslation();
  return (
    <Row className="bg" style={{ height: "100vh" }}>
      <Col
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div>
          <h1 className="error">Lost! 404;</h1>
          <p  className="error1">{t("error1")}<Link to="/"><a className="errorbtn">{t("errorbtn")}</a></Link></p>
        </div>
      </Col>
    </Row>
  );
}

export default Error;
