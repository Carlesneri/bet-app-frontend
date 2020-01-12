import React, { Component} from 'react';
import db from '../../database'
import PartidosDrop from './PartidosDrop'

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
            snapshot.forEach(snap => {
                newState.partidos.push(snap.val())                
            })
            this.setState(newState)
        }) 
    }

    render(){ 
        const {partidos} = this.state
        return <PartidosDrop partidos={partidos} />        
    }
}

export default Drop;