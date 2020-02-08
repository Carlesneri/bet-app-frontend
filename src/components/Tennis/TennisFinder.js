import React, { Component } from 'react';
import db from '../../database'
import PartidosTennis from './PartidosTennis'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import NoPartidos from '../NoPartidos/NoPartidos'

const dbTennisFinder = db.child('tennisFinder')

class TennisFinder extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
    }
    componentDidMount(){
        dbTennisFinder.on("value", snapshot => {
            const newState = {
                partidos: []
            }
            if(snapshot.val()){
                snapshot.forEach(partido => {
                    partido = partido.val()    
                    newState.partidos.push(partido)
                })
            }else newState.partidos = null
            this.setState(newState)
        })
    }
    componentWillUnmount(){
        dbTennisFinder.off();
    }
    render(){ 
        const {partidos} = this.state
        if(partidos){
            if(partidos.length) return <PartidosTennis partidos={partidos} />
            else return <SpinnerComponent />
        }else return <NoPartidos />
    }
}

export default TennisFinder;