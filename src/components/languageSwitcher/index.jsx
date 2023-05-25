import React from "react";
import { useTranslation } from "react-i18next";
import Es from "../../img/Flags/Es";
import Pt from "../../img/Flags/Pt";
import En from "../../img/Flags/En";
import { Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { IoLanguageSharp } from "react-icons/io5";
import "./styleLangbtn.css";
function LanguageSelector() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  function handleChangeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <Dropdown onChange={handleChangeLanguage}>
      <Dropdown.Toggle className="navneon" variant="black" id="dropdown-basic">
        {t("LangOption")} <IoLanguageSharp className="navneon2" />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: "black", borderRadius: "10px" }}>
        <Dropdown.Item
          className="navneon droptoggle"
          onClick={() => i18n.changeLanguage("en")}
        >
          <En /> English
        </Dropdown.Item>
        <Dropdown.Item
          className="navneon droptoggle"
          onClick={() => i18n.changeLanguage("pt")}
        >
          <Pt /> Português
        </Dropdown.Item>
        <Dropdown.Item
          className="navneon droptoggle"
          onClick={() => i18n.changeLanguage("es")}
        >
          <Es /> Español
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;
