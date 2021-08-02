import React from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';

import picdefault from '../images/DefaultProfile.jpg'
import kevin from '../images/kevin.jpg'
import daniel from '../images/daniel.png'
import Image from 'react-bootstrap/Image'

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
                            <Image variant="top" src={kevin} className= 'p-3' roundedCircle/>
                            <Card.Body>
                                <Card.Title style={{color: 'black'}}>Kevin Crawford | <span style={{fontSize: '18px'}}>Front-End</span></Card.Title>
                                <Card.Text style={{color: 'black'}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Image variant="top" src={picdefault} className= 'p-3' roundedCircle/>
                            <Card.Body>
                                <Card.Title style={{color: 'black'}}>Daryl Nauman | <span style={{fontSize: '18px'}}>Front-End</span></Card.Title>
                                <Card.Text style={{color: 'black'}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Image variant="top" src={picdefault} className= 'p-3' roundedCircle/>
                            <Card.Body>
                                <Card.Title style={{color: 'black'}}>Analia Molly | <span style={{fontSize: '18px'}}>Front-End</span></Card.Title>
                                <Card.Text style={{color: 'black'}} >
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Image variant="top" src={daniel} className= 'p-3' roundedCircle/>
                            <Card.Body>
                                <Card.Title style={{color: 'black'}}>Daniel Ogunlana | <span style={{fontSize: '18px'}}>Front-End</span></Card.Title>
                                <Card.Text style={{color: 'black'}} >
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