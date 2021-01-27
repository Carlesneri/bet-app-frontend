import React, { Component } from 'react'
import './PartidoTennis.css'

class PartidoTennis extends Component{

    render(){    
        const {partido} = this.props  
        const totalPlayer1 = Math.round(100 * (100*partido.player1.player1Coef/partido.player1.player1Matches)) / 100
        const totalPlayer2 = Math.round(100 * (100*partido.player2.player2Coef/partido.player2.player2Matches)) / 100
        return (
            <div className="partido-tennis">
                <div className="partido-title">
                    <a className="partido-name" href={partido.urlMatch} rel="nofollow noopener noreferrer" target="_blank">
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
