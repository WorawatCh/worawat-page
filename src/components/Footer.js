import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'

export const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img src={logo} alt='Logo' />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <p>Copyright 2023. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
