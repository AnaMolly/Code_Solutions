import React from 'react';
import { Card, Row, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const DeveloperList = ({ developers }) => {

  return (
        <div>
            <Row className="developersmain" style={{padding:'10px 30px 30px 30px'}}> 
            
            {developers.map((developer) => (
            <Card className="m-4" style={{ width: "18em" }} key={developer.id}>
              <Card.Body style={{ textAlign:'center'}}>
                  <Card.Title  style={{ color:'black', padding:'10px'}}>{developer.fullName}</Card.Title>
                  <Card.Img variant="top" src={developer.profileImg} style={{maxWidth:'284px'}}/>
                  <Card.Text  style={{ color:'black', paddingTop:'16px'}}>{developer.userDescription}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">Hourly rate: {developer.hourlyRate}</Card.Subtitle>
                  <Button variant="primary" target="_blank" style={{ margin: '10px',backgroundColor:'#F0A202', border:'none'}} to={`/profiles/${developer._id}`}>
                  More Info
                  </Button>
              </Card.Body>
          </Card>
      ))}
            </Row>
        </div>
  );
};

export default DeveloperList;
