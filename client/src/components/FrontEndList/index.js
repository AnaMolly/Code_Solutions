import React from 'react';
import { Card, Row, Button } from "react-bootstrap"

const FEDeveloperList = ({ fedevelopers }) => {

  return (
        <div>
            <Row className="developersmain" style={{padding:'10px 30px 30px 30px', display:'flex',justifyContent:'center'}}> 
            
            {fedevelopers.slice(0,5).map((fedeveloper) => (
            <Card className="m-4" style={{ width: "18em" }} key={fedeveloper.id}>
              <Card.Body style={{ textAlign:'center', padding:'30px 30px 40px 30px'}}>
                  <Card.Title  style={{ color:'black', padding:'10px'}}>{fedeveloper.fullName}</Card.Title>
                  <Card.Img variant="top" src={fedeveloper.profileImage} style={{maxWidth:'284px'}}/>
                  <Card.Text  style={{ color:'black', paddingTop:'16px'}}>{fedeveloper.userDescription}</Card.Text>
                  <Card.Subtitle style={{  padding:'20px 20px 30px 20px'}}className="mb-2 text-muted">Hourly rate: ${fedeveloper.hourlyRate}/hr</Card.Subtitle>
                  <a className="infobut" variant="primary" target="_blank" style={{ margin: '10px'}} href={`/profiledev/${fedeveloper._id}`}>
                  View profile
                  </a>
              </Card.Body>
          </Card>
      ))}
            </Row>
        </div>
  );
};

export default FEDeveloperList;
