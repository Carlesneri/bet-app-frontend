import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import link from '../../images/link.ico'
import './PartidoDrop.css'

class PartidoDrop extends Component{

    render(){        
        const {partido} = this.props        
        const href_link_op_local = "https://www.oddsportal.com/search/" + partido.local
        const href_link_op_visitante = "https://www.oddsportal.com/search/" + partido.visitante
        
        return (
            <Container>
                <Card className="card-partido">
                    <Card.Title className="card-title">
                        <a href={partido.url} target="_blank" rel="noopener noreferrer">
                            {`${partido.local} - ${partido.visitante}`}
                        </a>
                        <div>
                            {partido.matchTime}
                        </div>
                        <div>
                            <a href={href_link_op_local} target="_blank" rel="noopener noreferrer">
                                <img className="link-ico" src={link} alt="op-local" />
                            </a>
                            <a href={href_link_op_visitante} target="_blank" rel="noopener noreferrer">
                                <img className="link-ico" src={link} alt="op-visitante" />
                            </a>
                        </div>
                    </Card.Title>
                    <hr />
                    <hr />
                    <Card.Body className="card-body">
                        <div className="home-draw-away">
                            <div className="local">
                                <div className="cuotas-local">
                                    {partido.cuotasLocal.map((cuotaObj, index) => {
                                        const cuota = cuotaObj.cuota
                                        let dropSpan = ''
                                        if(index < partido.localDrop.length){
                                            dropSpan = partido.localDrop[index]
                                        }
                                        return(
                                            <div className="cuotas" key={index}>
                                                <span>
                                                    <div className="cuota">
                                                        {String(cuota)}
                                                    </div>
                                                    <div className="drop">
                                                        {String(dropSpan)}
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
                                    {partido.cuotasDraw.map((cuotaObj, index) => {
                                        const cuota = cuotaObj.cuota
                                        let dropSpan = ''
                                        if(index < partido.drawDrop.length){
                                            dropSpan = partido.drawDrop[index]
                                        }
                                        return(
                                            <div className="cuotas" key={index}>
                                                <span>
                                                    <div className="cuota">
                                                        {String(cuota)}
                                                    </div>
                                                    <div className="drop">
                                                        {String(dropSpan)}
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
                                    {partido.cuotasVisitante.map((cuotaObj, index) => {
                                        const cuota = cuotaObj.cuota
                                        let dropSpan = ''
                                        if(index < partido.visitanteDrop.length){
                                            dropSpan = partido.visitanteDrop[index]
                                        }
                                        return(
                                            <div className="cuotas" key={index}>
                                                <span>
                                                    <div className="cuota">
                                                        {String(cuota)}
                                                    </div>
                                                    <div className="drop">
                                                        {String(dropSpan)}
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
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default PartidoDrop