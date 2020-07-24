import React, { Component } from 'react'
import './PartidoOp.css'

class PartidoOp extends Component{

    render(){    
        const {partido} = this.props  
        const localQM1 = Math.round(partido.localQM1 * 100)/100
        const visitanteQM1 = Math.round(partido.visitanteQM1 * 100)/100
        const localQM2 = Math.round(partido.localQM2 * 100)/100
        const visitanteQM2 = Math.round(partido.visitanteQM2 * 100)/100
        let url = partido.url
        if(!url.includes('https://www.oddsportal.com')) url = `https://oddsportal.com${partido.url}`
         
        return (
            <div className="partido-tennis partido">
                <div className="partido-title">
                    <a className="partido-name" href={url} rel="noopener noreferrer" target="_blank">
                        {partido.name}
                    </a>
                </div>
                <hr />
                <div className="partido-body">
                    <div className="tennis-players">
                        <div className="player">
                            <div className="method">
                                <div>
                                    Coeficient M1: {localQM1}
                                </div>
                                <div>
                                    {partido.numMatchesLocalM1} partidos
                                </div>
                            </div>
                            <div className="method">
                                <div>
                                    Coeficient M2: {localQM2}
                                </div>
                                <div>
                                    {partido.numMatchesLocalM2} partidos
                                </div>
                            </div>
                        </div>
                        <div className="player">
                            <div className="method">
                                <div>
                                    Coeficient M1: {visitanteQM1}
                                </div>
                                <div>
                                    {partido.numMatchesVisitanteM1} partidos
                                </div>
                            </div>
                            <div className="method">
                                <div>
                                    Coeficient M2: {visitanteQM2}
                                </div>
                                <div>
                                    {partido.numMatchesVisitanteM2} partidos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default PartidoOp;
