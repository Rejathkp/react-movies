import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";


function Nvbr() {
  return (
    <div>
        
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt="CinemaBreak"
              src="https://t4.ftcdn.net/jpg/03/20/46/59/240_F_320465973_1dU9j03GCdhqFK1nL7XI0qsrIcLqQcoI.jpg"
              width="60"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            CinemaBreak
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#signin">Sign In</Nav.Link>

            
          </Nav>
        
      </Container>
    </Navbar>

    </div>
  )
} 

export default Nvbr