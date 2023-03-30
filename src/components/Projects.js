import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import {ProjectCard} from './ProjectCard'
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import project5 from '../assets/img/project5.png'
import project6 from '../assets/img/project6.png'
import project7 from '../assets/img/project7.png'

export const Projects = () => {
    const project =[
        {
            title:'Marvel-App',
            desc:'Marvel hero search website',
            tools:['react','html','css','javascript'],
            img:project1
        },
        {
            title:'Music-App',
            desc:'My favorite custom song',
            tools:['react','html','css','javascript','netlify'],
            img:project2
        },
        {
            title:'Kings Cup',
            desc:'A party card game on website',
            tools:['vue','html','css','javascript','firebase'],
            img:project3
        },
        {
            title:'Flappy bird',
            desc:'A flappy bird clone game on website',
            tools:['vue','html','css','javascript'],
            img:project4
        },
        {
            title:'Weather-App',
            desc:'Weather check website',
            tools:['vue','html','css','javascript'],
            img:project5
        },
        {
            title:'Movie-Guide',
            desc:'Movie search website',
            tools:['vue','html','css','javascript'],
            img:project6
        },
        {
            title:'Pokemon Card',
            desc:'A pokemon card generator website',
            tools:['vue','html','css','javascript'],
            img:project7
        }
    ]
  return (
    <section className='project' id='projects'>
        <Container>
            <Row >
                <Col>
                    <h2>Projects</h2>
                    <p>All my free time built project, I have  done so far</p>
                    <Row>
                        {
                            project.map((project,index) => {
                                return(
                                    <ProjectCard key={index} {...project} />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}
