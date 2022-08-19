import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./header.css";
import Img1 from "./header-animal-1.png";
import Img2 from "./header-animal-2.png";
import Img3 from "./header-animal-3.png";
import CustomButton from "../CustomButton/CustomButton";
import SocIcons from '../SocIcons/SocIcons'

import { useTranslation } from "react-i18next";

export default function Header() {
  let [lang] = useTranslation()
  let [resize, setResize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setResize(window.innerWidth);
    console.log(resize);
  });

  const array = [Img1, Img2, Img3];
  let randomIndex = parseInt(Math.random() * array.length);
  let img = array[randomIndex];

  const styleTemplate = {
    width: "0",
  };

  if (randomIndex === 0) {
    if (resize <= 1200 && resize > 992) {
      styleTemplate.width = "33vw";
    } else if (resize <= 900) {
      styleTemplate.width = "37vw";
    } else {
      styleTemplate.width = "27vw";
    }
    styleTemplate.marginBottom = '0';
    styleTemplate.marginRight = '5%'
  } else if (randomIndex === 1) {
    if (resize <= 1200 && resize > 992) {
      styleTemplate.width = "43vw";
    } else if (resize <= 900) {
      styleTemplate.width = "48vw";
    } else {
      styleTemplate.width = "40vw";
    }
    styleTemplate.marginBottom = "12%"
    styleTemplate.marginRight = '0'
  } else if (randomIndex === 2) {
    if (resize <= 992) {
      styleTemplate.width = "50vw";
    } else {
      styleTemplate.width = "45vw";
    }
    styleTemplate.marginBottom = '0';
    styleTemplate.marginRight = '0'
  }

  return (
    <>
      <div className="header">
        <div className="header-navbar d-none d-lg-flex justify-content-center">
          <Nav className="w-100 justify-content-evenly" data-aos='fade-down'>
            <Link className="nav-link" to="/">{lang('navbar.home')}</Link>
            <Link className="nav-link" to="/about">{lang('navbar.aboutUs')}</Link>
            <Link className="nav-link" to="/news">{lang('navbar.news')}</Link>
            <Link className="nav-link" to="/multimedia">{lang('navbar.multimedia')}</Link>
            <Link className="nav-link" to="/animals">{lang('navbar.ourAnimals')}</Link>
            <Link className="nav-link" to="/shop">{lang('navbar.shop')}</Link>
          </Nav>
        </div>

        <div className="header-content">
          <div className="ms-5">
            <div className="header-title" data-aos='fade-right'>{lang('header.welcome1')}</div>
            <div className="header-title" data-aos='fade-right'>{lang('header.welcome2')}</div>
            <CustomButton btnName={lang('customBtn.ticket')} btnWhite='true' link='#ticketInfo' />
          </div>

          <div className="header-animal d-none d-lg-flex align-items-end justify-content-end" style={styleTemplate} data-aos='fade-left'>
            <img src={img} alt="" />
          </div>
        </div>

        <div className="position-absolute bottom-0" style={{ zIndex: '3', width: '100%' }}>
          <SocIcons />
        </div>

        <Carousel
          className="header-slider"
          pause="false"
          fade="true"
          keyboard={false}
          controls={false}
          indicators={false}
        >
          <Carousel.Item className="slide1" interval={3000}></Carousel.Item>
          <Carousel.Item className="slide2" interval={3000}></Carousel.Item>
          <Carousel.Item className="slide3" interval={3000}></Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
