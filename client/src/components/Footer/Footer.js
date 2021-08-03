import React from 'react';
import '../Footer/Footer.css';
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'  >
                <Row style={{textAlign:'center'}}>
                    {/* Column1 */}
                    <Col>
                        <h3>Contact:</h3>
                        <ul className='footer-items'>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href=''>
                                Github <AiFillGithub style={{ marginRight: '15px' }} />
                                </a>
                            </li>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href=''>
                                Twitter <AiFillTwitterCircle style={{ marginRight: '15px' }} />
                                </a>
                            </li>
                            <li>
                                <a style={{color: '#ffff', fontSize: '20px', textDecoration: 'none'}} href=''>
                                Instagram <AiFillInstagram style={{ marginRight: '15px' }} />
                                </a>                                
                            </li>
                        </ul>
                    </Col>
                                                
                    {/* Column2 */}
                    {/* <Col>
                        <h4>Code Solutions</h4>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li> 6 Queen's Park Cres W</li>
                        </ul>
                    </Col> */}
                        
                    {/* Column3 */}
                    <Col>
                        <h4>Find My Coder</h4>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li> 6 Queen's Park Cres W</li>
                        </ul>
                    </Col>
                </Row>
            <hr/>
            <Row style={{textAlign:'center'}} >
                <p>
                    &copy;{new Date().getFullYear()} Find Your Coder | K.A.D.D. Development Inc | All rights reserved 
                </p>           
            </Row>
        </div>
    </div>
    )
}

export default Footer;