import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
            
      if (data.login.user.role === "developer") {
        window.location.assign('/homedev');
      } else {
        window.location.assign('/homecli');
      }

    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  }; 

  return (
    <div style={{backgroundColor:'#f2f7f2ff', padding: '10px'}}>
      <div className='login-container' style={{backgroundColor:'#294A66', border:'none', marginTop:'110px', padding:'30px 20px 50px'}}>
        <p style={{color:'#F0A202', textAlign:'center', fontSize: '30px'}}>
        Login to Use <span style={{fontWeight:'bold'}}>Find Your Coder</span>!
        </p>
        <div>
        <Form className='login-form' style={{backgroundColor:'#F0A202'}}>            
            <Form.Group>
                <Form.Label style={{margin: '5px 0', fontSize: '20px'}}>Email</Form.Label>
                <Form.Control name='email' type='email' placeholder='email' value={formState.email} onChange={handleChange}></Form.Control>
                <hr/>
                <Form.Label style={{fontSize: '20px'}}>Password</Form.Label>
                <Form.Control name='password' type='password' placeholder='password' value={formState.password} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button style={{backgroundColor:'#294A66', border:'none', fontSize:'20px',padding:'12px 24px',marginTop:'15px'}} onClick={handleFormSubmit}>Login</Button>
        </Form>
        </div>      
      </div>
    </div>
  );
};