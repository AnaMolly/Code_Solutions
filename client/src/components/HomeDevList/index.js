import React from 'react';
import { Card, Row, Button } from "react-bootstrap"

const HomeDevList = ({ developers }) => {

  return (
        <div>
            <Row className="devs" style={{padding:'10px 30px 30px 30px', display:'flex',justifyContent:'center'}}> 
            
            {developers.map((developer) => (
            <Card className="m-4" style={{ width: "18em", border: '2px solid var(--marigold)', backgroundColor:'var(--mint-cream)' }} key={developer.id}>
              <Card.Body style={{ textAlign:'center', padding:'30px 30px 40px 30px'}}>
                  <Card.Title  style={{ color:'black', padding:'10px'}}>{developer.fullName}</Card.Title>
                  <Card.Img variant="top" src={developer.profileImage} style={{maxWidth:'284px'}}/>
                  <Card.Text  style={{ color:'black', paddingTop:'16px'}}>{developer.userDescription}</Card.Text>
                  <Card.Subtitle style={{  padding:'20px 20px 30px 20px'}}className="mb-2 text-muted">Hourly rate: ${developer.hourlyRate}/hr</Card.Subtitle>
                  <a className="infobut" variant="primary" target="_blank" style={{ margin: '10px'}} href={`/profiledev/${developer._id}`}>
                  View profile
                  </a>
              </Card.Body>
          </Card>
      ))}
            </Row>
        </div>
  );
};

export default HomeDevList;
