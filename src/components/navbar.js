import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './quiz.css'

export default function Navbartop() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Quiz Game App </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><Link to="/" className="link-1">Home</Link></Nav.Link>
        <Nav.Link><Link to="/quiz" className="link-1">Quiz</Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
