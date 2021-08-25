import React from 'react';
import '../App.css'

import {Button, Card } from 'react-bootstrap';
import article1 from '../images/article1.JPG'
import article2 from '../images/article2.JPG'
import article3 from '../images/article3.JPG'
import article4 from '../images/article4.jpg'

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

import BuyersList from '../components/BuyersList'

import Auth from "../utils/auth";
import HomeDevList from '../components/HomeDevList';

export default function HomeDev() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const developers = users.filter(user => user.role === "developer")
    const clients = users.filter(user => user.role === "client")
    const user = Auth.getProfile().data
    console.log(user)
    return (
        <div>
            <div style={{backgroundColor: '#294a66ff', color: '#ffff', textAlign: 'center', width: '100%', padding: '0'}} >
                <div style={{padding: '20px 0' }}>
                    <Button className="finishprofile" href={`/profiledev/${user._id}`} style={{ backgroundColor: '#F0A202', border: 'none', padding:'15px', fontSize:'20px', marginTop:'20px' }}>
                        Finish Your Profile
                    </Button>
                </div>
                <div>
                    <h1 className='mainh1' style={{marginTop:'40px'}}>
                        Some Developers
                    </h1>
                    <div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <HomeDevList
                                developers={developers}
                                user={user}
                            />
                        )}
                    </div>                    
                </div>
                <div>
                    <h1 className='mainh1' style={{marginTop:'40px'}} >
                        Our Buyers 
                    </h1>
                    <div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <BuyersList
                                clients={clients}
                            />
                        )}
                    </div>                    
                </div>
            </div>
            
            <div className='articleSection'>
                <h1 className="mainh1" style={{margin:'30px 10px 50px 10px'}}>Articles on how you can improve your online presence</h1>
                <div>
                    <div style= {{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>                        
                        <a href='https://localbizguru.com/blog/improve-business-online-presence-in-2021/' style={{ textDecoration: 'none', color: 'black', margin:'10px'}}>
                            <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                <Card.Img variant="top" src={article1} alt="article image" />
                                <Card.Body>
                                    
                                        <Card.Title>12 Effective Ways To Improve Your Business’s Online Presence In 2021</Card.Title>
                                    
                                </Card.Body>                            
                            </Card>
                        </a>                        
                        <a href='https://www.omnesgroup.com/online-presence-as-junior-developer/' style={{ textDecoration: 'none', color: 'black', margin:'10px' }}>
                            <Card className='article-cards' style={{ width: '18rem', padding: '0' }}>
                                <Card.Img variant="top" src={article2} alt="article image" />
                                <Card.Body>
                                    
                                        <Card.Title>Build an Online Presence and Make Connections as a Junior Developer: How to Start?</Card.Title>
                                    
                                </Card.Body>
                            </Card>
                        </a>
                            <a href='https://eightfold.io/blog/tips-for-a-junior-front-end-developer/' style={{ textDecoration: 'none', color: 'black', margin:'10px' }}>
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