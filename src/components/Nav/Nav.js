import React, { useState } from 'react';
import star from '../../images/star.png'
import { NavLink } from 'react-router-dom';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalculator} from '@fortawesome/free-solid-svg-icons'
import Calculator from '../Calculator/Calculator';

const Nav = () => {   
    const scrollTop = () => window.scrollTo(0, 0)
    // const naviLinkElement = document.querySelectorAll('.navi-link')
    // naviLinkElement.forEach( link => {
    //     link.addEventListener('click', () => window.scrollTo(0, 0))
    // })
    const [toolsStyle, setToolsStyle] = useState({display: 'none'})
    const displayValue = () => toolsStyle.display === 'none' ? 
    setToolsStyle({display: 'block'}) : setToolsStyle({display: 'none'})

    return (
        <div className="navi">
            <div className="star-links-group">
                <div className="star">
                    <NavLink to="/">
                        <img src={star} alt="home"/>
                    </NavLink>
                </div>
                <div className="navi-links" onClick={scrollTop}>
                    <div className="navi-link">
                        <NavLink to="/comparator" activeClassName="chosen">
                            <p>
                                Comparator
                            </p>
                        </NavLink>
                    </div>
                    <div className="navi-link">
                        <NavLink to="/matches" activeClassName="chosen">
                            <p>
                                Matches
                            </p>
                        </NavLink>
                    </div>
                    {/* <div className="navi-link">
                        <NavLink to="/drop" activeClassName="chosen">
                            <p>
                                Drop
                            </p>    
                        </NavLink>
                    </div>
                    <div className="navi-link">
                        <NavLink to="/tennis" activeClassName="chosen">
                            <p>
                                Tennis
                            </p>    
                        </NavLink>
                    </div>
                    <div className="navi-link">
                        <NavLink to="/op" activeClassName="chosen">
                            <p>
                                Op
                            </p>    
                        </NavLink>
                    </div>
                    <div className="navi-link">
                        <NavLink to="/last" activeClassName="chosen">
                            <p>
                                Last
                            </p>    
                        </NavLink>
                    </div> */}
                </div>
            </div>
            <div className="tools-group">
                <div 
                    className="tool-icon" 
                    onClick={displayValue}
                    alt="tools" 
                    title="tools">
                    <FontAwesomeIcon icon={faCalculator} />
                </div>
                <div style={toolsStyle} className="tool-content">
                    <Calculator displayValue={displayValue}/>
                </div>
            </div>
        </div>
    )
}

export default Nav;