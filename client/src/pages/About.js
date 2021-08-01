import React from 'react';
import { Col, Row, Button, Card } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function About() {
    
    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const developers = data?.developers || [];

    return (
        <div>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
                <h2>About Find My Coder</h2>
            </div>
            <div style={{textAlign: 'center', padding: '20px 0'}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="aboutDev">
                <h1  className="mainh1">About Developers</h1>
                <hr style={{opacity:'0.1'}}/>
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
        </div>
    )
}