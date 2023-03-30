import React from 'react'
import { Col } from "react-bootstrap";
import react from '../assets/img/react.png'
import vue from '../assets/img/vue.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import firebase from '../assets/img/firebase.png'
import netlify from '../assets/img/netlify.png'

export const ProjectCard = ({title, desc,tools, img}) => {
  return (
   <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={img} alt={title}></img>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{desc}</span> <br/>
                {
                  tools.map((tool)=>{
                    switch(tool) {
                      case 'react':
                        return  <img className='tools-icon' key={react} src={react} alt='react' />
                      case 'vue':
                        return  <img className='tools-icon' key={vue} src={vue} alt='vue'/>
                      case 'html':
                        return  <img className='tools-icon' key={html} src={html} alt='html'/>
                      case 'css':
                        return  <img className='tools-icon' key={css} src={css} alt='css'/>
                      case 'javascript':
                        return  <img className='tools-icon' key={js} src={js} alt='js'/>
                      case 'firebase':
                        return  <img className='tools-icon' key={firebase} src={firebase} alt='firebase'/>
                      case 'netlify':
                        return  <img className='tools-icon' key={netlify} src={netlify} alt='netlify'/>
                      default:
                        return null
                    }
                  })   
                }
            </div>
        </div>
   </Col>
  )
}
