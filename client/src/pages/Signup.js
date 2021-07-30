import React from 'react';
import { Form, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'

export default function Signup() {
    return (
        <div className='login-container' style={{backgroundColor:'#294A66', border:'none', marginTop:'30px', padding:'30px 20px'}}>
        <p style={{color:'#F0A202', textAlign:'center'}}>
        Create your <span style={{fontWeight:'bold'}}>Find Your Coder</span> account!
        </p>
        <Form className='login-form' style={{backgroundColor:'#F0A202'}}>            
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='first name' placeholder='first name'></Form.Control>            
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='last name' placeholder='last name'></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='email'></Form.Control>
                <Form.Label>Username</Form.Label>
                <Form.Control type='username' placeholder='username'></Form.Control>
                <Form.Label>User Type</Form.Label>
                <Form.Select>
                    <option>Select user type</option>
                    <option value="dev">Developer</option>
                    <option value="buyer">Buyer</option>
                </Form.Select>
                <Form.Label>Business Name (Optional)</Form.Label>
                <Form.Control type='business name' placeholder='business name'></Form.Control>                    
                  
            </Form.Group>
            <Button style={{backgroundColor:'#294A66', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}}>Sign Up</Button>   
        </Form>
        </div>
    );
  } 