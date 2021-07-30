import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const AppNavbar = () => {   
  
    return (
      <>
        <ReactBootStrap.Navbar style={{backgroundColor:'#4AB8B1'}}>
  <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">Find My Coder</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>        
        <ReactBootStrap.Nav.Link href="#link">About</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#link">Login</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#link">Sign Up</ReactBootStrap.Nav.Link>
        {/* <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Divider />
          <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.NavDropdown> */}
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
      </>
    );
  };
  
  export default AppNavbar;
