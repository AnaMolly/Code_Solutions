import React from 'react';
import { useState } from 'react';
import { Form, Col, Row, Button, Modal} from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_DEVELOPERS } from "../utils/queries";
import { QUERY_SINGLE_DEVELOPER } from "../utils/queries";


export default function ProfileBuyer() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='profiledevcont' style={{backgroundColor:'#f2f7f2'}}>
        <h1 className="mainh1">DEVERLOPER'S PROFILE:</h1>
        <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" style={{maxWidth:"500px"}}></img>
        <div className="profileform">           
           
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