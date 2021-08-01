import React from 'react';
import profileDefault from '../images/DefaultProfile.jpg';
import { Col, Row, Button, Card } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function HomeDev() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const developers = data?.developers || [];

    return (
        <div className='contentPage'>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
                <Button style={{backgroundColor:'#F0A202'}}>
                    Finish Your Profile
                </Button>
            </div>            
            
            <div className='developer-section col-12 col-md-10 my-3'>                
                <h2 style={{textAlign: 'center'}}>
                    Developers
                </h2>
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <DeveloperList
                        developers={developers}
                        />
                    )}
                </div>
            </div>            

            <div className='articleSection'>
                <h1 className="mainh1">*Articles on how you can improve your online presence*</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>                     
        </div>        
        
    );
};