import React, { Component } from 'react';
import PartidoHouses from '../PartidoHouses/PartidoHouses';
import NoPartidos from '../NoPartidos/NoPartidos'
import './PartidosHouses.css';

class PartidosHouses extends Component{

    render(){
        const {partidos} = this.props;
        return (
            <div className="partidos">
                <NoPartidos />
                {
                partidos.map((partido, index) => {
                    return <PartidoHouses key={index} partido={partido} />
                })
                }
            </div>
        );
    }
}

export default PartidosHouses;