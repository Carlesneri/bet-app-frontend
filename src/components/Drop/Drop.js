import React, { Component } from 'react';
// import db from '../../database'
import PartidosDrop from './PartidosDrop'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent'
import NoPartidos from '../NoPartidos/NoPartidos'

// const dbPinnacle = db.child('pinnacle')

class Drop extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         partidos: []
    //     }
    // }
    // componentDidMount(){
        // dbPinnacle.on("value", snapshot => {
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
        // dbPinnacle.off();
    // }

    render(){ 
        const {partidos} = this.props  
        if(partidos){
            if(partidos.length) return <PartidosDrop partidos={partidos} />        
            else return <NoPartidos />
        }else return <SpinnerComponent />  
    }
}

export default Drop;