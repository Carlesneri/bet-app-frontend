import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import "./PartidoHouses.css";
import link from '../../images/link.ico';

class PartidoHouses extends Component {

    constructor(props){
        super(props);
        this.state = {
            partido: this.props.partido
        }
    }
    
    componentDidMount(){
        const { partido } = this.state;
        var localKeys = [];
        var drawKeys = [];
        var visKeys = [];

        if(partido.cuotaLocal) localKeys = Object.keys(partido.cuotaLocal);
        if(partido.cuotaDraw) drawKeys = Object.keys(partido.cuotaDraw);
        if(partido.cuotaVisitante) visKeys = Object.keys(partido.cuotaVisitante);

        const subsCuotas = (player, keys) => {
            const cuotas = keys.map( house => 
                partido[player][house].cuotaAct
                )
            const cuotaMax = Math.max(...cuotas)
            const cuotaMin = Math.min(...cuotas)
            return Math.abs(Math.floor((1/cuotaMax - 1/cuotaMin)*1000)/10);
        }
        
        const subsCuotaLocal = subsCuotas("cuotaLocal", localKeys);
        const subsCuotaDraw = subsCuotas("cuotaDraw", drawKeys);
        const subsCuotaVis = subsCuotas("cuotaVisitante", visKeys);
        partido.subsCuotaLocal = subsCuotaLocal;
        partido.subsCuotaDraw = subsCuotaDraw;
        partido.subsCuotaVis = subsCuotaVis;

        this.setState(partido)
    }
    
    render (){
        const { partido } = this.state;
        var localKeys = [];
        var drawKeys = [];
        var visKeys = [];
        if(partido.cuotaLocal) localKeys = Object.keys(partido.cuotaLocal);
        if(partido.cuotaDraw) drawKeys = Object.keys(partido.cuotaDraw);
        if(partido.cuotaVisitante) visKeys = Object.keys(partido.cuotaVisitante);
        const href_link = "https://www.oddsportal.com/search/" + partido.local;
     
        return (
            <Container>
                <Card className="card-partido-houses">
                    <Card.Title className="card-title-houses">
                        {`${partido.local} - ${partido.visitante} (${partido.league})`}
                        <a href={href_link} target="_blank" rel="noopener noreferrer">
                            <img src={link} className="link-ico" alt="link" />
                        </a>
                    </Card.Title>
                    <hr />
                    <hr />
                    <Card.Body className="card-body-houses">
                        <div className="home-draw-away">
                            <div className="houses-cuotas">
                                {localKeys.map(house => {
                                    const cuotaAct = partido.cuotaLocal[house].cuotaAct;
                                    const cuotaAnt = partido.cuotaLocal[house].cuotaAnt;
                                    const drop = dropObj(cuotaAct, cuotaAnt);
                                    const dropStyle = {color: drop.style}
                                    if(cuotaAct){
                                        return (
                                            <div className="house-cuota" key={house}>
                                                <div>{`${house}: `}</div>
                                                <div>{cuotaAct}</div>
                                                <div style={dropStyle}>{drop.value}</div>
                                            </div>
                                        );
                                    }else return null;
                                })}
                            </div>
                            <div className="subs-cuota">
                                {partido.subsCuotaLocal}%
                            </div>
                        </div>
                        <div className="home-draw-away">
                            <div className="houses-cuotas">
                                {drawKeys.map(house => {
                                    const cuotaAct = partido.cuotaDraw[house].cuotaAct;
                                    const cuotaAnt = partido.cuotaDraw[house].cuotaAnt;
                                    const drop = dropObj(cuotaAct, cuotaAnt);
                                    const dropStyle = {color: drop.style}
                                    if(cuotaAct){
                                        return (
                                            <div className="house-cuota" key={house}>
                                                <div>{`${house}: `}</div>
                                                <div>{cuotaAct}</div>
                                                <div style={dropStyle}>{drop.value}</div>
                                            </div>
                                        );
                                    }else return null;
                                })}
                            </div>
                            <div className="subs-cuota">
                                {partido.subsCuotaDraw}%
                            </div>
                        </div>
                        <div className="home-draw-away">
                            <div className="houses-cuotas">
                                {visKeys.map(house => {
                                    const cuotaAct = partido.cuotaVisitante[house].cuotaAct;
                                    const cuotaAnt = partido.cuotaVisitante[house].cuotaAnt;
                                    const drop = dropObj(cuotaAct, cuotaAnt);
                                    const dropStyle = {color: drop.style}
                                    if(cuotaAct){
                                        return (
                                            <div className="house-cuota" key={house}>
                                                <div>{`${house}: `}</div>
                                                <div>{cuotaAct}</div>
                                                <div style={dropStyle}>{drop.value}</div>
                                            </div>
                                        );
                                    }else return null;
                                })}
                            </div>
                            <div className="subs-cuota">
                                {partido.subsCuotaVis}%
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

const dropObj = (cuotaAct, cuotaAnt) => {
    let style = null;
    let value = null;
    if (cuotaAct && cuotaAnt){
        value = Math.floor(1000*(1/cuotaAct - 1/cuotaAnt))/10;
        if (value < 0) style = 'green';
        else if (value > 0) style = 'red';
        else value = null;
    }
    return {value, style};
}

export default PartidoHouses;
