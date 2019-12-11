import React, { Component } from 'react';
import PartidoHouses from '../PartidoHouses/PartidoHouses';
import './PartidosHouses.css';

class PartidosHouses extends Component{

    render(){
        const {partidos} = this.props;
        return (
            <div className="partidos">
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