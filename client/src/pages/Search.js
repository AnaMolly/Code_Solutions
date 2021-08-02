import React, {useState} from 'react';
import {render} from 'react-dom'
import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import DeveloperList from '../components/DeveloperList'
import FEDeveloperList from '../components/FrontEndList';

export default function SearchDev() {

    const [searchResults, setSearchResults] = useState('')
    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const fedevelopers = users.filter(user => user.primaryFocus === "Front-End")
    const bedevelopers = users.filter(user => user.primaryFocus === "Back-End")
    const fsdevelopers = users.filter(user => user.primaryFocus === "Full-Stack")

   
    
    const HandleSearch = (e) => {
    
        const { target } = e;
        const inputType = target.name;
       
        console.log(inputType)

    //     if (inputType==='frontend'){
    //         return(
    //                     <div>
    //                     {
    //                         <DeveloperList
    //                         fedevelopers={fedevelopers}
    //                         />
    //                     }
    //                     </div> 
    //         )
    //     } else if (inputType==='backend'){
    //         return(

    //             <div>{
    //                 <DeveloperList
    //                 bedevelopers={bedevelopers}
    //                 />
    //             }
    //             </div>
            
        
    // )
    //     } else {
    //         return(
                
    //                     <div>
    //                         <h1 className="mainh1" style={{color:'white'}}>Search Results:</h1>
    //                         {loading ? (
    //                         <div>Loading...</div>
    //                     ) : (
    //                         <DeveloperList
    //                         fsdevelopers={fsdevelopers}
    //                         />
    //                     )}
    //                     </div>
                
                
    //         )
    //     }

    }
    
   

    return(
        <div>
        <div className="searchdiv">
                <div style={{ backgroundColor:"#4AB8B1", margin:'40px 40px 0px 40px', border:'thin solid #4AB8B1', borderRadius:'3rem'}}>
                    <h1 className="mainh1" style={{padding:'60px 45px 45px 45px',color:'white'}}> What type of developer are you searching for?</h1>
                    <div className='searchbuttons'>
                        <a name='frontend' className="search-but" onClick={HandleSearch}>  Front-end</a>
                        <a name='backend'className="search-but" onClick={HandleSearch}> Back-end</a>
                        <a name='fullstack' className="search-but" onClick={HandleSearch}>  Full-stack</a>
                    </div>
                </div>
                <hr style={{opacity:'0.5', margin:'35px 160px 35px 160px', color:'lightgray'}}/>
                <div>
                            <h1 className="mainh1" style={{color:'white'}}>Search Results:</h1>
                            {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <FEDeveloperList
                            fedevelopers={fedevelopers}
                            />
                        )}
                        </div>
                
            </div>
        </div>
        
        
    )
}