import React from 'react';
import star from '../../images/star.png'
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {    
    return (
    <div className="navi">
        <div className="star">
            <NavLink to="/">
                <img src={star} alt="home"/>
            </NavLink>
        </div>
        <div className="navi-link">
            <NavLink to="/comparator"  activeClassName="chosen">
                <p>
                    Comparator
                </p>
            </NavLink>
            <NavLink to="/drop" activeClassName="chosen">
                <p>
                    Drop
                </p>    
            </NavLink>
        </div>
    </div>
    )
}

export default Nav;