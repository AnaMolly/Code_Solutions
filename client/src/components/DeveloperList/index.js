import React from 'react';
import { Card, Row, Button } from "react-bootstrap"

const DeveloperList = ({ developers }) => {

  return (
        <div>
            <Row className="developersmain" style={{padding:'10px 30px 30px 30px', display:'flex',justifyContent:'center'}}> 
            
            {developers.slice(0,5).map((developer) => (
            <Card className="m-4" style={{ width: "18em" }} key={developer.id}>
              <Card.Body style={{ textAlign:'center', padding:'30px 30px 40px 30px'}}>
                  <Card.Title  style={{ color:'black', padding:'10px'}}>{developer.fullName}</Card.Title>
                  <Card.Img variant="top" src={developer.profileImg} style={{maxWidth:'284px'}}/>
                  <Card.Text  style={{ color:'black', paddingTop:'16px'}}>{developer.userDescription}</Card.Text>
                  <Card.Subtitle style={{  padding:'20px 20px 30px 20px'}}className="mb-2 text-muted">Hourly rate: {developer.hourlyRate}</Card.Subtitle>
                  <a className="infobut" variant="primary" target="_blank" style={{ margin: '10px'}} to={`/developers/${developer._id}`}>
                  More Info
                  </a>
              </Card.Body>
          </Card>
      ))}
            </Row>
        </div>
  );
};

export default DeveloperList;
