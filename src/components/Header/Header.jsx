import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
   
   render(){
        return(
            <div>
                <nav className="navbar Navbar">
                    <span>
                        <img className="star" src="./images/star.png" alt="star"></img>
                    </span>
                    <button onClick={this.startScrape} id="btn-iniciar" className="btn btn-outline-info iniciar">
                        Iniciar
                    </button>
                    <span>    
                        <img className="admin-icon" src="https://useiconic.com/open-iconic/svg/dashboard.svg" alt="admin-icon"></img>
                    </span>
                </nav>
            </div>
        )
    }
}

export default Header;