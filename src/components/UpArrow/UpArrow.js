import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import './UpArrow.css'

const UpArrow = () => (
    <div className="up-arrow" onClick={handleClick}>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
    </div>
)

const handleClick = () => {
    window.scrollTo(0,0)
}

export default UpArrow;