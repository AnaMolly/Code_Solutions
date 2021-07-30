import React from 'react';
import heroimg from '../images/codesolutions.png'

import { useQuery } from '@apollo/client';
import {QUERY_DEVELOPERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';


export default function Main() {

    const { loading, data } = useQuery(QUERY_DEVELOPERS);
    console.log(data)
    const developers = data?.developers || [];
   

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
            <p className='pmain'>Here are some testimonials from developers and companies that have worked with us in the past.</p>
        </div>
      </div>
    );
  }
  