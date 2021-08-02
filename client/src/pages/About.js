import React from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function About() {
    
    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const developers = data?.developers || [];

    return (
        <div>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
                <h2>About Find My Coder</h2>
            </div>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="aboutDev">
                <h1  className="mainh1">About Developers</h1>
                <div className='about-cards'>
                    <Row style={{justifyContent: 'space-evenly'}}>
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
                        
                    </Row>
                </div>                            
            </div>
        </div>
    )
}