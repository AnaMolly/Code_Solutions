import React from "react";
import { useState} from "react";
import { Form, Col, Row, Button, Modal} from "react-bootstrap";
import { useParams, Redirect } from 'react-router-dom';

import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";

import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth"


export default function ProfileDev() {
  const { userId: userParam } = useParams();
  
  const { loading, data } = useQuery( userParam ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userParam },
  });
  console.log(data)
  const user = data?.me || data?.user || {};
  console.log(data)
  console.log(user)
  const [modalData, setModalData] = useState({})
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const [show, setShow] = useState(false);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Redirect to="/me" />
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if(!user?.fullName) {
    return (
      <h4 style={{padding:'40px', textAlign:'center', fontSize:'30px', margin:'65px', backgroundColor:'#4AB8B1', color:'white'}}>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setModalData({ ...modalData, [name]: value, })
  }

  const handleIntegerChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setModalData({ ...modalData, [name]: parseInt(value), })
  }

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    
    console.log(modalData)

    try {
      const { data } = await updateUser({
        variables: { userData: {...modalData} }
      })
      
      handleClose()
      window.location.reload()
      
    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  return (
    <div className="profiledevcont" style={{ backgroundColor: "#F0A202" }}>
      <h1 className="mainh1" style={{ backgroundColor: '#F0A202', paddingTop: '50px' }}>PROFILE:</h1>
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
          <p className='profiletext' >{user.servicesOffered}</p>
          <h2 className='profiletitles'>Contact Info:</h2>
          <p className='profiletext'>{user.email}</p>
          <Button
            variant="primary"
            onClick={handleShow}
            style={{
              backgroundColor: "#4AB8B1",
              border: "none",
              fontSize: "20px",
              padding: "12px 24px",
              marginTop: "15px",
            }}
          >
            Edit Profile
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}   >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Form className="profileform" action="/upload" method="POST" enctype="multipart/form-data">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="formlabel">
              Choose an avatar:{" "}
            </Form.Label>
            <br/>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="formlabel">Full Name</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder={user.fullName} value={modalData.fullName} name="fullName" onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{paddingBottom:'10px'}} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label>What type of web developer are you?</Form.Label>
            <Form.Select aria-label="Floating label select example" name="primaryFocus" onChange={handleInputChange}>
                <option style={{color:'lightgray'}} value={modalData.primaryFocus}>Open this menu to select</option>
                  <option value="Front-End">Front-End</option>
                  <option value="Back-End">Back-End</option>
                  <option value="Full-Stack">Full-Stack</option>
            </Form.Select>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Profile description</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder={user.userDescription} name="userDescription" value={modalData.userDescription} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Skills</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" placeholder={user.skillSet} name="skillSet" value={modalData.skillSet} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Hourly rate</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder={user.hourlyRate} name="hourlyRate" value={modalData.hourlyRate} onChange={handleIntegerChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Company</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" placeholder={user.company} name="company" value={modalData.company} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Project example URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="sampleProjectURL" placeholder={user.sampleProjectURL} value={modalData.sampleProjectURL} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Project example name</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="sampleProjectName" placeholder={user.sampleProjectName} value={modalData.sampleProjectName} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Your Linkedin URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="linkedIn" placeholder={user.linkedIn} value={modalData.linkedIn} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Your Resume URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="resumeURL" placeholder={user.resumeURL} value={modalData.resumeURL} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Your GitHub URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="gitHub" placeholder={user.gitHub} value={modalData.gitHub} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Services</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="servicesOffered" placeholder={user.servicesOffered} value={modalData.servicesOffered} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Button 
          variant="primary"
          onClick={handleModalSubmit}
          style={{
            margin: "0px 45px 45px 45px",
            backgroundColor: "#4AB8B1",
            border: "none",
          }}
        >
          Save Changes
        </Button>
        </Form>
        
      </Modal>
    </div>
  );
}
