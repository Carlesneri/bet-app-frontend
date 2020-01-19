import React, { Component } from 'react';
import db from '../../database'
import PartidosDrop from './PartidosDrop'
import NoPartidos from '../NoPartidos/NoPartidos'

const dbPinnacle = db.child('pinnacle')

class Drop extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
        dbPinnacle.on("value", snapshot => {
            const newState = {
                partidos: []
            }
            snapshot.forEach(partido => {
                partido = partido.val()    
                newState.partidos.push(partido)
            })
            this.setState(newState)
        })
    }

    render(){ 
        const {partidos} = this.state
        if(partidos.length){
            return <PartidosDrop partidos={partidos} />        
        }else return <NoPartidos />
    }
}

export default Drop;