import React, { Component } from 'react'
import './PartidoDrop.css'

class PartidoDrop extends Component{

    render(){    
        const {partido} = this.props  
        const colorRed = '#e74c3c'
        const colorGreen = '#2ecc71'   
        const colorGrey = '#95a5a6'
        const href_link_op_local = "https://www.oddsportal.com/search/" + partido.local
        const href_link_op_visitante = "https://www.oddsportal.com/search/" + partido.visitante        
        const handleClick = () =>{
            setTimeout(() => {
                window.open(href_link_op_local)
                window.open(href_link_op_visitante)
            }, 1)
        }    
        const colorDrop = (dropSpan) => {
            if (dropSpan > 0) return {color: colorGreen}
            else if(dropSpan < 0) return {color: colorRed}
            else return {color: colorGrey}
        }
        return (
            <div className="partido">
                <div className="partido-title">
                    <a className="partido-name" href={partido.url} rel="noopener noreferrer" target="_blank" onClick={handleClick}>
                        {`${partido.local} - ${partido.visitante}`}
                    </a>
                    <div>
                        {partido.matchTime}
                    </div>
                </div>
                <hr />
                <div className="partido-body">
                    <div className="home-draw-away">
                        <div className="local">
                            <div className="cuotas-local">
                                {partido.cuotaLocal.map((cuota, index) => {
                                    let dropSpan = ''
                                    if(index < partido.localDrop.length){
                                        dropSpan = partido.localDrop[index]
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {Math.abs(dropSpan)}
                                                </div>
                                            </span>
                                        </div>
                                    )                                            
                                })}
                            </div>
                            <div className="total-drop">
                                {partido.totLocalDrop.toFixed(2)}
                            </div>
                        </div>
                        <hr></hr>
                        <div className="draw">
                            <div className="cuotas-draw">
                                {partido.cuotaDraw.map((cuota, index) => {
                                    let dropSpan = ''
                                    if(index < partido.drawDrop.length){
                                        dropSpan = partido.drawDrop[index]
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {Math.abs(dropSpan)}
                                                </div>
                                            </span>
                                        </div>
                                    )                                            
                                })}
                            </div>
                            <div className="total-drop">
                                {partido.totDrawDrop.toFixed(2)}
                            </div>
                        </div>
                        <hr></hr>
                        <div className="visitante">
                            <div className="cuotas-visitante">
                                {partido.cuotaVisitante.map((cuota, index) => {
                                    let dropSpan = ''
                                    if(index < partido.visitanteDrop.length){
                                        dropSpan = partido.visitanteDrop[index]
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {Math.abs(dropSpan)}
                                                </div>
                                            </span>
                                        </div>
                                    )                                            
                                })}
                            </div>
                            <div className="total-drop">
                                {partido.totVisitanteDrop.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default PartidoDrop
