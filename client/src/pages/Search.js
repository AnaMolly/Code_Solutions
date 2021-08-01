import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_DEVELOPERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function SearchDev() {

    const { loading, data } = useQuery(QUERY_DEVELOPERS);
    console.log(data)
    const developers = data?.developers || [];

    return(
        <div className="searchdiv">
        <h1 className="mainh1" style={{padding:'35px'}}> What type of developer are you searching for?</h1>
        <div className='searchbuttons'>
            <a name='frontend' className="front-end-but">  Front-end</a>
            <a name='backend'className="front-end-but"> Back-end</a>
            <a name='fullstack' className="front-end-but">  Full-stack</a>
        </div>
        <hr style={{opacity:'0.1', margin:'35px 160px 35px 160px'}}/>
        <div>
            <h1 className="mainh1">Search Results:</h1>
              {loading ? (
            <div>Loading...</div>
          ) : (
            <DeveloperList
              developers={developers}
            />
          )}
        </div>
        </div>
        
    )
}