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
import { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import LanguageSelector from "../languageSwitcher/index";
import { useTranslation } from "react-i18next";
function CollapsibleExample() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [navLinks, setNavLinks] = useState([
    { id: "home", label: "Seção 1" },
    { id: "aboutme", label: "Seção 2" },
    { id: "skils", label: "Seção 3" },
    { id: "Projects", label: "Seção 4" },
  ]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const navLinkElements = document.querySelectorAll(".nav-link");
      const navLinkTargets = Array.from(navLinkElements).map((element) => {
        const targetId = element.getAttribute("href");
        return {
          id: targetId.substring(1),
          top: document.querySelector(targetId).offsetTop - 50,
          bottom:
            document.querySelector(targetId).offsetTop +
            document.querySelector(targetId).clientHeight -
            50,
          element: element,
        };
      });
      const activeTarget = navLinkTargets.find(
        (target) => scrollPos >= target.top && scrollPos < target.bottom
      );
      if (activeTarget) {
        navLinkTargets.forEach((target) =>
          target.element.classList.remove("active")
        );
        activeTarget.element.classList.add("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg"  bg={dropdownOpen ? "black" : "transparent"}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Portifolio" width="50" height="30" />
        </Navbar.Brand>
        <div className="ml-auto">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={<BsList  className={`toggle navneon ${dropdownOpen ? "active" : ""}`} />}
            onClick={handleToggleClick}
          />
          <LanguageSelector />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="navneon" href="#home">
              {t("navHome")}
            </Nav.Link>
            <Nav.Link className="navneon" href="#aboutme">
              {t("navAboutMe")}
            </Nav.Link>
            <Nav.Link className="navneon" href="#skils">
              {t("navSkils")}
            </Nav.Link>
            <Nav.Link className="navneon" href="#Projects">
              {t("navProjects")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
