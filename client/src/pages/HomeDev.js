import React from 'react';
import profileDefault from '../images/DefaultProfile.jpg';
import { Col, Row, Button, Card } from 'react-bootstrap';

// import { useQuery } from '@apollo/client';
// import {QUERY_DEVELOPERS } from '../utils/queries';
// import DeveloperList from '../components/DeveloperList';

export default function HomeDev() {

    // const { loading, data } = useQuery(QUERY_DEVELOPERS);
    // console.log(data)
    // const developers = data?.developers || [];

    return (
        <div className='contentPage'>
            <div className='developer-section'>
                <Button>
                    Finish Your Profile
                </Button>
                <h2>
                    Developers
                </h2>
                {/* <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <DeveloperList
                        developers={developers}
                        />
                    )}
                </div> */}
                <Row>
                <Card className='m-5 p-3' style={{ width: '18rem', backgroundColor:'#294A66'}}>
                    <Card.Img variant="top" src={profileDefault} alt='profile picture' />
                    <Card.Body>
                        <Card.Title>Tom Hanks</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">View Profile</Button>
                    </Card.Body>
                </Card>
                <Card className='m-5 p-3' style={{ width: '18rem', backgroundColor:'#294A66'}}>
                    <Card.Img variant="top" src={profileDefault} alt='profile picture' />
                    <Card.Body>
                        <Card.Title>James Bond</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">View Profile</Button>
                    </Card.Body>
                </Card>
                <Card className='m-5 p-3' style={{ width: '18rem', backgroundColor:'#294A66' }}>
                    <Card.Img variant="top" src={profileDefault} alt='profile picture' />
                    <Card.Body>
                        <Card.Title>Stewart Little</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">View Profile</Button>
                    </Card.Body>
                </Card>
                </Row>
            </div>
            <div className='articleSection'>
                <h1 className="mainh1">*Articles on how you can improve your online presence*</h1>
                <p className='pmain'>Here are some testimonials from developers and companies that have worked with us in the past.</p>
            </div>                     
        </div>
        
        
    );
};