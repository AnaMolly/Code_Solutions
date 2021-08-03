import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Signup() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    company: ''
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
    return (
        <div className='login-container' style={{backgroundColor:'#294A66', border:'none', marginTop:'30px', padding:'30px 20px'}}>
        <p style={{color:'#F0A202', textAlign:'center'}}>
        Create your <span style={{fontWeight:'bold'}}>Find My Coder</span> account!
        </p>
        <Form className='login-form' style={{backgroundColor:'#F0A202'}}  >            
            <Form.Group>
                
                <Form.Label style={{margin: '5px 0'}}>Full Name</Form.Label>
                <Form.Control type='text' placeholder='Full name' onChange={handleChange} name="fullName" value={formState.fullName} ></Form.Control>
                
                <Form.Label style={{margin: '5px 0'}}>Email</Form.Label>
                <Form.Control type='email' placeholder='email' onChange={handleChange} name="email" value={formState.email} ></Form.Control>
                
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type='password' placeholder='password' value={formState.password} onChange={handleChange}></Form.Control>
                
                <Form.Label style={{margin: '5px 0'}}>Developer/Client</Form.Label>
                <Form.Select name="role">
                    <option>Select user type</option>
                    <option value="developer">Developer</option>
                    <option value="buyer">Buyer</option>
                </Form.Select>

                <Form.Label style={{margin: '5px 0'}}>Company <span style={{fontStyle: 'italic'}}>(optional)</span></Form.Label>
                <Form.Control type='text' placeholder='company name' name="company" value={formState.company} onChange={handleChange}></Form.Control>                    
                  
            </Form.Group>
            <Button style={{backgroundColor:'#294A66', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}} onClick={handleFormSubmit}>Sign Up</Button>   
        </Form>
        </div>
    );
  } 