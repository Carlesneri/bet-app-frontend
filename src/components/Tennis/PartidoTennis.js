import React, { Component } from 'react'
import './PartidoTennis.css'

class PartidoTennis extends Component{

    render(){    
        const {partido} = this.props  
        return (
            <div className="partido-tennis">
                <div className="partido-title">
                    <a className="partido-name" href={partido.urlMatch} rel="noopener noreferrer" target="_blank">
                        {partido.name}
                    </a>
                </div>
                <hr />
                <div className="partido-body">
                    <div className="tennis-players">
                        <div className="player">
                            <div>
                                Coeficient: {partido.player1.player1Coef}
                            </div>
                            <div>
                                Num. partidos: {partido.player1.player1Matches}
                            </div>
                        </div>
                        <div className="player">
                            <div>
                                Coeficient: {partido.player2.player2Coef}
                            </div>
                            <div>
                                Num. partidos: {partido.player2.player2Matches}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default PartidoTennis;
