import React from 'react';
import { Card, Row } from "react-bootstrap"

const HomeDevList = ({ buyers }) => {

  return (
        <div>
            <Row className="buyers" style={{padding:'10px 30px 60px 30px', display:'flex',justifyContent:'center',fontWeight:'200'}}> 
            
            {buyers.map((buyer) => (
            <Card className="m-4" style={{ width: "18em", border: '2px solid var(--marigold)', backgroundColor:'var(--mint-cream)' }} key={buyer.id}>
              <Card.Body style={{ textAlign:'center', padding:'30px 20px 40px 20px'}}>
                  <Card.Title  style={{ color:'black', padding:'10px', fontSize:'30px', fontWeight:'200'}}>{buyer.fullName}</Card.Title>
                  <Card.Img variant="top" src={buyer.profileImage} style={{maxWidth:'284px'}}/>
                  <Card.Text  style={{ color:'black', padding:'20px 15px 10px 15px', fontSize:'20px'}}> <span style={{color:'gray'}}>Looking for: </span>{buyer.userDescription}</Card.Text>
                  <a className="infobut" variant="primary" style={{ margin: '10px'}} href={`/profiledev/${buyer._id}`}>
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
