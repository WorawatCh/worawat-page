import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import isc from '../assets/img/isc.png'
import technobrave from '../assets/img/technobrave.png'
import tangerine from '../assets/img/tangerine.png'
import kookmin from '../assets/img/kookmin.png'
import { CaretRightFill } from 'react-bootstrap-icons';

export const Experience = () => {
  const exp =[
    {
      title:'Techno Brave Asia Ltd.',
      position:'Frontend Developer - Intern',
      detail:['June 2019 - August 2019','Php'],
      img:technobrave
    },
    {
      title:'Kookmin University, South Korea',
      position:'Java Developer - Intern',
      detail:['September 2019 - December 2019','Java with openGL','Blender and Gimp (3d model)'],
      img:kookmin
    },
    {
      title:'Tangerine Co.,Ltd.',
      position:'Junior Frontend Developer - Employee',
      detail:['July 2020 - July 2022','HTML, CSS, Javascript, Typescript, Jquery','Angular, React'],
      img:tangerine
    },
    {
      title:'INNOVATIVE SOFTWARE CONSULTING CO., LTD.',
      position:'Frontend Developer - Employee',
      detail:['July 2022 - Now','HTML, CSS, Javascript, Jquery','Vue'],
      img:isc
    }
  ]
  return (
    <section className='experience' id='experience'>
        <Container >
        <h2>Experience</h2>
        <p>All my intern & employee experince since 2019 - now</p>
        <Row className='align-item-center exp-out-row'>
          {
              exp.map((project,index) => {
                return(
                  <Col key={index} md={12} sm={12} className='exp-content' >
                  <Row className='exp-content-row align-item-center'>
                    <Col sm={12} md={3} className='exp-img text-center' >
                      <img  src={project.img} alt={project.img}></img>
                    </Col>
                    <Col sm={12} md={9} className='exp-detail'>
                      <h3>{project.title} | {project.position}</h3>
                        {
                          project.detail.map((item,index) =>{
                            return(
                              <>
                                <span key={index} className='mt-4 mb-4'><CaretRightFill size={25} className='mb-1'/> {item}</span><br/>
                              </>
                            )
                          })
                        }
                    </Col>
                  </Row>
                  </Col>
                )
              })
            }
         </Row>
        </Container>
    </section>
  )
}
