import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function SearchDev() {

    
    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const developers = users.filter(user => user.primaryFocus === "Front-End")

    return(
        <div>
        <div className="searchdiv">
                <div style={{ backgroundColor:"#4AB8B1", margin:'40px 40px 0px 40px', border:'thin solid #4AB8B1', borderRadius:'3rem'}}>
                    <h1 className="mainh1" style={{padding:'60px 45px 45px 45px',color:'white'}}> What type of developer are you searching for?</h1>
                    <div className='searchbuttons'>
                        <a name='frontend' className="search-but">  Front-end</a>
                        <a name='backend'className="search-but"> Back-end</a>
                        <a name='fullstack' className="search-but">  Full-stack</a>
                    </div>
                </div>
                <hr style={{opacity:'0.5', margin:'35px 160px 35px 160px', color:'lightgray'}}/>
                <div>
                    <h1 className="mainh1" style={{color:'white'}}>Search Results:</h1>
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