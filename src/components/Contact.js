import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from "../assets/img/contact-img.svg";
import { Github, FiletypePdf,Facebook,Instagram } from 'react-bootstrap-icons';

export const Contact = () => {
  return (
    <section className='contact' id='contact'>
    <Container >
        <Row className='align-item-center'>
            <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us"/>
            </Col>
            <Col size={12} md={6} className='text-center'>
                <h2>My Contact</h2>
                <Row className='btn-contact'>
                    <Col size={12} md={6}>
                        <button onClick={() => window.open("https://github.com/WorawatCh")}>Github <Github  size={35}/></button>
                    </Col>
                    <Col size={12} md={6}>
                        <button onClick={() => window.open("https://drive.google.com/file/d/1u1Ktu29dtN-zBzzrdtnRDfw0RnTLnyWn/view?usp=sharing")}>Resume <FiletypePdf  size={35}/></button>
                    </Col>
                    <Col size={12} md={6}>
                        <button onClick={() => window.open("https://www.facebook.com/rockey.cruzer/")}>Facebook <Facebook  size={35}/></button>
                    </Col>
                    <Col size={12} md={6}>
                        <button onClick={() => window.open("https://www.instagram.com/it_7a.m/")}>Instagram <Instagram  size={35}/></button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</section>
  )
}
