import React from "react";
import Axios from 'axios';
import { useState } from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import { useParams, Redirect } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth"

export default function ClientProfile() {
  const { userId: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { userId: userParam },
  });

  // console.log(data)
  const user = data?.me || data?.user || {};

  // console.log(data)
  // console.log(user)
  const [modalData, setModalData] = useState({})
  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [show, setShow] = useState(false);

  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Redirect to="/client" />
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user?.fullName) {
    return (
      <h4 style={{ padding: '40px', textAlign: 'center', fontSize: '30px', margin: '65px', backgroundColor: '#4AB8B1', color: 'white' }}>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(value)
    setModalData({ ...modalData, [name]: value, })
  }

  const handleIntegerChange = (event) => {
    const { name, value } = event.target;
    // console.log(value)
    setModalData({ ...modalData, [name]: parseInt(value), })
  }

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "vylq4hww");

    Axios.post("https://api.cloudinary.com/v1_1/darylnauman/image/upload", formData)
      .then((res) => {
        const profileImageURL = res.data.secure_url;
        setModalData({ ...modalData, profileImage: profileImageURL })
      })
      .catch(error => {
        console.log(error);
      })
  };

  const handleModalSubmit = async (event) => {
    event.preventDefault();

    // console.log(modalData)
    try {
      const { data } = await updateUser({
        variables: { userData: { ...modalData } }
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={user.profileImage}
          style={{ maxWidth: "500px", display: 'flex' }}
          alt={"user profile"}
        ></img>
      </div>

      <div className='profile'>
        <div className="profile-info">
          <h2 className='profiletitles'>Name:</h2>
          <p className='profiletext'> {user.fullName}</p>
          <h2 className='profiletitles'>Company:</h2>
          <p className='profiletext'>{user.company}</p>
          <h2 className='profiletitles'>Name of Project/Website:</h2>
          <p className='profiletext' >{user.sampleProjectName}</p>
          <h2 className='profiletitles'>Type of developer needed:</h2>
          <p className='profiletext'>{user.primaryFocus}</p>
          <h2 className='profiletitles'>Services needed:</h2>
          <p className='profiletext'>{user.servicesOffered}</p>
          <h2 className='profiletitles'>Contact Info:</h2>
          <p className='profiletext'>For more details contact me at {user.email}</p>
          {Auth.getProfile().data._id === user._id ? 
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
        </Button> : 
        <>
        </>
        }
          
        </div>
      </div>

      <Modal show={show} onHide={handleClose}   >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Form className="profileform" action="/upload" method="POST" enctype="multipart/form-data">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload profile image file</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(event) => {
                uploadImage(event.target.files);
              }} />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label className="formlabel">Full Name</Form.Label>
            <Col sm="30">
              <Form.Control type="text" placeholder={user.fullName} value={modalData.fullName} name="fullName" onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} style={{ paddingBottom: '10px' }} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label>What type of web developer are you searching for?</Form.Label>
            <Form.Select aria-label="Floating label select example" name="primaryFocus" onChange={handleInputChange}>
              <option style={{ color: 'lightgray' }} value={modalData.primaryFocus}>Open this menu to select</option>
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
            <Form.Label>Name of Project</Form.Label>
            <Col sm="30">
              <Form.Control type="skills" name="sampleProjectName" placeholder={user.sampleProjectName} value={modalData.sampleProjectName} onChange={handleInputChange} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Services Needed</Form.Label>
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


