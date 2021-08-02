import React from "react";
import { useState, useEffect} from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import { useParams,Redirect } from 'react-router-dom';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

export default function ProfileDev() {
  let { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  console.log(data)
  const user = data?.user || {};
  console.log(user)
  const [modalData, setModalData] = useState({
    
  })

  const[redirect,setRedirect]=useState(false)
  
  
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value)
    setModalData({ ...modalData, [name]: value, })
  }


  const handleModalSubmit = async (event) => {
    event.preventDefault();
    
    console.log(modalData)

    try {
      const { data } = await updateUser({
        variables: { userId: user._id,userData: {...modalData} }
      })
      handleClose()
      setRedirect(true)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true);

  if(redirect){
    return<Redirect to="/"/>
  }

  return (
    <div className="profiledevcont" style={{ backgroundColor: "#f2f7f2" }}>
      <h1 className="mainh1" style={{ backgroundColor: '#F0A202', paddingTop: '50px' }}>PROFILE:</h1>
      <img
        src={user.profileImage}
        style={{ maxWidth: "500px" }}
      ></img>
      <div className='profile'>
        <div className="profile-info">
          <h2 className='profiletitles'>Name:</h2>
          <p className='profiletext'> {user.fullName}</p>
          <h2 className='profiletitles'>Description:</h2>
          <p className='profiletext'>{user.userDescription}</p>
          <h2 className='profiletitles'>Type of developer:</h2>
          <p className='profiletext'>{user.role}</p>
          <h2 className='profiletitles'>Skills:</h2>
          <p className='profiletext'>{user.skillSet}</p>
          <h2 className='profiletitles'>Hourly rate:</h2>
          <p className='profiletext'>{user.hourlyRate}</p>
          <h2 className='profiletitles'>Company:</h2>
          <p className='profiletext'>{user.company}</p>
          <h2 className='profiletitles'>Project name:</h2>
          <p className='profiletext'>{user.sampleProjectName}</p>
          <h2 className='profiletitles'>Project URL:</h2>
          <p className='profiletext'>{user.sampleProjectURL}</p>
          <h2 className='profiletitles'>Linkedin URL:</h2>
          <p className='profiletext'>{user.linkedIn}</p>
          <h2 className='profiletitles'>Github URL</h2>
          <p className='profiletext'>{user.gitHub}</p>
          <h2 className='profiletitles'>Services:</h2>
          <p className='profiletext'>{user.servicesOffered}</p>
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
        <Form className="profileform">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="formlabel">
              Choose a Profile picture to display:{" "}
            </Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="formlabel">Name</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder={user.fullName} value={modalData.fullName} name="fullName" onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="formlabel">Email</Form.Label>
            <Col sm="30">
              <Form.Control type="email" placeholder={user.email} name='email' value={modalData.email} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="formlabel">Role</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder="Role" name='role' value={modalData.role} onChange={handleInputChange} />
            </Col>
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
              <Form.Control type="skills" placeholder="Skills" name="skillSet" value={user.skillSet} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Hourly rate</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder="Hourly rate" name="hourlyRate" value={user.hourlyRate} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Company (optional)</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" placeholder="Company" name="company" value={user.company} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Project example URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="sampleProjectURL" placeholder="Project example url" value={user.sampleProjectURL} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Project example name</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="sampleProjectName" placeholder="Project example name" value={user.sampleProjectName} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Your Linkedin URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="linkedIn" placeholder="Linkedin url" value={user.linkedIn} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Your GitHub URL</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="gitHub" placeholder="Github url" value={user.gitHub} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Services</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="servicesOffered" placeholder="Services you offer" value={user.servicesOffered} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Button 
          variant="primary"
          onClick={handleModalSubmit}
          type="submit"
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
