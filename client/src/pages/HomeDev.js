import React from 'react';
import '../App.css'
import { Col, Row, Button, Card } from 'react-bootstrap';
import article1 from '../images/article1.JPG'
import article2 from '../images/article2.JPG'
import article3 from '../images/article3.JPG'
import article4 from '../images/article4.jpg'

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';
import Auth from "../utils/auth";
export default function HomeDev() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const developers = users.filter(user => user.role === "developer")
    const user = Auth.getProfile()
    // console.log(user)

    // className="mainh1" className='developer-section col-12 col-md-10 my-3'
    // className="col-12 col-md-10 my-3"
    // style={{paddingTop:'85px',color:'white'}}

    return (
        <div>
            <div style={{backgroundColor: '#294a66ff', color: '#ffff', textAlign: 'center' ,width: '100%'}} >
                <div style={{padding: '20px 0' }}>
                    <Button href={`/profiledev/${user.data._id}`} style={{ backgroundColor: '#F0A202', border: 'none' }}>
                        Finish Your Profile
                    </Button>
                </div>
                <div>
                    <h1 >
                        Developers
                    </h1>
                    <div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <DeveloperList
                                developers={developers}
                            />
                        )}
                    </div>                    
                </div>
            </div>
            
            {/* Articles Section */}
            <div className='articleSection'>
                <h1 className="mainh1">Articles on how you can improve your online presence</h1>
                <div>
                    <div style= {{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>                        
                            <a href='https://localbizguru.com/blog/improve-business-online-presence-in-2021/' style={{ textDecoration: 'none', color: 'black' }}>
                            <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                <Card.Img variant="top" src={article1} alt="article image" />
                                <Card.Body>
                                    
                                        <Card.Title>12 Effective Ways To Improve Your Business’s Online Presence In 2021</Card.Title>
                                    
                                </Card.Body>                            
                            </Card>
                            </a>                        
                            <a href='https://www.omnesgroup.com/online-presence-as-junior-developer/' style={{ textDecoration: 'none', color: 'black' }}>
                            <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                <Card.Img variant="top" src={article2} alt="article image" />
                                <Card.Body>
                                    
                                        <Card.Title>Build an Online Presence and Make Connections as a Junior Developer: How to Start?</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                            </a>
                            <a href='https://eightfold.io/blog/tips-for-a-junior-front-end-developer/' style={{ textDecoration: 'none', color: 'black' }}>
                                <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                    <Card.Img variant="top" src={article3} alt="article image" />
                                    <Card.Body>
                                        
                                            <Card.Title>Tips for a Junior Front End Developer</Card.Title>
                                        
                                    </Card.Body>
                                </Card>
                            </a>
                            <a href='https://coder-coder.com/uncommonly-good-web-developer/' style={{ textDecoration: 'none', color: 'black' }}>
                            <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                <Card.Img variant="top" src={article4} alt="article image" />
                                <Card.Body>
                                    
                                        <Card.Title>How to be an uncommonly good web developer</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                            </a>                        
                    </div>
                </div>
            </div>
        </div>
    );
};