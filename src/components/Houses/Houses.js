import React, { Component } from 'react';
import PartidosHouses from '../PartidosHouses/PartidosHouses';
import db from '../../database';

const dbHouses = db.child("houses");

class Houses extends Component{

    constructor(){
        super();
        this.state = {
            partidos: []
        }

        dbHouses.on("value", snapshot => {
            const newState = [];
            snapshot.forEach( match => {
                const partido = match.val();
                newState.push(partido);
            });  
            this.setState({ partidos: newState });
        });
    }

    render(){
        const { partidos } = this.state;
        if(partidos){
            return <PartidosHouses partidos={partidos} />
        }else return <><h1>No hay partidos que mostrar</h1></>
    }
}

export default Houses;
