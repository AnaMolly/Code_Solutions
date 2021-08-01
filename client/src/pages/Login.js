import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_DEVELOPER, LOGIN_BUYER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_DEVELOPER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  }; 

    return (
        <div className='login-container' style={{backgroundColor:'#294A66', border:'none', marginTop:'50px', padding:'30px 20px'}}>
        <p style={{color:'#F0A202', textAlign:'center'}}>
        Login to Use <span style={{fontWeight:'bold'}}>Find Your Coder</span>
        </p>
        <Form className='login-form' style={{backgroundColor:'#F0A202'}}>            
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' type='username' placeholder='username' value={formState.username} onChange={handleChange}></Form.Control>
                <hr />
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type='password' placeholder='password' value={formState.password} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button style={{backgroundColor:'#294A66', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}} onClick={handleFormSubmit}>Developer Login</Button>
        </Form>
        </div>
    );
  } 