import React from 'react'
import {  Col, Container, Row  } from 'react-bootstrap';

export const Info = () => {

  return (
    <section className='info' id='info'>
        <Container>
            <Row>
                <Col>
                <div className='info-box'>
                    <h2>
                        Information
                    </h2>
                <Row>
                        <Col md={6} sm={12}>
                            <p className='headline'><b>Name</b> :</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p >Worawat Chueajedton</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p className='headline'><b>Nick Name</b> :</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>Aomsin</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p className='headline'><b>Birthday</b> :</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>12 January 1998</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p className='headline'><b>Age</b> :</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>{(new Date().getFullYear()) - 1998}</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p className='headline'><b>Education</b> :</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>Bachelor degree in department of Software engineer, Engineering faculty, KASETSART University</p>
                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
