import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Tablet from '../Tablet/Tablet'
import NewsImg from './news_1.jpg'

import { useTranslation } from 'react-i18next'

export default function News() {
  let [lang] = useTranslation()
  return (
    <Container id='news' className='customContainer'>
      <Tablet title={lang('tablet.news')} />

      <Row className='mt-5'>
        <Col xs='6' lg='3' className='mb-3' data-aos='fade-up'>
          <Card border='light'>
            <Card.Img style={{ borderRadius: '10px' }} variant="top" src={NewsImg} />
            <Card.Title className='cardTitle mt-2'>Lorem ipsum</Card.Title>
            <Card.Text className='cardText'>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor</Card.Text>
          </Card>
        </Col>
        <Col xs='6' lg='3' className='mb-3' data-aos='fade-up'>
          <Card border='light'>
            <Card.Img style={{ borderRadius: '10px' }} variant="top" src={NewsImg} />
            <Card.Title className='cardTitle mt-2'>Lorem ipsum</Card.Title>
            <Card.Text className='cardText'>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor</Card.Text>
          </Card>
        </Col>
        <Col xs='6' lg='3' className='mb-3' data-aos='fade-up'>
          <Card border='light'>
            <Card.Img style={{ borderRadius: '10px' }} variant="top" src={NewsImg} />
            <Card.Title className='cardTitle mt-2'>Lorem ipsum</Card.Title>
            <Card.Text className='cardText'>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor</Card.Text>
          </Card>
        </Col>
        <Col xs='6' lg='3' className='mb-3' data-aos='fade-up'>
          <Card border='light'>
            <Card.Img style={{ borderRadius: '10px' }} variant="top" src={NewsImg} />
            <Card.Title className='cardTitle mt-2'>Lorem ipsum</Card.Title>
            <Card.Text className='cardText'>Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
