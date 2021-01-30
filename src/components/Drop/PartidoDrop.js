import React, { Component } from 'react'
import { getBet365href, getOPhref } from '../../utils'
import bet365Icon from '../../icons/bet365.ico'
import pinnacleIcon from '../../icons/pinnacleIcon.png'
// import { } from '../../utils'
// import AlertComponent from '../AlertComponent/AlertComponent'
import './PartidoDrop.css'

class PartidoDrop extends Component{

    render(){ 
        const {partido} = this.props  
        //-->Obtenemos datos de la url
        const {game, country, tournament} = partido
        
        const colorRed = '#e74c3c'
        const colorGreen = '#2ecc71'   
        const colorGrey = '#95a5a6'
        // const href_link_op_local = "https://www.oddsportal.com/search/" + partido.local
        // const href_link_op_visitante = "https://www.oddsportal.com/search/" + partido.visitante        
        // const handleClick = () =>{
        //     setTimeout(() => {
        //         window.open(href_link_op_local)
        //         window.open(href_link_op_visitante)
        //     }, 1)
        // }    
        const colorDrop = (dropSpan) => {
            if (dropSpan > 0) return {color: colorGreen}
            else if(dropSpan < 0) return {color: colorRed}
            else return {color: colorGrey}
        }
        return (
            <div className="partido">
                <div className="partido-title">
                    <div className="partido-name">
                        <a href={getBet365href(partido.local)} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={bet365Icon} alt="bet365 icon"/>
                        </a>
                        <a href={getOPhref(partido.local)} rel="nofollow noopener noreferrer" target="_blank" title={getOPhref(partido.local)}>
                            {partido.local}
                        </a>
                    </div>
                    <a className="partido-name" href={partido.url} rel="nofollow noopener noreferrer" target="_blank">
                        <img src={pinnacleIcon} alt="icon pinnacle"/>
                    </a>
                    <div className="partido-name">
                        <a href={getOPhref(partido.visitante)} rel="nofollow noopener noreferrer" target="_blank" title={getOPhref(partido.visitante)}>
                            {partido.visitante}
                        </a>
                        <a href={getBet365href(partido.visitante)} rel="nofollow noopener noreferrer" target="_blank">
                            <img src={bet365Icon} alt="bet365 icon"/>
                        </a>
                    </div>
                    <div>
                        {partido.matchTime}
                    </div>
                </div>
                <hr />
                <div className="partido-drop-body">
                    <div className="partido-data">
                        <span>
                            {game} 
                        </span>
                        <span> - </span>
                        <span>
                            {country}
                        </span>
                        <span> - </span>
                        <span>
                            {tournament}
                        </span>
                    </div>
                    <div className="home-draw-away">
                        <div className="local">
                            <div className="cuotas-local">
                                {partido.cuotaLocal.map((cuota, index) => {
                                    let dropSpan = ''
                                    let drop
                                    if(index < partido.localDrop.length){
                                        dropSpan = partido.localDrop[index]
                                        drop = Math.abs(dropSpan)
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota.toFixed(2)}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {drop}
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
                                    let drop
                                    if(index < partido.drawDrop.length){
                                        dropSpan = partido.drawDrop[index]
                                        drop = Math.abs(dropSpan)
                                        // if(index === partido.drawDrop.length -1 && drop > MIN_DROP_ALERT){
                                        //     console.log('To Alert: ',partido);
                                        //     //alerts.push(partido)// return <AlertComponent key={index} url={partido.url} />
                                        // }
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota.toFixed(2)}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {drop}
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
                                    let drop
                                    if(index < partido.visitanteDrop.length){
                                        dropSpan = partido.visitanteDrop[index]
                                        drop = Math.abs(dropSpan)
                                        // if(index === partido.visitanteDrop.length -1 && drop > MIN_DROP_ALERT){
                                        //     console.log('To Alert: ',partido);
                                        //     //alerts.push(partido)// return <AlertComponent key={index} url={partido.url} />
                                        // }
                                    }
                                    return(
                                        <div className="cuotas" key={index}>
                                            <span>
                                                <div className="cuota">
                                                    {cuota.toFixed(2)}
                                                </div>
                                                <div className="drop" style={colorDrop(dropSpan)}>
                                                    {drop}
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
