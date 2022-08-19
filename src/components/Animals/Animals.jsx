import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './animals.css'
import AnimalImg from './animal.jpg'

export default function Animals() {
   return (
      <div className='animals customContainer'>
         <Container>
            <Row className='justify-content-center justify-content-md-normal px-5'>
               <Col xs={7} md={6} lg={3} data-aos='fade-up'><img src={AnimalImg} className='rounded-circle w-100 mb-3' alt="" /></Col>
               <Col xs={7} md={6} lg={3} data-aos='fade-up'><img src={AnimalImg} className='rounded-circle w-100 mb-3' alt="" /></Col>
               <Col xs={7} md={6} lg={3} data-aos='fade-up'><img src={AnimalImg} className='rounded-circle w-100 mb-3' alt="" /></Col>
               <Col xs={7} md={6} lg={3} data-aos='fade-up'><img src={AnimalImg} className='rounded-circle w-100 mb-3' alt="" /></Col>
            </Row>
         </Container>
      </div>
   )
}
