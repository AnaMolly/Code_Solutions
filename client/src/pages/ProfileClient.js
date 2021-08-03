import React from 'react';
import { useState } from 'react';
import { Form, Col, Row, Button, Modal} from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { useQuery} from "@apollo/client";
import { QUERY_SINGLE_USER } from "../utils/queries";


export default function ProfileBuyer() {
  let { userId } = useParams();
  
  const { data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  console.log(data)
  
  const user = data?.user || {};
  console.log(user)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='profiledevcont' style={{ backgroundColor: "#F0A202" }}>
        <h1 className="mainh1" style={{backgroundColor:'#f0a202'}}>DEVERLOPER'S PROFILE:</h1>
        <div style={{display:'flex', justifyContent:'center'}}>
      <img
        src={user.profileImage}
        style={{ maxWidth: "500px", display:'flex'}}
      ></img>
      </div>

        <div className='profile'>
        <div className="profile-info">
          <h2 className='profiletitles'>Name:</h2>
          <p className='profiletext'> {user.fullName}</p>
          <h2 className='profiletitles'>Description:</h2>
          <p className='profiletext'>{user.userDescription}</p>
          <h2 className='profiletitles'>Type of developer:</h2>
          <p className='profiletext'>{user.primaryFocus}</p>
          <h2 className='profiletitles'>Skills:</h2>
          <p className='profiletext'>{user.skillSet}</p>
          <h2 className='profiletitles'>Hourly rate:</h2>
          <p className='profiletext'>${user.hourlyRate}/hr</p>
          <h2 className='profiletitles'>Company:</h2>
          <p className='profiletext'>{user.company}</p>
          <h2 className='profiletitles'>Project name:</h2>
          <a className='profiletext' >{user.sampleProjectName}</a>
          <h2 className='profiletitles'>Project URL:</h2>
          <a className='profiletext'href={user.sampleProjectURL} >{user.sampleProjectURL}</a>
          <h2 className='profiletitles'>Linkedin URL:</h2>
          <a className='profiletext' href={user.linkedIn}>{user.linkedIn}</a>
          <h2 className='profiletitles'>Github URL</h2>
          <a className='profiletext' href={user.gitHub}>{user.gitHub}</a>
          <h2 className='profiletitles'>Services:</h2>
          <p className='profiletext'>{user.servicesOffered}</p>
          <h2 className='profiletitles'>Contact Info:</h2>
          <p className='profiletext'>{user.email}</p>  
    <Button  variant="primary" onClick={handleShow} style={{backgroundColor:'#4AB8B1', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Contact Developer</Button>
      </div>
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