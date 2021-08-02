import React from 'react';
import '../App.css'
import { Col, Row, Button, Card } from 'react-bootstrap';
import article1 from '../images/article1.JPG'
import article2 from '../images/article2.JPG'
import article3 from '../images/article3.JPG'
import article4 from '../images/article4.jpg'

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
                <Button style={{backgroundColor:'#F0A202', border:'none'}}>
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
                <h1 className="mainh1">Articles on how you can improve your online presence</h1>
                <div className='article-cards bottom-0'>
                    <Row style={{justifyContent:'space-evenly', textAlign: 'center'}}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={article1} alt="Card image" />
                            <Card.Body>
                                <a href='https://localbizguru.com/blog/improve-business-online-presence-in-2021/' style={{textDecoration:'none', color: 'black'}}>
                                <Card.Title>12 Effective Ways To Improve Your Business’s Online Presence In 2021</Card.Title>                                
                                </a>                                
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={article2} alt="Card image" />
                            <Card.Body>
                                <a href='https://www.omnesgroup.com/online-presence-as-junior-developer/' style={{textDecoration:'none', color: 'black'}}>
                                <Card.Title>Build an Online Presence and Make Connections as a Junior Developer: How to Start?</Card.Title>                                
                                </a>                                
                            </Card.Body>
                        </Card>   

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={article3} alt="Card image" />
                            <Card.Body>
                                <a href='https://eightfold.io/blog/tips-for-a-junior-front-end-developer/' style={{textDecoration:'none', color: 'black'}}>
                                <Card.Title>Tips for a Junior Front End Developer</Card.Title>                               
                                </a>                                
                            </Card.Body>
                        </Card> 

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={article4} alt="Card image" />
                            <Card.Body>
                                <a href='https://coder-coder.com/uncommonly-good-web-developer/' style={{textDecoration:'none', color: 'black'}}>
                                <Card.Title>How to be an uncommonly good web developer</Card.Title>                               
                                </a>                                
                            </Card.Body>
                        </Card>                   
                    </Row>
                    
                </div>
            </div>                     
        </div>        
        
    );
};