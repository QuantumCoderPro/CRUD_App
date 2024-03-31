import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto" style={{ fontSize: '24px', marginTop:'16px'}}>Safranzeo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" active  style={{ fontSize: '20px'  }}>Home</Nav.Link>

          <Nav.Link as={Link} to="/addemployee"  style={{ fontSize: '20px' }}>Add Employee</Nav.Link>
        </Nav>
      </Container>
    </Navbar> 
  );
};

export default Header;