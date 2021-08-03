import React, { useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Auth from '../../utils/auth';

import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

const AppNavbar = () => {
  //query user and send token back
  //authenticated the token with the auth in the the front end utils

  const [showModal, setShowModal] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <ReactBootStrap.Navbar style={{ backgroundColor: '#4AB8B1' }}>
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/">Find My Coder</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="/homecli">Home(Client)</ReactBootStrap.Nav.Link>
              
              <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/search">Search</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/profiledev/:userId">Profile1</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/profilebuyer">Profile2</ReactBootStrap.Nav.Link>
              {Auth.loggedIn() ? ([
                <>
                  <ReactBootStrap.Nav.Link href="/homedev">Home(Dev)</ReactBootStrap.Nav.Link>
                  <Button style={{ backgroundColor: '#F0A202', border: 'none' }} onClick={logout}>Logout</Button>
                </>
              ]) : ([
                
                <ReactBootStrap.Nav.Link href="/signup">Sign Up</ReactBootStrap.Nav.Link>,
                <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
              ])}
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

      <ReactBootStrap.Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <ReactBootStrap.Tab.Container defaultActiveKey='login'>
          <ReactBootStrap.Modal.Header closeButton>
            <ReactBootStrap.Modal.Title id='signup-modal'>
              <ReactBootStrap.Nav variant='pills'>
                <ReactBootStrap.Nav.Item>
                  <ReactBootStrap.Nav.Link eventKey='login'>Login</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav.Item>
                <ReactBootStrap.Nav.Item>
                  <ReactBootStrap.Nav.Link eventKey='signup'>Sign Up</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav.Item>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Modal.Title>
          </ReactBootStrap.Modal.Header>
          <ReactBootStrap.Modal.Body>
            <ReactBootStrap.Tab.Content>
              <ReactBootStrap.Tab.Pane eventKey='login'>
                <Login handleModalClose={() => setShowModal(false)} />
              </ReactBootStrap.Tab.Pane>
              <ReactBootStrap.Tab.Pane eventKey='signup'>
                <Signup handleModalClose={() => setShowModal(false)} />
              </ReactBootStrap.Tab.Pane>
            </ReactBootStrap.Tab.Content>
          </ReactBootStrap.Modal.Body>
        </ReactBootStrap.Tab.Container>
      </ReactBootStrap.Modal>
    </>
  );
};

export default AppNavbar;
