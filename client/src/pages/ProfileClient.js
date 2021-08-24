import React from 'react';
import { useState } from 'react';
import { Button, Modal} from "react-bootstrap"
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
        <h1 className="mainh1" style={{backgroundColor:'#f0a202', padding:'60px'}}>DEVELOPER'S PROFILE:</h1>
        <div style={{display:'flex', justifyContent:'center'}}>
      <img
        src={user.profileImage}
        style={{ maxWidth: "500px", display:'flex', backgroundColor:'white', padding:'50px'} }
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
          <h2 className='profiletitles'>Project name:</h2>
          <p className='profiletext' >{user.sampleProjectName}</p>
          <h2 className='profiletitles'>Project URL:</h2>
          <a className='profiletext'href={user.sampleProjectURL} >{user.sampleProjectURL}</a>
          <h2 className='profiletitles'>Github URL</h2>
          <a className='profiletext' href={user.gitHub}>{user.gitHub}</a>
          <h3 className='profiletitles'>Linkedin:</h3> 
          <a className='profiletext' href={user.linkedIn}>{user.linkedIn}</a>
          <h2 className='profiletitles'>Services:</h2>
          <p className='profiletext'>{user.servicesOffered}</p>
         
    <Button  variant="primary" onClick={handleShow} style={{backgroundColor:'#4AB8B1', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Contact Developer</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Contact Information:</Modal.Title>
        </Modal.Header>
        <div style={{padding:'25px'}}>
            <h2 className='profiletitles' style={{fontSize:'35px'}}></h2>

            <h3 className='profiletitles'>Email:</h3>
            <a  className='profiletext'>{user.email}</a>  

            <h2 className='profiletitles'>Company:</h2>
            <p className='profiletext'>{user.company}</p>

        </div>
          
          
      </Modal>
    </div>
    </div>
       
    );
  } 