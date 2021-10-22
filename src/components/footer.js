import React from 'react';

import '../index.scss';
import ibmcloud_image from '../images/ibmcloud.png'
import ibmcarbondesign from '../images/ibmcarbondesign.png'
import {ReactComponent as LinkedInLogo} from '../images/linkedin.svg'
import {ReactComponent as GithubLogo} from '../images/github.svg'
import {ReactComponent as IBMLogo} from '../images/ibm.svg'


function App(){
    return(
        <div className='footerBase'>
                <div className='FooterLeftContainer'>
                    <em style={{fontSize:"3vh"}}>Powered by:</em>
                    <IBMLogo className="ibmlogo"/>
                </div>
                <div className='FooterRightContainer'>
                    <LinkedInLogo className="footerContactlogo" onClick={()=> window.open("https://hk.linkedin.com/in/issacto", '_blank').focus()}/>
                    <GithubLogo className="footerContactlogo" onClick={()=> window.open("https://github.com/issacto", '_blank').focus()}/>
                </div>
        </div>
    )
}

export default App;