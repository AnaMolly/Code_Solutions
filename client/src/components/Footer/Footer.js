import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* Column1 */}
                    {/* <div className='col1'>
                        <h4>Code Solutions</h4>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li> 6 Queen's Park Cres W</li>
                        </ul>
                    </div> */}
                                                
                    {/* Column2 */}
                    {/* <div className='col2'>
                        <h4>Code Solutions</h4>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li> 6 Queen's Park Cres W</li>
                        </ul>
                    </div> */}
                        
                    {/* Column3 */}
                    {/* <div className='col3'>
                        <h4>Code Solutions</h4>
                        <ul className='list-unstyled'>
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li> 6 Queen's Park Cres W</li>
                        </ul>
                    </div> */}
                </div>
            <hr/>
            <div className="row">
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} Find Your Coder | K.A.D.D. Development Inc | All rights reserved 
                </p>
            </div>
        </div>
    </div>
    )
}

export default Footer;