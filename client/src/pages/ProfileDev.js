import React from "react";
import { useState } from "react";
import { Form, Col, Row, Button, Modal } from "react-bootstrap";
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_DEVELOPERS } from "../utils/queries";
import { UPDATE_DEVELOPER } from "../utils/mutations";
import { QUERY_SINGLE_DEVELOPER } from "../utils/queries";

export default function ProfileDev() {
  let {developerId} = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_DEVELOPER, {
    variables: { developerId: developerId },
  });
  const developer = data?.developer || {};
  
  const [updateDeveloper, { error, developerData }] = useMutation(UPDATE_DEVELOPER);

  const [modalData, setModalData] = useState()

  const handleInputChange = (event) => {
    const { name,value } = event.target;
    setModalData({ ...modalData, [name]: value })
  }
  console.log(modalData)
  const handleModalSubmit = async (event) => {
    event.preventDefault();
    console.log(modalData)
    try {
      const {data} = await updateDeveloper({
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

	return (
		<div className="profiledevcont" style={{ backgroundColor: "#f2f7f2" }}>
			<h1 className="mainh1" style={{ backgroundColor: '#F0A202', paddingTop:'50px' }}>PROFILE:</h1>
			<img
				src={developer.profileImage}
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
            <p className='profiletext'>{developer.email}</p>
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
						<Form.Control type="file" />
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
						<Form.Label className="formlabel">Name</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Name" value={developer.fullName} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
						<Form.Label className="formlabel">Username</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Username" value={developer.username} onChange={handleInputChange}/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
						<Form.Label className="formlabel">Email</Form.Label>
						<Col sm="30">
							<Form.Control type="email" placeholder="Email" value={developer.email} onChange={handleInputChange} />
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
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Profile description</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Description" value={developer.userDescription} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
            
					>
						<Form.Label>Skills</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Skills" value={developer.skillSet} onChange={handleInputChange} />
						</Col>
					</Form.Group>
                    
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Hourly rate</Form.Label>
						<Col sm="30">
							<Form.Control type="text" placeholder="Hourly rate" value={developer.hourlyRate} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Company (optional)</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Company" value= {developer.company} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Project example URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Project example url" value={developer.sampleProjectURL} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Project example name</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Project example name" value={developer.sampleProjectName} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Your Linkedin URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Linkedin url" value={developer.linkedIn} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Your GitHub URL</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Github url" value={developer.gitHub} onChange={handleInputChange} />
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formPlaintextPassword"
					>
						<Form.Label>Services</Form.Label>
						<Col sm="30">
							<Form.Control type="skills" placeholder="Services you offer" value={developer.servicesOffered} onChange={handleInputChange} />
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
