import React from 'react';

import '../stylesheet.css';
import '../index.scss';
import {ReactComponent as CertificateLogo} from '../images/certificate.svg'


function App(){
    return(
        <div className="headerBase">
            Issac's certificates
            <CertificateLogo className="Iconlogo"/>
        </div>
    )
}

export default App;