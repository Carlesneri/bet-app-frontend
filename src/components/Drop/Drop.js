import React, { Component } from 'react';
import db from '../../database'
import PartidosDrop from './PartidosDrop'

const dbPinnacle = db.child('pinnacle')

class Drop extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
    }
    componentDidMount(){
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
    componentWillUnmount(){
        dbPinnacle.off();
    }
    render(){ 
        const {partidos} = this.state
        return (
            <div>
                <PartidosDrop partidos={partidos} />        
            </div>
        )
    }
}

export default Drop;