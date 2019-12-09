import React, { Component } from 'react';
import PartidoHouses from '../PartidoHouses/PartidoHouses';

class PartidosHouses extends Component{

    render(){
        const {partidos} = this.props;
        return(
            <>{
                partidos.map((partido, index) => {
                    return <PartidoHouses key={index} partido={partido} />
                })
            }</>
        )
    }
}

export default PartidosHouses;