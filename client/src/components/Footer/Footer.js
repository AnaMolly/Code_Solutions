import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                {/* Column1 */}
                <div className='col1'></div>
                    <h4>Code Solutions</h4>
                    <ul className='list-unstyled'>
                        <li>123-456-7890</li>
                        <li>Toronto, Canada</li>
                        <li> 6 Queen's Park Cres W</li>
                    </ul>                        
                {/* Column2 */}
                <div className='col2'></div>
                    <h4>Code Solutions</h4>
                    <ul className='list-unstyled'>
                        <li>123-456-7890</li>
                        <li>Toronto, Canada</li>
                        <li> 6 Queen's Park Cres W</li>
                    </ul>
                {/* Column3 */}
                <div className='col3'></div>
                    <h4>Code Solutions</h4>
                    <ul className='list-unstyled'>
                        <li>123-456-7890</li>
                        <li>Toronto, Canada</li>
                        <li> 6 Queen's Park Cres W</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="row">
                <p className='col-sm'>
                    &copy;{new Date().getFullYear()} K.A.D.D. Development | All rights reserved | Terms of Service | Privacy
                </p>

            </div>
        </div>
    )
}

export default Footer;