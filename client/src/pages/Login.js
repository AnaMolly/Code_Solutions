import React from 'react';
import { Form,Col, Row, Button } from 'react-bootstrap';


export default function Login() {
    return (
        <div className='login-container' style={{backgroundColor:'#294A66', border:'none', marginTop:'50px', padding:'30px 20px'}}>
        <p style={{color:'#F0A202', textAlign:'center'}}>
        Login to Use <span style={{fontWeight:'bold'}}>Find Your Coder</span>
        </p>
        <Form className='login-form' style={{backgroundColor:'#F0A202'}}>            
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type='username' placeholder='username'></Form.Control>
                <hr />
                <Form.Label>Passoword</Form.Label>
                <Form.Control type='password' placeholder='password'></Form.Control>
            </Form.Group>
            <Button style={{backgroundColor:'#294A66', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Login</Button>
        </Form>
        </div>
    );
  } 