import React from 'react'
import {  Col, Container, Row  } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import ts from '../assets/img/ts.png'
import java from '../assets/img/java.png'
import python from '../assets/img/python.png'
import angular from '../assets/img/angular.png'
import vue from '../assets/img/vue.png'
import react from '../assets/img/react.png'
import github from '../assets/img/github.png'
import gitlab from '../assets/img/gitlab.png'
import bitbucket from '../assets/img/bitbucket.png'

 export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

   return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Skills
                    </h2>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                    <Carousel responsive={responsive} infinite={true} className='skill-slider mt-5'>
                        <div className='item'>
                            <img src={html} alt="Html"/>
                            <h5>Html</h5>
                            <img src={ts} alt="TypeScript"/>
                            <h5>TypeScript</h5>
                        </div>
                        <div className='item'>
                            <img src={css} alt="Css"/>
                            <h5>Css</h5>
                            <img src={java} alt="Java"/>
                            <h5>Java</h5>
                        </div>
                        <div className='item'>
                            <img src={js} alt="Javascript" />
                            <h5>Javascript</h5>
                            <img src={python} alt="Python" />
                            <h5>Python</h5>
                        </div>
                        <div className='item'>
                            <img src={vue} alt="Vue" />
                            <h5>Vue</h5>
                            <img src={github} alt="Github" />
                            <h5>Github</h5>
                        </div>
                        <div className='item'>
                            <img src={react} alt="React" />
                            <h5>React</h5>
                            <img src={gitlab} alt="Gitlab" />
                            <h5>Gitlab</h5>
                        </div>
                        <div className='item'>
                            <img src={angular} alt="Angular" />
                            <h5>Angular</h5>
                            <img src={bitbucket} alt="Bitbucket" />
                            <h5>Bitbucket</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
   )
 }
 