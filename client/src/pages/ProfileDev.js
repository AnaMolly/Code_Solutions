import React from "react";
import { useState } from "react";
import { Form, Col, Row, Button, Modal, FloatingLabel } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";
import { QUERY_SINGLE_USER, QUERY_ME } from "../utils/queries";

export default function ProfileDev() {
  

  let {userId} = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });
  const user = data?.user || {};
  
  const [updateUser, { error, userData }] = useMutation(UPDATE_USER);

  const [modalData, setModalData] = useState()

  const handleInputChange = (event) => {
    const { name,value } = event.target;
    setModalData({ ...modalData, [name]: value })
  }

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    console.log(modalData)
    try {
      const {data} = await updateUser({
        variables: {...modalData}
      })
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }


	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const fileSelectedHandler = (event) => {

        const state = {
            selectedFile: null
        }
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

	return (
		<div className="profiledevcont" style={{ backgroundColor: "#f2f7f2" }}>
			<h1 className="mainh1" style={{ backgroundColor: '#F0A202', paddingTop:'50px' }}>PROFILE:</h1>
			<img
				src={user.profileImage}
				style={{ maxWidth: "500px" }}
			></img>
            <div className='profile'>
            <div className="profile-info">
            <h2 className='profiletitles'>Name:</h2>
            <p className='profiletext'> *This is my name*</p>
            <h2 className='profiletitles'>Description:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Type of developer:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Skills:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Hourly rate:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Company:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Project name:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Project URL:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Linkedin URL:</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Github URL</h2>
            <p className='profiletext'></p>
            <h2 className='profiletitles'>Services:</h2>
            <p className='profiletext'></p>
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
      
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Profile</Modal.Title>
				</Modal.Header>
				<Form className="profileform">
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label className="formlabel">
							Choose a Profile picture to display:{" "}
						</Form.Label>
						<Form.Control type="file" onChange={fileSelectedHandler}/>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
						<Form.Label className="formlabel">Name</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Name" value={user.fullName} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
						<Form.Label className="formlabel">Email</Form.Label>
						<Col sm="30">
							<Form.Control type="email" placeholder="Email" value={user.email} onChange={handleInputChange} />
						</Col>
					</Form.Group>

					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Password</Form.Label>
						<Col sm="30">
							<Form.Control type="password" placeholder="Password" />
						</Col>
					</Form.Group>
                    <Form.Group style={{paddingBottom:'10px'}}>
                        <Form.Label>What type of web developer are you?</Form.Label>
                            <Form.Select aria-label="Floating label select example">
                                <option style={{color:'lightgray'}}>Open this menu to select</option>
                                <option value="1">Front-End</option>
                                <option value="2">Back-End</option>
                                <option value="3">Full-Stack</option>
                            </Form.Select>

                    </Form.Group>
                    
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Profile description</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Description" value={user.userDescription} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
            
					>
						<Form.Label>Skills</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Skills" value={user.skillSet} onChange={handleInputChange} />
						</Col>
					</Form.Group>
                    
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Hourly rate</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Hourly rate" value={user.hourlyRate} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Company (optional)</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Company" value= {user.company} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Project example URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Project example url" value={user.sampleProjectURL} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Project example name</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Project example name" value={user.sampleProjectName} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Your Linkedin URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Linkedin url" value={user.linkedIn} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Your GitHub URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Github url" value={user.gitHub} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Services</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Services you offer" value={user.servicesOffered} onChange={handleInputChange} />
						</Col>
					</Form.Group>
				</Form>
				<Button
					variant="primary"
					onClick={handleClose}
          onSubmit={handleModalSubmit}
					style={{
						margin: "0px 45px 45px 45px",
						backgroundColor: "#4AB8B1",
						border: "none",
					}}
				>
					Save Changes
				</Button>
			</Modal>
		</div>
	);
}
