import React from 'react';
import { Form, Col, Row, Button} from "react-bootstrap"


export default function ProfileDev() {
    return (
        <div className='profiledevcont' style={{backgroundColor:'#f2f7f2'}}>
        <h1 className="mainh1">YOUR PROFILE:</h1>
        <img src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" style={{maxWidth:"500px"}}></img>
        <button className='editprofile'>Edit Profile</button>
        <Form className="profileform">            
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="formlabel">Choose a Profile picture to display: </Form.Label>
                <Form.Control type="file" />
            </Form.Group>
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
            <Button style={{backgroundColor:'#4AB8B1', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Save Changes</Button>
    </Form>
     
        </div>
       
    );
  } 