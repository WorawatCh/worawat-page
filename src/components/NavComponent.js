import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import logo from '../assets/img/logo.svg';

export const NavComponent = () => {
    const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll =()=>{
      if(window.scrollY > 50 ){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  const onHandleActiveLink =(value)=>{
    setActiveLink(value)
  }

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled':''} collapseOnSelect={true}>
        <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link':' navbar-link'} onClick={() => onHandleActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#info" className={activeLink === 'home'? 'active navbar-link':' navbar-link'} onClick={() => onHandleActiveLink('info')}>Info</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link':' navbar-link'} onClick={() =>onHandleActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience'? 'active navbar-link':' navbar-link'} onClick={() =>onHandleActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link':' navbar-link'} onClick={() =>onHandleActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact'? 'active navbar-link':' navbar-link'} onClick={() =>onHandleActiveLink('contact')}>Contacts</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
