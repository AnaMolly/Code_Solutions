import React from 'react';
import { Card, Row} from "react-bootstrap"

const HomeDevList = ({ developers }) => {

  return (
        <div>
            <Row className="devs" style={{padding:'30px 30px 30px 30px', display:'flex',justifyContent:'center', fontWeight:'200'}}> 
            
            {developers.map((developer) => (
            <Card className="m-4" style={{ padding:'20px',width: "18em", border: '2px solid var(--marigold)', backgroundColor:'var(--mint-cream)' }} key={developer.id}>
              <Card.Body style={{ textAlign:'center', padding:'30px 20px 40px 20px'}}>
                  <Card.Title  style={{ color:'black', padding:'10px', fontSize:'30px'}}>{developer.fullName}</Card.Title>
                  <Card.Img variant="top" src={developer.profileImage} style={{maxWidth:'284px', margin:'20px 0px 20px 0px'}}/>
                  <Card.Text  style={{ color:'black', paddingTop:'16px', fontSize:'20px'}}>{developer.userDescription}</Card.Text>
                  <Card.Subtitle style={{  padding:'20px 20px 30px 20px'}}className="mb-2 text-muted">Hourly rate: ${developer.hourlyRate}/hr</Card.Subtitle>
                  <a className="infobut" variant="primary" style={{ margin: '10px'}} href={`/profiledev/${developer._id}`}>
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
