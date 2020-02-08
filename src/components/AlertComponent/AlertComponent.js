import React, {useState} from 'react';
import './AlertComponent.css';

const AlertComponent = (props) => {
    const [alertDisplay, alertHandler] = useState({display: 'block'})
    const displayValue = () => alertDisplay.display === 'none' ? 
        alertHandler({display: 'block'})
        : alertHandler({display: 'none'})

    return (
        <div className="alert" style={alertDisplay}>
            {props.url}
            <button onClick={displayValue}>OK</button>
        </div>
    )
}

export default AlertComponent;
