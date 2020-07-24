import React, { Component } from 'react';
//import db from '../../database'
import PartidosTennis from './PartidosTennis'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import NoPartidos from '../NoPartidos/NoPartidos'

class TennisFinder extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
    }
    render(){ 
        const {partidos} = this.props
        if(partidos){
            if(partidos.length) return <PartidosTennis partidos={partidos} />
            else return <NoPartidos />
        }else return <SpinnerComponent />
    }
}

export default TennisFinder;
// componentDidMount(){
    // dbTennisFinder.on("value", snapshot => {
    //     const newState = {
    //         partidos: []
    //     }
    //     if(snapshot.val()){
    //         snapshot.forEach(partido => {
    //             partido = partido.val()    
    //             newState.partidos.push(partido)
    //         })
    //     }else newState.partidos = null
    //     this.setState(newState)
    // })
// }
// componentWillUnmount(){
//     dbTennisFinder.off();
// }