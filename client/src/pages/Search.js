import React from 'react';
import { useQuery } from '@apollo/client';
import {QUERY_USERS } from '../utils/queries';
import FEDeveloperList from '../components/FrontEndList';
import BEDeveloperList from '../components/BackEndList';
import FSDeveloperList from '../components/FullStackList';
import developerimg from '../images/developer.png'


export default function SearchDev() {


    const {  data } = useQuery(QUERY_USERS);
    console.log(data)
    const users = data?.users || [];
    const fedevelopers = users.filter(user => user.primaryFocus === "Front-End")
    const bedevelopers = users.filter(user => user.primaryFocus === "Back-End")
    const fsdevelopers = users.filter(user => user.primaryFocus === "Full-Stack")

   
    
    // const HandleSearch = (e) => {
    
    //     const { target } = e;
    //     const inputType = target.name;
       
    //     console.log(inputType)

    //     if (inputType==='frontend'){
    //         return(
    //                     <div>
    //                     {
    //                         <FEDeveloperList
    //                         fedevelopers={fedevelopers}
    //                         />
    //                     }
    //                     </div> 
    //         )
    //     } else if (inputType==='backend'){
    //         return(

    //             <div>{
    //                 <BEDeveloperList
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
    //                         <FSDeveloperList
    //                         fsdevelopers={fsdevelopers}
    //                         />
    //                     )}
    //                     </div>
                
                
    //         )
    //     }

    // }
    
   

    return(
        <div style={{backgroundColor:'#f0a202', padding:'45px'}}>
        <div className="searchdiv">
                <div style={{ margin:'40px 40px 0px 40px'}}>
                    
                
                    <h1 className="mainh1" style={{padding:'20px 45px 45px 45px', color:'white'}}> What type of web developer are you searching for?</h1>
                    
                    <div className='searchbuttons'>
                        <a name='frontend' className="search-but" href='#frontenddevs'>  Front-end</a>
                        <a name='backend'className="search-but" href='#backenddevs'> Back-end</a>
                        <a name='fullstack' className="search-but" href='#fullstackdevs'>  Full-stack</a>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <img src={developerimg} alt='developer' style={{maxWidth:'600px'}}></img>
                    </div>
                </div>
               
            </div>
            <hr style={{opacity:'0.5', margin:'35px 160px 35px 160px', color:'lightgray'}}/>
            <div className='searchresults'>

                   
                    <div className='sr'>  
                    <h1 className='mainh1' style={{marginTop:'25px', color: 'white'}} id='frontenddevs'>Front-End Developers:</h1>
                        <FEDeveloperList
                            fedevelopers={fedevelopers} />
                    </div>

                    <div className='sr'>  
                    <h1  className='mainh1'  style={{marginTop:'25px', color: 'white'}} id='backenddevs' >Back-End Developers:</h1>
                        <BEDeveloperList
                            bedevelopers={bedevelopers} />
                    </div>

                    <div className='sr'>  
                    <h1  className='mainh1' style={{marginTop:'25px', color: 'white'}} id='fullstackdevs' >Full-Stack Developers:</h1>
                        <FSDeveloperList
                            fsdevelopers={fsdevelopers} />
                    </div>

            </div>
                
        </div>
        
        
    )
}