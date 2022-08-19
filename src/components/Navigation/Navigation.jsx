import React from "react";
import { Nav, Navbar, NavLink, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./navigation.css";
import Flag from "./flag";
import Logo from "./logo.png"

import { useTranslation } from "react-i18next";

export default function Navigation() {
  let [lang] = useTranslation();

  return (
      <Navbar
        collapseOnSelect
        className="navbar-css"
        variant="dark"
        expand="xl"
        sticky="top"
      >
        <Container>
          <Navbar.Brand className="logoBlock">
            <Link to='/'><img src={Logo} alt="logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle
            border="light"
            aria-controls="responsive-navbar-nav"
          ></Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="w-100 justify-content-start">
              <Link className="nav-link" to="/about">{lang('navbar.aboutUs')}</Link>
              <Link className="nav-link" to="/news">{lang('navbar.news')}</Link>
              <Link className="nav-link" to="/multimedia">{lang('navbar.multimedia')}</Link>
              <Link className="nav-link" to="/animals">{lang('navbar.ourAnimals')}</Link>
              <Link className="nav-link" to="/shop">{lang('navbar.shop')}</Link>
            </Nav>
            <Flag />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
