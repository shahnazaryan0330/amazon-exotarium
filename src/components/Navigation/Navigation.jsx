import React from "react";
import { Nav, Navbar, NavLink, Container } from "react-bootstrap";
import "./navigation.css";
import Flag from "./flag";
import Logo from "./logo.png"

import { useTranslation } from "react-i18next";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from "../../App";
// import AboutUs from "../About/AboutUs";

export default function Navigation() {
  let [lang] = useTranslation();

  return (
    // <Router>
      <Navbar
        collapseOnSelect
        className="navbar-css"
        variant="dark"
        expand="xl"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="logoBlock" href="/home"><img src={Logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle
            border="light"
            aria-controls="responsive-navbar-nav"
          ></Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="w-100 justify-content-start">
              <NavLink href="/amazon-exotarium/about">{lang('navbar.aboutUs')}</NavLink>
              <NavLink href="/news">{lang('navbar.news')}</NavLink>
              <NavLink href="/multimedia">{lang('navbar.multimedia')}</NavLink>
              <NavLink href="/animals">{lang('navbar.ourAnimals')}</NavLink>
              <NavLink href="/shop">{lang('navbar.shop')}</NavLink>
            </Nav>
            <Flag />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // {/* <Routes>
    //     <Route path='/home' element={<App />} />
    //     <Route path='/about' element={<AboutUs />} />
    //   </Routes>
    // </Router> */}
  );
}
