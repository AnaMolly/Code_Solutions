import React from 'react';
import heroimg from '../images/codesolutions.png'
import { Card, Row, Button } from "react-bootstrap"



export default function Main() {
    return (
      <div className="contentpages">
        <div className="hero" style={{ position:'relative', textAlign:'center', backgroundColor: '#F0A202'}}> 
                <img src={heroimg} alt="coder" style={{maxWidth: '100%', height:'auto', padding: '20px'}}/>
                <a href="/signup" className="but">Sign Up</a>
                <button className="but1">Login</button>
        </div>
        <div className="aboutus">
            <h1 className="mainh1">About <span style={{fontStyle:"italic", fontWeight:'400'}}>Find My Coder</span></h1>
            <p className='pmain'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div className="devmain">
            <h1  className="mainh1">Our developers</h1>
            <p className='pmain' style={{color:'#f0a202'}}> Here at  <span style={{fontStyle:"italic", fontWeight:'400'}}>Find My Coder</span>, we've got tons of front-end, back-end and full-stack developers with impressive credentials and lots of experience! </p>
            <hr style={{opacity:'0.1'}}/>
            <p className='pmain' style={{textAlign:'center', paddingTop:'20px'}}>Here are some of our talented developers ready for hire:</p>
            <Row className="developersmain" style={{padding:'10px 30px 30px 30px'}}> 
       
            <Card className="m-4" style={{ width: "18em" }}>
                <Card.Body style={{ textAlign:'center'}}>
                    <Card.Title  style={{ color:'black', padding:'10px'}}>Sandy Sally</Card.Title>
                    <Card.Img variant="top" src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI" style={{maxWidth:'284px'}}/>
                    <Card.Text  style={{ color:'black', paddingTop:'16px'}}>I can build front-end websites with React!</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Hourly rate:</Card.Subtitle>
                    <Button variant="primary" target="_blank" style={{ margin: '10px',backgroundColor:'#F0A202', border:'none'}}>
                    More Info
                    </Button>
                </Card.Body>
            </Card>
            <Card className="m-4" style={{ width: "18em" }}>
                <Card.Body style={{ textAlign:'center'}}>
                    <Card.Title  style={{ color:'black', padding:'10px'}}>Rocky Randall</Card.Title>
                    <Card.Img variant="top" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" style={{maxWidth:'284px'}}/>
                    <Card.Text  style={{ color:'black', paddingTop:'16px'}}>I can build a rockin' back end with my Node and Express skills!</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Hourly rate:</Card.Subtitle>
                    <Button variant="primary" target="_blank" style={{ margin: '10px',backgroundColor:'#F0A202', border:'none'}}>
                    More Info
                    </Button>
                </Card.Body>
            </Card>  
            </Row>
           
        </div>
        <div className="testimonials">
            <h1 className="mainh1">Testimonials</h1>
            <p className='pmain'>Here are some testimonials from developers and companies that have worked with us in the past.</p>
        </div>
      </div>
    );
  }
  