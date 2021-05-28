import React from 'react';

import '../style/error.css'

const Error = (props) => {
    return(
    <div id='error'>
        {props.mensaje}
    </div>
    )
}

 
export default Error;