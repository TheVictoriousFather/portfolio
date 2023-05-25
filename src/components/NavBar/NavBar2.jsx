import"./StylesModulesNavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../img/VGTVLogo.png";
import { motion, AnimatePresence } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Skils from "../pages/Skils/Skils";
import AboutMe from "../pages/AboutMe/AboutMe";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/Home";
import { BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
import LanguageSelector from "../languageSwitcher/index";
import { useTranslation } from "react-i18next";
function CollapsibleExample() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const { t } = useTranslation();
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg={dropdownOpen ? "black" : "transparent"}
    >
      <Container>
        <Navbar.Brand href="#home">
        <Link to="/"> <img src={logo} alt="Portifolio" width="50" height="30" /></Link>
        </Navbar.Brand>
        <div className="ml-auto">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={
              <BsList
                className={`toggle navneon ${dropdownOpen ? "active" : ""}`}
              />
            }
            onClick={handleToggleClick}
          />
          <LanguageSelector />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link   className="navneon" href="#home"to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
            
           
                {t("navHome")}
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
