import React from 'react';
import { Row, Card } from 'react-bootstrap';

import kevin from '../images/kevin.png'
import daniel from '../images/daniel.png'
import analia from '../images/analia.png'
import daryl from '../images/daryl.png'
import Image from 'react-bootstrap/Image'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


export default function About() {

    return (
        <div>
            <div style={{backgroundColor:'#294a66ff', color: 'white'}} >
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <h2>About <span style={{fontWeight:'bold'}}>Find My Coder</span></h2>
                </div>
                <div style={{ textAlign: 'center', padding: '20px 0'}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            

            <div className="aboutDev">
                <h1 className="mainh1">About Developers</h1>
                <div className='about-cards'>
                    <Row style={{ justifyContent: 'space-evenly' }}>
                        <Card style={{ backgroundColor:'#f2f7f2ff', width: '18rem', padding: '10px' }}>
                            <Image variant="top" src={kevin} className='p-3' roundedCircle />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Kevin Crawford | <span style={{ fontSize: '18px' }}>Full-Stack</span></Card.Title>
                                <Card.Text style={{ color: 'black', fontStyle: 'italic' }} >
                                    "How many programmers does it take to change a light bulb?
                                    None – It’s a hardware problem "
                                </Card.Text>
                                <Row>
                                    <div style={{ color: 'black', fontSize: '50px', textAlign: 'center' }}>
                                        <a href=''>
                                            <AiFillGithub style={{ marginRight: '15px' }} />
                                        </a>
                                        <a href=''>
                                            <AiFillLinkedin style={{ marginLeft: '15px' }} />
                                        </a>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor:'#f2f7f2ff', width: '18rem', padding: '10' }}>
                            <Image variant="top" src={daryl} className='p-3' roundedCircle />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Daryl Nauman | <span style={{ fontSize: '18px' }}>Full-Stack</span></Card.Title>
                                <Card.Text style={{ color: 'black', fontStyle: 'italic' }} >
                                "Why do programmers always mix up Halloween and Christmas?
                                Because Oct 31 equals Dec 25."
                                </Card.Text>
                                <Row>
                                    <div style={{ color: 'black', fontSize: '50px', textAlign: 'center' }}>
                                        <a href=''>
                                            <AiFillGithub style={{ marginRight: '15px' }} />
                                        </a>
                                        <a href=''>
                                            <AiFillLinkedin style={{ marginLeft: '15px' }} />
                                        </a>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor:'#f2f7f2ff', width: '18rem', padding: '10' }}>
                            <Image variant="top" src={analia} className='p-3' roundedCircle />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Analia Molly | <span style={{ fontSize: '18px' }}>Full-Stack</span></Card.Title>
                                <Card.Text style={{ color: 'black', fontStyle: 'italic' }} >
                                    "The computer is mightier than the pen, the sword, and usually, the programmer."
                                </Card.Text>
                                <Row>
                                    <div style={{ color: 'black', fontSize: '50px', textAlign: 'center' }}>
                                        <a href=''>
                                            <AiFillGithub style={{ marginRight: '15px' }} />
                                        </a>
                                        <a href=''>
                                            <AiFillLinkedin style={{ marginLeft: '15px' }} />
                                        </a>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ backgroundColor:'#f2f7f2ff', width: '18rem', padding: '10' }}>
                            <Image variant="top" src={daniel} className='p-3' roundedCircle />
                            <Card.Body>
                                <Card.Title style={{ color: 'black' }}>Daniel Ogunlana | <span style={{ fontSize: '18px' }}>Full-Stack</span></Card.Title>
                                <Card.Text style={{ color: 'black', fontStyle: 'italic' }} >
                                    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds."
                                </Card.Text>
                                <Row>
                                    <div style={{ color: 'black', fontSize: '50px', textAlign: 'center' }}>
                                        <a href=''>
                                            <AiFillGithub style={{ marginRight: '15px' }} />
                                        </a>
                                        <a href=''>
                                            <AiFillLinkedin style={{ marginLeft: '15px' }} />
                                        </a>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
        </div>
    )
}