import React from 'react';
import heroimg from '../images/codesolutions.png'

import Auth from '../../src/utils/auth';

import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';
import signupimg from '../images/signup.png'
import testimonialimg from '../images/testimonial.png'


export default function Main() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const developers = users.filter(user => user.role === "developer")
   

    return (
      <div className="contentpages">
        <div className="hero" style={{ position:'relative', textAlign:'center', backgroundColor: '#F0A202'}}> 
                <img src={heroimg} alt="coder" style={{maxWidth: '100%', height:'auto', padding: '20px'}}/>                
                {Auth.loggedIn() ? ([
                  <>  
                  </>
                ]) : ([
                  <a className="but2"href="/signup">Sign Up</a>,
                  <a className="but1" href='/login'>Login</a>
                ])}
                
        </div>
        <div className="aboutus">
            <h1 className="mainh1">About <span style={{fontStyle:"italic", fontWeight:'400'}}>Find My Coder</span></h1>
            <p className='pmain'>Find My Coder is a platform that connects web developers with potential clients or companies.</p>
            <br/>
            <p className='pmain'>Find My Coder allows developers to create and edit a profile that showcases their skills, while clients are able to search for and view web developers and their profiles.</p>
       <br/>
       <p className='pmain'> <a href="/signup" style={{textDecoration:'none', color:'#f0a202', fontWeight:'400'}}>Sign up</a> to get started today!</p>
       <div style={{display:'flex', justifyContent:'center'}}>
                    <img src={signupimg} alt='developer' style={{maxWidth:'600px'}}></img>
                    </div>
        </div>
        <div className="devmain">
            <h1  className="mainh1">Our developers</h1>
            <p className='pmain' style={{color:'#f0a202'}}> Here at  <span style={{fontStyle:"italic", fontWeight:'400'}}>Find My Coder</span>, we've got tons of front-end, back-end and full-stack developers with impressive credentials and lots of experience! </p>
            <hr style={{opacity:'0.1'}}/>
            <p className='pmain' style={{textAlign:'center', paddingTop:'20px'}}>Here are some of our talented developers ready for hire:</p>
            <div className="col-12 col-md-10 my-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <DeveloperList
                  developers={developers}
                />
              )}
            </div>
            
            
           
        </div>
        <div className="testimonials">
            <h1 className="mainh1">Testimonials</h1>
            
            <p className='pmain' style={{padding:'30px', color:'#294a66', fontSize:'35px', marginBottom:'30px'}}>Here are some testimonials from developers and companies that have worked with us in the past:</p>
            <div style={{display:'flex', alignItems:'center'}}>
                    <img src={testimonialimg} alt='thumbs up' style={{maxWidth:'600px'}}></img>
                    <div className='testimonialcon'>
                    <p className="testimonialtext">
                      "Find My Coder is an absolutely amazing application! I was able to find and connect with a full-stack web developer who went above and beyond to complete my company's website!" <br/><span className="testname">-Chris Bogard, Pet Supplies Inc. </span>
                    </p>
                    <p className="testimonialtext">
                      "Find My Coder is such a useful platform! It has become my go-to app for meeting new clients and acquiring new projects. So happy to have found FMC!" <br/><span className="testname">-Jessie Smith, Freelance Front-End Developer. </span>
                    </p>
                    </div>
                    
              </div>
        </div>
      </div>
    );
  }
  