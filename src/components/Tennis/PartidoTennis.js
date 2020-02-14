import React, { Component } from 'react'
import './PartidoTennis.css'

class PartidoTennis extends Component{

    render(){    
        const {partido} = this.props  
        const totalPlayer1 = (100*partido.player1.player1Coef/partido.player1.player1Matches).toFixed(2)
        const totalPlayer2 = (100*partido.player2.player2Coef/partido.player2.player2Matches).toFixed(2)
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
                                {partido.player1.player1Matches} partidos
                            </div>
                            <div>
                                Total: {totalPlayer1} %
                            </div>
                        </div>
                        <div className="player">
                            <div>
                                Coeficient: {partido.player2.player2Coef}
                            </div>
                            <div>
                                {partido.player2.player2Matches} partidos
                            </div>
                            <div>
                                Total: {totalPlayer2} %
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