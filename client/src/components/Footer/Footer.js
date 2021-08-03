import React from 'react';
import '../Footer/Footer.css';
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'  >
                <Row style={{textAlign:'center'}}>                    
                    <Col>
                        <h3>Find My Coder</h3>
                        <ul className='footer-items'>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href='https://github.com/AnaMolly/Code_Solutions'>
                                Github <AiFillGithub style={{ marginRight: '15px' }} />
                                </a>
                            </li>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href='https://twitter.com/404'>
                                Twitter <AiFillTwitterCircle style={{ marginRight: '15px' }} />
                                </a>
                            </li>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href='https://instagram.com/404'>
                                Instagram <AiFillInstagram style={{ marginRight: '15px' }} />
                                </a>                                
                            </li>
                        </ul>
                    </Col>                    
                </Row>
            <hr/>
            <Row style={{textAlign:'center'}} >
                <p>
                    &copy;{new Date().getFullYear()} Find My Coder | K.A.D.D. Development Inc | All rights reserved 
                </p>           
            </Row>
        </div>
    </div>
    )
}
export default Footer;