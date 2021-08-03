import React from 'react';

import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList';

export default function HomeBuyer() {

    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const developers = users.filter(user => user.role === "developer")


    return (
        <div className="homeclientpage">
          <h1 className="mainh1" style={{paddingTop:'85px',color:'white'}}>Our Web Developers</h1>
          
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
      );
}