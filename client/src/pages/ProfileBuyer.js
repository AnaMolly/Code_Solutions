import React from 'react';
import { useState } from 'react';
import { Form, Col, Row, Button, Modal} from "react-bootstrap"



export default function ProfileBuyer() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='profiledevcont' style={{backgroundColor:'#f2f7f2'}}>
        <h1 className="mainh1">DEVERLOPER'S PROFILE:</h1>
        <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" style={{maxWidth:"500px"}}></img>
        <div className="profileform">            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="formlabel">
                Name
                </Form.Label>
                <Col sm="30">
                <Form.Control type="text" placeholder="Name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="formlabel">
                Username
                </Form.Label>
                <Col sm="30">
                <Form.Control type="text" placeholder="Username" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label  className="formlabel">
                Email
                </Form.Label>
                <Col sm="30">
                <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Password
                </Form.Label>
                <Col sm="30">
                <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                Profile description
                </Form.Label>
                <Col sm="30">
                <Form.Control type="text" placeholder="Description" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Skills
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Dkills" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                Hourly rate
                </Form.Label>
                <Col sm="30">
                <Form.Control type="text" placeholder="Hourly rate" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Company (optional)
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Company" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                Project example URL
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Project example url" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                Project example name
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Project example name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Your Linkedin URL
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Linkedin url" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label>
                Your GitHub URL
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Github url" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Services
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Services you offer" />
                </Col>
            </Form.Group>
           
    <Button  variant="primary" onClick={handleShow} style={{backgroundColor:'#4AB8B1', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Contact Developer</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Developer</Modal.Title>
        </Modal.Header>
        <Form style={{padding:'45px 45px 15px 45px'}}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Name
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Your name" />
                </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Email
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Your email" />
                </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label >
                Message
                </Form.Label>
                <Col sm="30">
                <Form.Control type="skills" placeholder="Your message" />
                </Col>
        </Form.Group>
        </Form>
          <Button variant="primary" onClick={handleClose} style={{margin:'0px 45px 45px 45px', backgroundColor:'#4AB8B1', border:'none'}}>
            Save Changes
          </Button>
      </Modal>
    </div>
    </div>
       
    );
  } 